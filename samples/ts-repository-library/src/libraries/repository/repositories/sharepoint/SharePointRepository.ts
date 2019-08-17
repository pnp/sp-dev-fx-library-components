
import { sp, ItemAddResult, ItemUpdateResult, List, SPRest, Web } from "@pnp/sp";
import { ISharePointBaseRepository } from "./ISharePointBaseRepository";
import IListItem from "../core/IListItem";
import IQueryOption from "../core/IQueryOption";

export default class SharePointRepository<T extends IListItem> implements ISharePointBaseRepository<T>{
    protected _list: List;
    protected _web: Web;
    protected _sp: SPRest;

    constructor(listId: string, webUrl?: string) {
        this._web = webUrl ? new Web(webUrl) : this._web = sp.web;
        this._list = this._web.lists.getById(listId);
        this._sp = sp;
    }

    // Add new entity to collection
    public async add(item: Omit<T, "Id">): Promise<ItemAddResult> {
        return this._list.items.add(item);
    }

    // Update an existing entity
    public async update(item: T): Promise<ItemUpdateResult> {
        const updatingItem: Omit<T, "Id"> = item;
        return this._list.items.getById(item.Id).update(updatingItem);
    }

    // Remove an entity
    public async delete(id: number): Promise<void> {
        return this._list.items.getById(id).delete();
    }

    // Get all items
    public async getAll(): Promise<T[]> {
        try {
            const items = await this._list.items.getAll();
            return items;
        }
        catch (error) {
            return Promise.reject(error.message);
        }
    }

    // Get one by Id, optional query options
    public async getOne(id: number, queryOptions?: Omit<IQueryOption, "top" | "filter">): Promise<T> {
        let result = this._list.items.getById(id);
        if (queryOptions) {
            if (queryOptions.expand)
                result = result.expand(...queryOptions.expand);
            if (queryOptions.select)
                result = result.select(...queryOptions.select);
        }
        try {
            const item = await result.get();
            return item;
        }
        catch (error) {
            return Promise.reject(error.message);
        }
    }

    // Get items using CAML query
    public async getItemsByCAMLQuery(query: import("@pnp/sp").CamlQuery, ...expands: string[]): Promise<T[]> {
        return this._list.getItemsByCAMLQuery(query, ...expands);
    }

    // Get items using query options
    public async getItemsByQuery(queryOptions: IQueryOption): Promise<T[]> {
        const { filter, select, expand, top, skip } = queryOptions;
        let result = this._list.items;
        if (filter) result = result.filter(filter);
        if (select) result = result.select(...select);
        if (expand) result = result.expand(...expand);
        if (top) result = result.top(top);
        if (skip) result = result.skip(skip);
        return result.get();
    }
}
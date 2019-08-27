import { CamlQuery } from "@pnp/sp/src/types";
import IQueryOption from "./IQueryOption";

export default interface IQuery<T>{
    getItemsByCAMLQuery:(query: CamlQuery, ...expands: string[])=> Promise<T[]>;
    getItemsByQuery:(queryOptions: IQueryOption)=>Promise<T[]>;
}
export interface IWrite<T> {
    add(item: T): Promise<any>;
    update(item: T): Promise<any>;
    delete(id: number | string): Promise<void>;
}
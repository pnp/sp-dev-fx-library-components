import IQueryOption from "./IQueryOption";

export interface IRead<T> {
  getAll(): Promise<T[]>;
  getOne(id: number | string,options?:IQueryOption): Promise<T>; 
}
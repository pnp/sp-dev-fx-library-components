export default interface IQueryOption{
    select?: string[];
    filter?:string;
    expand?:string[];
    top?:number;
    skip?:number;
}
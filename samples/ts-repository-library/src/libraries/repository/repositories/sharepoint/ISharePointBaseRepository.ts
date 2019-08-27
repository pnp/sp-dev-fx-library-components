// import all interfaces
import { IWrite } from '../core/IWrite';
import { IRead } from '../core/IRead';
import IListItem from '../core/IListItem';
import IQuery from '../core/IQuery';
// that class only can be extended
export interface ISharePointBaseRepository<T extends IListItem> extends IWrite<T>, IRead<T>,IQuery<T> {

}
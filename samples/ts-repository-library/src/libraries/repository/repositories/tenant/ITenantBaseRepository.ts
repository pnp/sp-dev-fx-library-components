// import all interfaces
import { IWrite } from '../core/IWrite';
import { IRead } from '../core/IRead';
// that class only can be extended
export interface ITenantBaseRepository<T> extends IWrite<T>, IRead<T> {}
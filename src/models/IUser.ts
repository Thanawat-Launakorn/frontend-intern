export default interface IUser {
  id?: number | string;
  key?: string;
  name?: string;
  email: string;
  password: string;
  img: any;
  tel: string;
  position: string;
}
export interface IUserTable extends IUser {
  columnName?: Pick<IUser, "name" | "email" | "img">;
  
}

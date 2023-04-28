import axios from "axios";
import IUser from "../../models/IUser";

const BASE_URL = "http://192.168.2.62:3001/";
export async function getUser() {
  return await axios.get<Array<IUser>>(`${BASE_URL}user/getAll`);
}

export async function Delete<IModel>(id?: number, BASE_URL?: string) {
  if (id) {
    return await axios.delete<IModel>(`${BASE_URL}user/remove${id}`);
  }
}

// export async function Update<IModel>(id?: number, BASE_URL?: string) {
//   if (id) {
//     return await axios.update<IModel>(`${BASE_URL}user/update${id}`);
//   }
// }
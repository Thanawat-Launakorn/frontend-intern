import axios from "axios";
import IUser from "../../models/IUser";

const BASE_URL = "http://192.168.2.62:3001/";
export async function getUser() {
  await axios.get<Array<IUser>>(`${BASE_URL}user/getAll`);
}

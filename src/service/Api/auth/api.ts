import axios from "axios";
import IUser from "../../../models/IUser";

const BASE_URL = "http://192.168.2.62:3001/api";
export async function GET_ALL_User() {
  return await axios.get<Array<IUser>>(`${BASE_URL}user/getAll`);
}

export async function POST_REGISTER_USER(params?: any) {
  if (params) {
    return await axios.post<any>(`${BASE_URL}user/create`, params);
  }
}

export async function POST_CHECK_EMAIL_UNUSE(email?: string) {
  if (email) {
    return await axios.post<string>(`${BASE_URL}`, email);
  }
}

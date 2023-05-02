const BASE_URL = "http://192.168.2.62:3001/";
import schedule from "../../../libs/axios/schedule-api";

export async function GET_USER(token?: any) {
  schedule.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const res = await schedule.get(BASE_URL + "authentication/profile");
  return res.data;
}

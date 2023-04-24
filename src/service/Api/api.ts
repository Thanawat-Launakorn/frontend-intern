import axios from "axios";
const BASE_URL = "";
export async function getUser() {
  await axios.get(`${BASE_URL}`);
}

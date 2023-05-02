import type { AxiosResponse } from "axios";
import axios from "axios";
import { authentication } from "../../libs/auth/config/initial-value.config";
import { _GetLocalStorage } from "../../utils/storage.utils";
import { localStorageKey } from "../local-storage-key";
import projectConfig from "../project.config";

const token = _GetLocalStorage(
  localStorageKey.authentication,
  authentication.token
);

const instance = axios.create({
  baseURL: projectConfig.baseURL,
  // timeout: 1000,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token.accessToken}`,
  },
  validateStatus: (_) => true,
});

// export default instance;
export const instanceBasic = axios.create({
  baseURL: projectConfig.baseURL,
  // timeout: 1000,
  headers: {
    Accept: "application/json",
    Authorization: ``,
  },
  validateStatus: (_) => true,
});

export const throwResponse = (res: AxiosResponse) => {
  const { message } = res.data?.result;
  if (!Array.isArray(message)) {
    throw new Error(message);
  }
  const text = message.reduce((result: string, item: string) => {
    return `${result}${item}\n`;
  }, "");
  throw new Error(text);
};

// instance.defaults.headers.common["Authorization"] = token;
export const axiosCreate = { default: instance, basicHeaders: instanceBasic };
export default instance;

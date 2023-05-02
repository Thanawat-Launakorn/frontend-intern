import type { AxiosResponse } from "axios";
import axios from "../../../config/axios/axios.config";

import type { IO_Sigin, ISigin } from "./auth-interface";

import { throwResponse } from "../../../config/axios/axios.config";
import { _GetLocalStorage } from "../../../utils/storage.utils";
import { authentication } from "../../../libs/auth/config/initial-value.config";
import { endpoint } from "../api-endpoint.config";
import { localStorageKey } from "../../../config/local-storage-key";

const statusSuccess = [200, 201];

export const signIn = async (params: ISigin): Promise<IO_Sigin> => {
  const res = await axios.post(endpoint.auth.signIn);
  if (!statusSuccess.includes(res.status)) throwResponse(res);
  return res.data;
};

export const getMe = async (): Promise<AxiosResponse> => {
  const res = await axios.get(endpoint.auth.getUser);
  if (!statusSuccess.includes(res.status)) {
    throwResponse(res);
  }
  return res.data;
};

// --------- utils ------------------------
export const getToken = () => {
  return _GetLocalStorage(localStorageKey.authentication, authentication.token);
};

// --------- export ------------------------

export const authAPI = { signIn, getMe };
export default authAPI;

import type { RouteObject } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import { localStorageKey } from "../config/local-storage-key";
import { userInfo } from "../libs/auth/config/initial-value.config";
import { UserInfo } from "../libs/auth/config/interface.config";
import {
  _diffFilterArrayByKey,
  _removeObjectKeyOfArray,
} from "../utils/array.util";
import { _GetLocalStorage } from "../utils/storage.utils";

import { routerAuthorization } from "./authorization.router";
import { routerDefault } from "./defalut.router";
export const userInfoState: UserInfo = _GetLocalStorage<UserInfo>(
  localStorageKey.userInfo,
  userInfo
);

const routerAuth: RouteObject[] = _removeObjectKeyOfArray({
  array: _diffFilterArrayByKey({
    mainArray: routerAuthorization,
    searchArray: userInfoState.permission,
    key: "keyName",
  }),
  key: "keyName",
});

export const routes = createBrowserRouter([...routerDefault, ...routerAuth]);

export default routes;

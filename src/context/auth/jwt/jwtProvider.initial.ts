import type { AuthPayload } from "../provider.interface";
import type { InitialState } from "./jwtProvider.interface";
import type { InitialDispatchContext } from "./jwtProvider.interface";

import { ReducerType } from "../provider.enum";
import { _GetLocalStorage } from "../../../utils/storage.utils";
import { Token, UserInfo } from "../../../libs/auth/config/interface.config";
import { localStorageKey } from "../../../config/local-storage-key";
import {
  authentication,
  userInfo,
} from "../../../libs/auth/config/initial-value.config";

const userInfoInitialState: UserInfo = _GetLocalStorage<UserInfo>(
  localStorageKey.userInfo,
  userInfo
);
const tokenInitialState: Token = _GetLocalStorage<Token>(
  localStorageKey.authentication,
  authentication.token
);

export const initialValue: InitialState = {
  auth: !!tokenInitialState?.accessToken,
  token: tokenInitialState,
  userInfo: userInfoInitialState,
};
export const initialDispatchContext: InitialDispatchContext = {
  _signIn: (payload: AuthPayload[ReducerType.Login]) => null,
  _signOut: () => null,
};
export const DispatchValue = {};

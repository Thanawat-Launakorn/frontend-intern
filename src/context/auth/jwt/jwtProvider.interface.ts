import {
  Authentication,
  UserInfo,
} from "../../../libs/auth/config/interface.config";
import { ReducerType } from "../provider.enum";
import type { AuthPayload } from "../provider.interface";

export interface InitialState extends Authentication {
  userInfo: UserInfo;
}
export interface InitialDispatchContext {
  _signIn: (payload: AuthPayload[ReducerType.Login]) => void;
  _signOut: () => void;
}
export interface AuthProviderType {
  children: React.ReactNode;
}

import { Token, UserInfo } from "../../libs/auth/config/interface.config";
import { ReducerType } from "./provider.enum";

type DispatchMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

export type AuthPayload = {
  [ReducerType.Login]: {
    token: Token;
    userInfo: UserInfo;
  };
  [ReducerType.Logout]: null;
};
export type DispatchAuth =
  DispatchMap<AuthPayload>[keyof ActionMap<AuthPayload>];

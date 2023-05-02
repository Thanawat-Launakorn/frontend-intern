import { Token, UserInfo } from "../../../libs/auth/config/interface.config";

export interface ISigin {
  email: string;
  password: string;
}

export interface IO_Sigin {
  token: Token;
  userInfo: UserInfo;
}

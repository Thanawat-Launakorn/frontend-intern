import { ReducerType } from "../provider.enum";
import { DispatchAuth } from "../provider.interface";
import { initialValue } from "./jwtProvider.initial";
import type { InitialState } from "./jwtProvider.interface";

const reducerState = (
  state = initialValue,
  action: DispatchAuth
): InitialState => {
  switch (action.type) {
    case ReducerType.Login:
      return {
        ...state,
        auth: !!action.payload["token"]["accessToken"],
        token: action.payload["token"],
        userInfo: action.payload["userInfo"],
      };
    case ReducerType.Logout:
      return { ...state, auth: false };
    default:
      return state;
  }
};

export default reducerState;

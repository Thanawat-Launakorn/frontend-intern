import { Dispatch } from "react";
import { localStorageKey } from "../../../config/local-storage-key";
import { ReducerType } from "../provider.enum";
import { DispatchAuth, AuthPayload } from "../provider.interface";

const userLogin =
  (dispatch: Dispatch<DispatchAuth>) =>
  async (payload: AuthPayload[ReducerType.Login]) => {
    localStorage.setItem(
      localStorageKey.authentication,
      JSON.stringify(payload.token)
    );
    localStorage.setItem(
      localStorageKey.userInfo,
      JSON.stringify(payload.userInfo)
    );
    dispatch({
      type: ReducerType.Login,
      payload: payload,
    });
  };

const userLogout = (dispatch: Dispatch<DispatchAuth>) => async () => {
  localStorage.removeItem(localStorageKey.userInfo);
  localStorage.removeItem(localStorageKey.authentication);
  dispatch({
    type: ReducerType.Logout,
    payload: null,
  });
};

export { userLogin, userLogout };

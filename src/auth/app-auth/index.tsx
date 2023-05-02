import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { localStorageKey } from "../../config/local-storage-key";
import { authentication } from "../../libs/auth/config/initial-value.config";
import { Token } from "../../libs/auth/config/interface.config";
import { _GetLocalStorage } from "../../utils/storage.utils";
export default function RequireAuth() {
  const location = useLocation(); //path ปัจจุบัน
  const tokenInitialState: Token = _GetLocalStorage<Token>(
    localStorageKey.authentication,
    authentication.token
  );

  return !tokenInitialState.accessToken ? (
    <Navigate to={"/login"} state={{ from: location.pathname }} replace />
  ) : (
    <Outlet />
  );
}

import type { InitialState } from "./jwtProvider.interface";
import type { AuthProviderType } from "./jwtProvider.interface";
import type { InitialDispatchContext } from "./jwtProvider.interface";

import React from "react";
import Reducer from "./jwtProvider.reduce";
import { initialDispatchContext, initialValue } from "./jwtProvider.initial";

import { userLogin } from "./jwtProvider.action";
import { userLogout } from "./jwtProvider.action";

const AuthStateContext = React.createContext<InitialState>(initialValue);
const AuthDispatchContext = React.createContext<InitialDispatchContext>(
  initialDispatchContext
);

const AuthProvider = ({ children }: AuthProviderType) => {
  const [state, dispatch] = React.useReducer(Reducer, initialValue);
  const DispatchValue: InitialDispatchContext = {
    _signIn: userLogin(dispatch),
    _signOut: userLogout(dispatch),
  };
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={DispatchValue}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useSpinState must be used within a SpinProvider");
  }
  return context;
};

const useAuthDispatch = () => {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useSpinDispatch must be used within a SpinProvider");
  }
  return context;
};
export { AuthProvider, useAuthState, useAuthDispatch };
export default AuthProvider;

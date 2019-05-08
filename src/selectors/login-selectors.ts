import { createSelector } from "reselect";
import iState from "../interfaces/state";

const getState = (state: iState) => state.login.loginState;
const getMessage = (state: iState) => state.login.message;

export const getLoginState = createSelector(
  getState,
  loginState => loginState
);

export const getLoginMessage = createSelector(
  getMessage,
  message => message
);

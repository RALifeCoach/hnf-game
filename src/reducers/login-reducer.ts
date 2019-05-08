import { getType } from "typesafe-actions";
import * as loginActions from "../actions/login-actions";
import iAction from "../interfaces/action";
import iLoginState from "../interfaces/login-state";

const INITIAL_STATE = {
  token: "",
  userId: "",
  password: "",
  loginState: "not logged in",
  message: ""
};

export function reducer(state: iLoginState = INITIAL_STATE, action: iAction) {
  switch (action.type) {
    case getType(loginActions.loginRequest):
      return {
        ...state,
        token: "",
        loginState: "in progress"
      };
    case getType(loginActions.loginSuccess):
      return {
        ...state,
        token: action.payload.token,
        loginState: "login success"
      };
    case getType(loginActions.loginFailure):
      return {
        ...state,
        message: action.payload.message,
        loginState: "login failure"
      };
    default:
      return state;
  }
}

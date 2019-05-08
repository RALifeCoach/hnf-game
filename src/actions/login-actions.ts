import { createAction } from "typesafe-actions";

const REQUEST = "login/REQUEST";
const SUCCESS = "login/SUCCESS";
const FAILURE = "login/FAILURE";

export const loginRequest = createAction(
  REQUEST,
  action => (userId: string, password: string) =>
    action({ type: REQUEST, userId, password })
);

export const loginSuccess = createAction(SUCCESS, action => (token: string) =>
  action({ type: SUCCESS, token })
);

export const loginFailure = createAction(FAILURE, action => (message: string) =>
  action({ type: FAILURE, message })
);

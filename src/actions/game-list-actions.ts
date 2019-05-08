import { createAction } from "typesafe-actions";
import iGame from "../interfaces/game";

const REQUEST = "game-list/REQUEST";
const SUCCESS = "game-list/SUCCESS";
const FAILURE = "game-list/FAILURE";

export const gameListRequest = createAction(REQUEST, action => () =>
  action({ type: REQUEST })
);

export const gameListSuccess = createAction(
  SUCCESS,
  action => (games: iGame[]) => action({ type: SUCCESS, games })
);

export const gameListFailure = createAction(
  FAILURE,
  action => (message: string) => action({ type: FAILURE, message })
);

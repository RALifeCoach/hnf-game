import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import * as Actions from "../actions/login-actions";
import iAction from "../interfaces/action";

// epic
const loginEpic = (action$: any) =>
  action$.pipe(
    ofType(Actions.loginRequest),
    mergeMap((action: iAction) =>
      ajax.post(`http://localhost:8091/api/authenticate`, action.payload).pipe(
        map((response: any) => {
          if (response.response.success) {
            return Actions.loginSuccess(response.response.token);
          } else {
            return Actions.loginFailure(response.response.message);
          }
        })
      )
    )
  );

export default loginEpic;

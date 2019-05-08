import { combineEpics } from "redux-observable";

import * as loginEpics from "../epics/login-epic";

export default combineEpics(...Object.values(loginEpics));

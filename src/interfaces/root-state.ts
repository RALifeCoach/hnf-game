import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { reducer as loginReducer } from '../reducers/login-reducer';

const reducers = combineReducers({
    login: loginReducer
})

export type RootState = StateType<typeof reducers>;

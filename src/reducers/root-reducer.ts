import { combineReducers } from 'redux';
import { reducer as loginReducer } from '../reducers/login-reducer';

const rootReducer = combineReducers({
    login: loginReducer
});

export default rootReducer;

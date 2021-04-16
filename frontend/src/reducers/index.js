import {combineReducers} from "redux";
import authReducer from '../reducers/auth.reducers';

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;
import {combineReducers} from "redux";
import authReducer from '../reducers/auth.reducers';
import medicationReducer from '../reducers/medication.reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    medication: medicationReducer
});

export default rootReducer;
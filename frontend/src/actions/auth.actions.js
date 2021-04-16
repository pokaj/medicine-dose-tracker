import {authConstants} from "./constants";
import axios from '../helpers/axios';


export const signup = (data) => {
    return async (dispatch) => {
        dispatch({type: authConstants.USER_SIGNUP_REQUEST});
        const response = await axios.post('/user/signup', {
            ...data
        });
        const {user, token, error} = response.data
        if(response.status === 201){
            dispatch({type: authConstants.USER_SIGNUP_SUCCESS});
            dispatch({type: authConstants.USER_LOGIN_SUCCESS, payload: {user, token}});
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user))
        }else{
            dispatch({type: authConstants.USER_SIGNUP_FAILURE, error: {error}});
        }

    }
}
export const login = (data) => {
    return async (dispatch) => {
        dispatch({type: authConstants.USER_LOGIN_REQUEST});
        const response = await axios.post('/user/login', {
            ...data
        });
        const {user, token, error} = response.data
        if (response.status === 200) {
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({type: authConstants.USER_LOGIN_SUCCESS, payload: {user, token}});
        } else {
            dispatch({type: authConstants.USER_LOGIN_FAILURE, error: {error}});
        }
    }
}

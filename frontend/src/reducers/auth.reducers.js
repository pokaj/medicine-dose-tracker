import {authConstants} from "../actions/constants";

const initState = {
    token: null,
    user: {
        firstname: '',
        lastname: '',
        email: '',
        age: '',
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
}


export default (state = initState, action) => {
    switch(action.type){
        case(authConstants.USER_SIGNUP_REQUEST):
            state = {
                ...state,
                loading: true,
            }
            break;

        case(authConstants.USER_SIGNUP_FAILURE):
            state = {
                ...state,
                loading: false,
                error: action.error.error
            }
            break;

        case(authConstants.USER_LOGIN_REQUEST):
            state = {
                ...state,
                loading: true,
            }
            break;

        case(authConstants.USER_LOGIN_SUCCESS):
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;

        case(authConstants.USER_LOGIN_FAILURE):
            state = {
                ...initState,
                loading: false,
            }
            break;

        case(authConstants.USER_LOGOUT_REQUEST):
            state = {
                ...state,
                loading: true,
            }
            break;

        case(authConstants.USER_LOGOUT_SUCCESS):
            state = {
                ...initState,
                loading: false,
            }
            break;

        case(authConstants.USER_LOGOUT_FAILURE):
            state = {
                ...state,
                loading: false,
            }
            break;
    }

    return state
}
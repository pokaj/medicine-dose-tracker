import axios from 'axios';
import {api} from './url_config';
import store from '../store'
import {authConstants} from "../actions/constants";

const token = localStorage.getItem('token');
const axios_instance = axios.create({
    baseURL: api,
    headers:{
        'Authorization': token ? `Token ${token}` : ''
    }
})

axios_instance.interceptors.request.use((req) => {
    const { auth } = store.getState();
    if (auth.token) {
        req.headers.Authorization = `Token ${auth.token}`;
    }
    return req;
});

axios_instance.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        const status = error.response ? error.response.status : 500;
        if (status && status === 401) {
            localStorage.clear();
            store.dispatch({ type: authConstants.USER_LOGOUT_SUCCESS });
        }
        return Promise.reject(error);
    }
);

export default axios_instance;
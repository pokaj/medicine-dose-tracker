import React, {useEffect} from 'react'
import { Redirect, Route } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {isUserLoggedIn} from "../../actions/auth.actions";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const auth = useSelector(state=>state.auth);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if(!auth.authenticate){
    //         dispatch(isUserLoggedIn());
    //     }
    // }, [auth.authenticate]);

    return (
        <Route
            {...rest}
            render={props =>
                !auth.authenticate === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
            }
        />
    )
}

export default PrivateRoute
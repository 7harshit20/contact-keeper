import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Authcontext from '../../context/auth/AuthContext'
const PrivateRoute = ({ component: Component, ...rest }) => {
    const authcontext = useContext(Authcontext);
    const { isAuthenicated, loading, loadUser } = authcontext;
    useEffect(() => {
        if (localStorage.getItem('token') !== null) loadUser();
        // eslint-disable-next-line
    }, []);
    return (
        <Route {...rest} render={props => !isAuthenicated && !loading ? (
            <Redirect to='/login' />
        ) : (
            <Component {...props} />
        )} />
    )
}

export default PrivateRoute

import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Authcontext from '../../context/auth/AuthContext'
const PrivateRoute = ({ component: Component, ...rest }) => {
    const authcontext = useContext(Authcontext);
    const { isAuthenicated, loading } = authcontext;
    return (
        <Route {...rest} render={props => !isAuthenicated && !loading ? (
            <Redirect to='/login' />
        ) : (
            <Component {...props} />
        )} />
    )
}

export default PrivateRoute

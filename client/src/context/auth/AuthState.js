import React, { useReducer } from "react";
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import {
} from '../types';

const AuthState = props => {
    const initialState = {

    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return <AuthContext.Provider
        value={{

        }}
    >
        {props.children};
    </AuthContext.Provider>
};

export default AuthState;
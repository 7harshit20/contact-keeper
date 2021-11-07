import React, { useReducer } from "react";
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import axios from 'axios';
import setAuthToken from "../../utils/setAuthToken";
import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    CLEAR_ERRORS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenicated: null,
        loading: null,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const register = async (formdata) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users', formdata, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });

            loadUser();
        } catch (error) {
            dispatch({
                type: REGISTER_FAILURE,
                payload: error.response.data.msg
            });
        }
    }

    const clearError = () => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }

    const loadUser = async () => {
        if (localStorage.getItem('token')) setAuthToken(localStorage.getItem('token'));

        try {
            const res = await axios.get('/api/auth');
            console.log(res.data);

            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: error.response.data.msg
            });
        }
    }


    const login = async (formdata) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/auth', formdata, config);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

            loadUser();
        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.response.data
            });
        }
    }

    const logout = () => {
        dispatch({ type: LOGOUT });
    }

    return <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenicated: state.isAuthenicated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            register,
            clearError,
            loadUser,
            login,
            logout
        }}
    >
        {props.children};
    </AuthContext.Provider>
};

export default AuthState;
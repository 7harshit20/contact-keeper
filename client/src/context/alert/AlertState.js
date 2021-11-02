import React, { useReducer } from "react";
import AlertContext from './AlertContext'
import uuid from 'react-uuid'
import AlertReducer from './AlertReducer'
import {
    REMOVE_ALERT,
    SET_ALERT
} from '../types';

const AlertState = props => {
    const initialState = [];

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = (msg, type, timeout = 5000) => {
        const id = uuid();
        dispatch({ type: SET_ALERT, payload: { msg: msg, type: type, id: id } });

        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    }

    return <AlertContext.Provider
        value={{
            alerts: state,
            setAlert
        }}
    >
        {props.children};
    </AlertContext.Provider>
};

export default AlertState;
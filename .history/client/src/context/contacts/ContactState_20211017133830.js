import React, { useReducer } from "react";
import uuid from 'uuid';
import ContactContext from './ContactContext'
import ContactReducer from './ContactReducer'
import { } from '../types';

const ContactState = () => {
    const initialState = {
        contacts: []
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    return <ContactContext.Provider
        value={{

        }}
    >
        {props.children};
    </ContactContext.Provider>
}

export default ContactState;
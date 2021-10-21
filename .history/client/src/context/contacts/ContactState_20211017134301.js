import React, { useReducer } from "react";
import uuid from 'uuid';
import ContactContext from './ContactContext'
import ContactReducer from './ContactReducer'
import { } from '../types';

const ContactState = props => {
    const initialState = {
        contacts: []
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    return <ContactContext.Provider
        value={{
            contacts: state.contacts
        }}
    >
        {props.children};
    </ContactContext.Provider>
};

export default ContactState;
import React, { useReducer } from "react";
import uuid from 'uuid';
import ContactContext from './ContactContext'
import ContactReducer from './ContactReducer'
import { } from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email: 'jill7@gmail.com',
                phone: 21421424,
                type: 'personal'
            },
            {
                id: 2,
                name: 'Haris William',
                email: 'haris21@gmail.com',
                phone: 88929332,
                type: 'professional'
            }
        ]
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
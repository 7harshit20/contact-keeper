import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from './ContactContext'
import ContactReducer from './ContactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR,
    CLEAR_CONTACTS,
    GET_CONTACTS
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: null,
        current: null,
        filtered: null,
        loading: null,
        error: null
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    const getContact = async () => {
        try {
            const res = await axios.get('/api/contacts');
            dispatch({
                type: GET_CONTACTS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.data
            })
        }
    };

    const addContact = async (contact) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/contacts', contact, config);
            dispatch({
                type: ADD_CONTACT,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.data
            })
        }

    };

    const deleteContact = async (_id) => {
        try {
            await axios.delete(`/api/contacts/${_id}`)
            dispatch({
                type: DELETE_CONTACT,
                payload: _id
            });
        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.data
            })
        }

    };

    const setCurrent = (contact) => {
        dispatch({
            type: SET_CURRENT,
            payload: contact
        });
    };

    const clearCurrent = () => {
        dispatch({
            type: CLEAR_CURRENT,
        });
    };

    const updateContact = async (contact) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);
            dispatch({
                type: UPDATE_CONTACT,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.data
            })
        }

    }

    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    };

    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    const clearContacts = () => {
        dispatch({ type: CLEAR_CONTACTS });
    }

    return <ContactContext.Provider
        value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            loading: state.loading,
            error: state.error,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter,
            getContact,
            clearContacts
        }}
    >
        {props.children};
    </ContactContext.Provider>
};

export default ContactState;
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT
} from '../types';

const ContactReducer = (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                contact: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                contact: null
            }
        default:
            return state;
    }
}

export default ContactReducer;
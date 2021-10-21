import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactReducer = (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case DELETE_CONTACT:
            // return {
            //     ...state,
            //     contacts: state.contacts.filter(contact => contact.id !== action.payload),
            //     // filtered: state.filtered.filter(contact => contact.id !== action.payload)
            // }
            return {
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
                current: state.current,
                filtered: state.filtered.filter(contact => contact.id !== action.payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) => contact.id === action.payload.id ? action.payload : contact)
            }
        case FILTER_CONTACTS:
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return contact.name.match(regex) || contact.email.match(regex) || contact.phone.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        default:
            return state;
    }
}

export default ContactReducer;
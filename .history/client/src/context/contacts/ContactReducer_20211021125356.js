import { ADD_CONTACT, DELETE_CONTACT } from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contacts.id !== action.payload)
            }
        default:
            return state;
    }
}
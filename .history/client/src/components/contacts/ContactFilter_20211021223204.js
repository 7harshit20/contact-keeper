import React, { useContext, useEffect, useRef } from 'react'
import ContactContext from '../../context/contacts/ContactContext'

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    const { filtered, filterContacts, clearFilter } = contactContext;

    const text = useRef('');
    useEffect(() => {
        if (filtered === null) {
            return text.current.value === '';
        }
    });

    const onChange = () => {
        if (text.current.value !== '') {
            return filterContacts(text.current.value);
        } else {
            return clearFilter();
        }
    };
    return (
        <form>
            <input type="text" placeholder="Filter contacts..." ref={text} onChange={onChange} />
        </form>
    );
};

export default ContactFilter;

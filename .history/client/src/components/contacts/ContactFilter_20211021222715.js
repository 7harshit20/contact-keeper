import React, { useContext, useEffect, useRef } from 'react'
import ContactContext from '../../context/contacts/ContactContext'

const ContactFilter = () => {
    const contactContext = ContactContext(useContext);
    const { filtered, filterContacts, clearFilter } = contactContext;

    const text = useRef('');
    useEffect(() => {
        if (!filtered) text.current.value === '';
    });
    const onChange = () => {
        if (text.current.value !== '') {
            filterContacts(text.current.value);
        } else {
            clearFilter();
        }
    };
    return (
        <form>
            <input type="text" placeholder="Filter contacts..." ref={text} onChange={onChange} />
        </form>
    );
};

export default ContactFilter;

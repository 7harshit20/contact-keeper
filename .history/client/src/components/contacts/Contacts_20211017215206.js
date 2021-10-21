import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contacts/ContactContext';
import ContactItem from './ContactItem';

const Contact = () => {
    const contactContext = useContext(ContactContext);
    const { contacts } = contactContext;
    return (
        <Fragment>
            {contacts.map(contact => (
                <h3>=hy</h3>

                // <ContactItem contact={contact} key={contact.id} />
            ))}
        </Fragment>
    );
};

export default Contact

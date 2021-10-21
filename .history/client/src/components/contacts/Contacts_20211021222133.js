import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contacts/ContactContext';
import ContactItem from './ContactItem';

const Contact = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;
    return (
        <Fragment>
            {filtered ? filtered.map(contact)=>{<ContactItem contact={contact} key={contact.id} />} : contacts.map{contact => (
                <ContactItem contact={contact} key={contact.id} />
            )}};
            filtered.map(contact=>{
                <ContactItem contact={contact} key={contact.id} />
            });
        </Fragment>
    );
};

export default Contact

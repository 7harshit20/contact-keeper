import React, { Fragment, useContext, useEffect } from 'react';
import ContactContext from '../../context/contacts/ContactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner'

const Contact = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered, getContact, loading } = contactContext;
    useEffect(() => {
        getContact();
        // eslint-disable-next-line
    }, []);

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>No contacts added</h4>;
    }
    return (
        <Fragment>
            {contacts !== null && !loading ? (
                filtered ?
                    filtered.map(contact => (
                        <ContactItem contact={contact} key={contact._id} />
                    )) :
                    contacts.map(contact => (
                        <ContactItem key={contact._id} contact={contact} />
                    ))
            ) : <Spinner />};

        </Fragment>
    );
};

export default Contact

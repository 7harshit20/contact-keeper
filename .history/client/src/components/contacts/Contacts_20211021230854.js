import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contacts/ContactContext';
import ContactItem from './ContactItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Contact = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;
    return (
        <Fragment>
            <TransitionGroup>
                {filtered ?
                    filtered.map(contact => (
                        <ContactItem contact={contact} key={contact.id} />
                    )) :
                    <CSSTransition>
                contacts.map(contact => (
                        <ContactItem contact={contact} key={contact.id} />
                        ))
                    </CSSTransition>
                }
            </TransitionGroup>
        </Fragment>
    );
};

export default Contact

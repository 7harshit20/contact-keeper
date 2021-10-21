import React, { Fragment, useContext } from 'react'
import ContactContext from '../../context/contacts/ContactContext'

const ContactItem = () => {
    const contactContext = useContext(ContactContext);
    const { contacts } = contactContext;
    return (
        <Fragment>

        </Fragment>
    )
}

export default ContactItem

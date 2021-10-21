import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contacts/ContactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const { current, clearCurrent } = contactContext;

    useEffect(() => {
        if (current) setContact(current);
        else setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
    }, [current]);

    let [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }
    const onSubmit = e => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
        console.log('c');
    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit contact' : 'Add Contact'}</h2>
            <input type="text" name="name" placeholder="Name" value={name} onChange={onChange} />
            <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} />
            <input type="text" name="phone" placeholder="Phone" value={phone} onChange={onChange} />
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} />Personal {' '}
            <input type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange} />Professional {' '}
            <div>
                <input type="submit" value="Add Contact" className="btn btn-primary btn-block" />
            </div>
        </form>
    )
}

export default ContactForm

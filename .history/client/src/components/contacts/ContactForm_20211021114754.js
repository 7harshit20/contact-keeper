import React, { useState } from 'react'

const ContactForm = () => {
    const [contact, setContact] = usestate({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });
    const { name, email, phone, type } = contact;
    return (
        <form>
            <h2 className="text-primary">Add Contact</h2>
            <input type="text" name="name" placeholder="Name" value={name} onChange={onChange} />
            <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} />
            <input type="number" name="phone" placeholder="Phone" value={phoen} onChange={onChange} />
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal" checked={type === 'personal'} />
        </form>
    )
}

export default ContactForm

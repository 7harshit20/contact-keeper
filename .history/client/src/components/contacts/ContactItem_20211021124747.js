import React from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contacts/ContactContext';

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);
    const { id, name, email, phone, type } = contact;

    const onClick = e => {
        contactContext.deleteContact(e.target.id);
    }

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '}
                <span
                    style={{ float: 'right' }}
                    className={
                        'badge ' +
                        (type === 'professional' ? 'badge-success' : 'badge-primary')
                    }
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
                {email && (
                    <li>
                        <i className='fa fa-envelope-open' /> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className='fa fa-phone' /> {phone}
                    </li>
                )}
            </ul>
            <p>
                <button
                    className='btn btn-dark btn-sm'
                >
                    Edit
                </button>
                <button className='btn btn-danger btn-sm' id={id} onClick={onClick}>
                    Delete
                </button>
            </p>
        </div>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItem
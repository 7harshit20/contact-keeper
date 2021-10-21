import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ title, icon }) => {
    return (
        <div className="navbar bg-primary">
            <i className={icon} />
            <h1>{title}</h1>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string
}
Navbar.defaultProp = {
    title: 'Contact Keeper',
    icon: 'fa fa-id-card-alt'
}

export default Navbar;
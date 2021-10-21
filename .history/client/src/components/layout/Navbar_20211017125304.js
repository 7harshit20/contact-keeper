import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ title, icon }) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string
}
Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fa fa-github'
}

export default Navbar;
import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Authcontext from '../../context/auth/AuthContext'

const Navbar = ({ title, icon }) => {

    const authcontext = useContext(Authcontext);
    const { isAuthenicated, user, logout } = authcontext;

    const onLogout = () => {
        logout();
    }

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name} </li>
            <li>
                <a onClick={onLogout} href="#">
                    <i className="fa fa-sign-out" /><span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li> <Link to='/register'>Register</Link> </li>
            <li> <Link to='/login'>Login</Link> </li>
        </Fragment>
    )

    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                {/* <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/about'>About</Link> </li> */}
                {isAuthenicated ? authLinks : guestLinks}

            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string
}
Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fa fa-id-card'
}

export default Navbar;
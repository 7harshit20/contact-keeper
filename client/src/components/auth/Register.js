import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import Authcontext from '../../context/auth/AuthContext';

const Register = props => {
    const authcontext = useContext(Authcontext);
    const { register, error, clearError, isAuthenicated } = authcontext;
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    useEffect(() => {
        if (isAuthenicated) props.history.push('/');
        if (error) setAlert(error, 'danger');
        clearError();
        // eslint-disable-next-line
    }, [error, isAuthenicated, props.history]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') setAlert('Please fill all fields', 'danger');
        else if (password.length < 6) setAlert('Minimum length of password should be 6', 'danger')
        else if (password !== password2) setAlert('Passwords do not match', 'danger');
        else {
            register(user);
        }
    }
    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input type="email" name='email' value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input type="password" name='password' value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Confirm Password</label>
                    <input type="password" name='password2' value={password2} onChange={onChange} />
                </div>
                <input type="submit" value="Register User" className="btn btn-primary btn-block" />
            </form>

        </div>
    )
}

export default Register;

import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/AlertContext';
import Authcontext from '../../context/auth/AuthContext';

const Login = (props) => {
    const authcontext = useContext(Authcontext);
    const { login, error, clearError, isAuthenicated } = authcontext;
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    useEffect(() => {
        if (isAuthenicated) props.history.push('/');
        if (error) setAlert(error, 'danger');
        clearError();
        // eslint-disable-next-line
    }, [error, isAuthenicated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { email, password } = user;

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') setAlert('Please fill all fields', 'danger');
        else {
            login({ email, password });
        }
    }
    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <input type="submit" value="Register User" className="btn btn-primary btn-block" />
            </form>

        </div>
    )
}

export default Login;
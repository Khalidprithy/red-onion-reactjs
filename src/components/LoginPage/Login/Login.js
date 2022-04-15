import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../utils/images/logo2.png'
const Login = () => {
    return (
        <div className='container text-center'>
            <img className='w-50 p-5' src={logo} alt="" />
            <form className='d-flex flex-column w-50 mx-auto'>
                <input className="m-2 p-2 bg-light border-0 rounded" type="email" name="email" id="" placeholder='Email' />
                <input className="m-2 p-2 bg-light border-0 rounded" type="password" name="password" id="" placeholder='Password' />
                <button className="m-2 btn btn-danger">Login</button>
                <Link to='/register' className='text-danger text-decoration-none'>Don't have an account?</Link>
            </form>
        </div>
    );
};

export default Login;
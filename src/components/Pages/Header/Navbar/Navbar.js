import React from 'react';
import './Navbar.css'
import logo from '../../../../utils/images/logo2.png'
import { FiShoppingCart } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleIconClick = () => {
        navigate('/home');
    }


    return (
        <nav className='d-flex align-items-center justify-content-between p-2'>
            <img onClick={handleIconClick} className='icon-img ps-5' src={logo} alt="" />
            <div className='d-flex align-items-center'>
                <FiShoppingCart ></FiShoppingCart>
                <Link to='/login' className='btn btn-link text-decoration-none text-dark'>Login</Link>
                <button className='btn btn-danger rounded-pill text-decoration-none text-white mx-4 py-0 pb-1 '>Sign up</button>
            </div>
        </nav>
    );
};

export default Navbar;
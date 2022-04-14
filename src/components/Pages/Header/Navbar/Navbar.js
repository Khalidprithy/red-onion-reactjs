import React from 'react';
import './Navbar.css'
import logo from '../../../../utils/images/logo2.png'
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
    return (
        <nav className='d-flex align-items-center justify-content-between p-2'>
            <img className='icon-img ps-5' src={logo} alt="" />
            <div className='d-flex align-items-center'>
                <FiShoppingCart ></FiShoppingCart>
                <button className='btn btn-link text-decoration-none text-dark p-0 ms-4 hover:text-danger'>Login</button>
                <button className='btn btn-danger rounded-pill text-decoration-none text-white mx-4 py-0 pb-1 '>Sign up</button>
            </div>
        </nav>
    );
};

export default Navbar;
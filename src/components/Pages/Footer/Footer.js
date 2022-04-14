import React from 'react';
import './Footer.css'
import logo from '../../../utils/images/logo.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img className='footer-logo' src={logo} alt="" />
                </div>
                <div className='d-flex text-white '>
                    <ul className='list-1'>
                        <li>About online food</li>
                        <li>Read our blog</li>
                        <li>Sign up to deliver</li>
                        <li>Add your restaurant</li>
                    </ul>
                    <ul className='list-1'>
                        <li>Get help</li>
                        <li>Read FAQs</li>
                        <li>View all cities</li>
                        <li>Restaurants near me</li>
                    </ul>
                </div>
            </div>
            <div className='d-flex justify-content-between text-secondary fs-6 fw-light'>
                <p>Copyright &copy; 2022 Online food</p>
                <div className='d-flex'>
                    <p className='px-2'>Privacy Policy</p>
                    <p className='px-2'>Terms of Use</p>
                    <p className='px-2'>Pricing</p>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
import React from 'react';
import './MainPage.css'
import { Link } from 'react-router-dom';
import backgroundImg from '../../../utils/images/bannerbackground.png'


const MainPage = () => {
    return (
        <div>
            <div>
                <img className='w-100 position-relative' src={backgroundImg} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle '>
                    <h2 className='mb-4'>Best place for <span className='text-danger'>Good food</span>  and <span className='text-success'> Great selfie</span> </h2>
                    <div className="input-group w-75 mx-auto mb-4">
                        <input type="search" className="form-control rounded" placeholder="Search" />
                        <button type="button" className="btn btn-danger ">search</button>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <Link className='menu-links' to="/breakfast">Breakfast</Link>
                <Link className='menu-links' to="/lunch">Lunch</Link>
                <Link className='menu-links' to="/dinner">Dinner</Link>
            </div>
        </div>
    );
};

export default MainPage;
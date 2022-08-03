import React from 'react';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import './Banner.css';
import toyotaCrown from '../../../images/toyota-crown.jpeg'
const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner'>
                <div className='inside-banner px-5'>
                    <Zoom>
                        <h1>Wellcome To PKCARS</h1>
                        <Link to='/aboutus'>About</Link>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default Banner;
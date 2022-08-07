import React from 'react';
import CompanyLogo from '../../CompanyLogo/CompanyLogo';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <CompanyLogo></CompanyLogo>
        </div>
    );
};

export default Home;
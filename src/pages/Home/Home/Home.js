import React from 'react';
import Benefits from '../../Benefits/Benefits';
import CompanyLogo from '../../CompanyLogo/CompanyLogo';
import PageTitle from '../../PageTitle/PageTitle';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <Products></Products>
            <CompanyLogo></CompanyLogo>
            <Benefits></Benefits>
        </div>
    );
};

export default Home;
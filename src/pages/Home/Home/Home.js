import React from 'react';
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
        </div>
    );
};

export default Home;
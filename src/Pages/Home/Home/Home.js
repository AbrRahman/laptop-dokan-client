import React from 'react';
import Categories from '../Categories/Categories';
import HomeTopBanner from '../HomeTopBanner/HomeTopBanner';
import BestSellers from './BestSellers/BestSellers';

const Home = () => {
    return (
        <div>
            <HomeTopBanner></HomeTopBanner>
            <div className="max-w-[1440px] mx-auto px-6">
                <Categories></Categories>
                <BestSellers></BestSellers>
            </div>
        </div>
    );
};

export default Home;
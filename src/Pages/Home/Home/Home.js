import React from 'react';
import Categories from '../Categories/Categories';
import HomeTopBanner from '../HomeTopBanner/HomeTopBanner';

const Home = () => {
    return (
        <div>
            <HomeTopBanner></HomeTopBanner>
            <div className="max-w-[1440px] mx-auto px-6">
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;
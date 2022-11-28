import React from 'react';
import bannerImg from '../../../asset/TopBanner.jpg';
import './HomeTopBanner.css';
const HomeTopBanner = () => {
    return (
        <section >
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Shopping Laptop form LaptopDokan</h1>
                        <p className="mb-5">Buy laptop at Lowest price guaranteed in LaptopDokan All popular Laptop brands including Macbook, HP, Asus, Dell, Lenovo, MSI, and Xiaomi are available.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTopBanner;
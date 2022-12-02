import React from 'react';

const BestSellers = () => {
    return (
        <div className='my-9'>
            <h1 className='text-4xl text-center my-14'>Best Sellers</h1>
            <div className='grid gap-4 sm:grid-cols-1 md:gird-cols-2 lg:grid-cols-3 my-6'>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/laptop-with-blank-black-screen-white-table_53876-97915.jpg?size=626&ext=jpg&ga=GA1.2.2070732989.1658662197&semt=sph" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Hp Laptop w-3489</h2>
                        <p>price:380$</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg?size=626&ext=jpg&ga=GA1.2.2070732989.1658662197&semt=sph" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Hp Laptop wz-349</h2>
                        <p>price:360$</p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-psd/laptop-mockup-white_160403-30.jpg?size=626&ext=jpg&ga=GA1.2.2070732989.1658662197&semt=sph" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Lenovo Laptop L-3489</h2>
                        <p>price:350$</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellers;
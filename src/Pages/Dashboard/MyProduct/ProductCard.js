import React from 'react';

const ProductCard = ({ product }) => {
    const { _id, category_name, product_name, picture, location, resale_price, original_price, years_of_use, posted_time, seller_name, verified_seller } = product
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={picture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p className='mb-1 flex items-center text-lg'>Location {location}</p>
                    <p className='mb-1  text-lg'>Original Price : {original_price}$</p>
                    <p className='mb-1 text-lg'>Resale Price : {resale_price}$</p>
                    <p className='mb-1 text-lg'>Use Of years : {years_of_use} month</p>
                    <p className='mb-1 text-lg'>Posted time : {posted_time} minute</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
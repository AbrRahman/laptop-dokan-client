import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";
import { FaLocationArrow } from 'react-icons/fa';
const CategoriesProductsCard = ({ product, setCategoriesName }) => {
    const { _id, category_name, product_name, picture, location, resale_price, original_price, years_of_use, posted_time, seller_name, verified_seller } = product
    setCategoriesName(category_name)
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={picture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p className='my-1 flex items-center text-lg'><FaLocationArrow className='mr-4'></FaLocationArrow>Location {location}</p>
                    <p className='my-1  text-lg'>Original Price : {original_price}$</p>
                    <p className='my-1 text-lg'>Resale Price : {resale_price}$</p>
                    <p className='my-1 text-lg'>Use Of years : {years_of_use} month</p>
                    <p className='my-1 text-lg'>Posted time : {posted_time} minute</p>
                    <p className='my-1 flex items-center text-lg'>{verified_seller ? <><AiFillCheckCircle className='mr-4 text-green-400'></AiFillCheckCircle>Seller name : {seller_name}</> : <>Seller name : {seller_name}</>}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesProductsCard;
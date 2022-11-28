import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {
    return (
        <Link to={`/category/${category._id}`}>
            <div className=''>
                <div className=" bg-green-400 shadow-xl rounded-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">{category.name}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CategoriesCard;
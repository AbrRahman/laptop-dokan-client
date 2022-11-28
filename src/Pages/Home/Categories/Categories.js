import React from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    const categories = [
        {
            _id: 1,
            name: 'HP Laptops'
        },
        {
            _id: 2,
            name: 'Dell Laptops'
        },
        {
            _id: 3,
            name: 'lenovo Laptops'
        },
    ]
    return (
        <div className='my-9'>
            <h1 className='text-4xl text-center my-4'>Laptops Categories</h1>
            <div className='grid gap-4 sm:grid-cols-1 md:gird-cols-2 lg:grid-cols-3 my-6'>
                {categories.map(category => <CategoriesCard
                    key={category._id}
                    category={category}
                ></CategoriesCard>)}
            </div>
        </div>
    );
};

export default Categories;
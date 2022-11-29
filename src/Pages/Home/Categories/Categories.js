import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/categories')
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='my-9'>
            <h1 className='text-4xl text-center my-4'>Laptops Categories</h1>
            <div className='grid gap-4 sm:grid-cols-1 md:gird-cols-2 lg:grid-cols-3 my-6'>
                {categories?.map(category => <CategoriesCard
                    key={category._id}
                    category={category}
                ></CategoriesCard>)}
            </div>
        </div>
    );
};

export default Categories;
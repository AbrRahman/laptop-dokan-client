import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoriesProductsCard from './CategoriesProductsCard';
const CategoriesProducts = () => {
    const [categoriesName, setCategoriesName] = useState(null)
    const categoriesProducts = useLoaderData();
    console.log(categoriesProducts)
    return (
        <div className="max-w-[1440px] mx-auto px-6">
            <h1 className='text-4xl text-center my-4'>{categoriesName}</h1>
            <div className='grid gap-4 sm:grid-cols-1 md:gird-cols-2 lg:grid-cols-3 my-6'>
                {categoriesProducts?.map(product => <CategoriesProductsCard
                    key={product._id}
                    product={product}
                    setCategoriesName={setCategoriesName}
                ></CategoriesProductsCard>)}
            </div>
        </div>
    );
};

export default CategoriesProducts;
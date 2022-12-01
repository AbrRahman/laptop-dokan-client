import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ProductCard from './ProductCard';
const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const [myProduct, setMyProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8000/myproduct/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyProduct(data)
            })
    }, [user?.email])
    return (
        <div>
            <div className='grid gap-4 sm:grid-cols-1 md:gird-cols-2 lg:grid-cols-3 my-6'>
                {myProduct?.map(product => <ProductCard
                    key={product._id}
                    product={product}
                ></ProductCard>)}
            </div>
        </div>
    );
};
export default MyProduct;

// category_id"6384c09eb9533ee1de3b434f"
// product_name "Lenovo Pavilion Laptop 15-eg2009TU"
// picture "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-…"
// description ""
// location "Dhaka"
// resale_price 350
// original_price 400
// years_of_use 2
// posted_time2323
// seller_name"Rohan"
// seller_email"rohan@gamil.com"
// seller_phone"01234566444"
// product_type"excellent"
// verified_sellertrue
// category_name "lenovo Laptops"
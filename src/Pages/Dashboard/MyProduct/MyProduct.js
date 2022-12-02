import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ProductCard from './ProductCard';
const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const [myProduct, setMyProduct] = useState([]);
    useEffect(() => {
        fetch(`https://laptop-dokan-server.vercel.app/myproduct/${user?.email}`)
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

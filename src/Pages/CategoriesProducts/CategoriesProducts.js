import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import CategoriesProductsCard from './CategoriesProductsCard';
const CategoriesProducts = () => {
    const categoriesProducts = useLoaderData();
    const [categoriesName, setCategoriesName] = useState(null);
    const [bookingInfo, setBookingInfo] = useState(null)
    return (
        <div className="max-w-[1440px] mx-auto px-6">
            <h1 className='text-4xl text-center my-4'>{categoriesName}</h1>
            <div className='grid gap-4 sm:grid-cols-1 md:gird-cols-2 lg:grid-cols-3 my-6'>
                {categoriesProducts?.map(product => <CategoriesProductsCard
                    key={product._id}
                    product={product}
                    setCategoriesName={setCategoriesName}
                    setBookingInfo={setBookingInfo}
                ></CategoriesProductsCard>)}
            </div>
            {
                bookingInfo && <BookingModal
                    bookingInfo={bookingInfo}
                    setBookingInfo={setBookingInfo}
                ></BookingModal>
            }

        </div>
    );
};

export default CategoriesProducts;
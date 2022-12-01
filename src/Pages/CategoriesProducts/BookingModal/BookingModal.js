import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const BookingModal = ({ bookingInfo, setBookingInfo }) => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const { product_name, resale_price, } = bookingInfo
    const handelBooking = (data) => {
        data.productName = product_name
        data.userEmail = user.email
        data.price = resale_price
        data.userName = user.displayName
        console.log(data);
        fetch("http://localhost:8000/booking", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${localStorage.getItem('laptopDokanTonen')}`
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.acknowledged === true) {
                    toast.success("Product is Booked")
                }
            })
        setBookingInfo(null)
    }
    return (
        <div>
            {/* The button to open modal */}
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <form onSubmit={handleSubmit(handelBooking)} className='mt-5'>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='name' {...register("userName")} value={displayName} disabled className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" {...register("userEmail")} name='email' value={email} disabled placeholder='Full name' className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" {...register("productName")} name='productName' value={product_name} disabled placeholder='Product Name' className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input type="text" {...register("price")} disabled name='price' value={resale_price} placeholder='price' className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Phon number</span>
                            </label>
                            <input type="text" name='phone' {...register("phoneNumber")} placeholder='Phone' className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input name='Location' {...register("location")} type="text" placeholder='Location' className="input input-bordered w-full" />
                        </div>
                        <div className="modal-action">
                            <button type='submit' className='btn bnt-primary'>Booking</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;

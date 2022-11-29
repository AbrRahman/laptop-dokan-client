import React from 'react';

const BookingModal = ({ bookingInfo, setBookingInfo }) => {
    const handelBooking = () => {
        setBookingInfo(null)
        console.log('Hello')
    }
    return (
        <div>
            {/* The button to open modal */}
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <form onSubmit={handelBooking} className='mt-5'>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='name' value='' disabled className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="eamil" name='email' placeholder='Full name' className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name='productName' placeholder='Product Name' className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input type="text" name='price' placeholder='price' className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Phon number</span>
                            </label>
                            <input type="text" name='phone' placeholder='Phone' className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input name='Location' type="text" placeholder='Email' className="input input-bordered w-full" />
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

import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const { register, handleSubmit } = useForm();
    // handel submit
    const handleAddProduct = (data) => {
        const product = {}
        const productCatagory = data.category;
        const exstinCatagort = category.find(cata => cata.name === productCatagory);
        const catagoryId = exstinCatagort._id;
        console.log(catagoryId);
        console.log(productCatagory);
        console.log(categoryId)
        const image = data.userPhoto[0];
        const formData = new FormData();
        // formData.append('image', image)
        // const url = `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_Imgbb}`;
        // fetch(url, {
        //     method: "POST",
        //     body: formData
        // }).then(res => res.json())
        //     .then(result => {
        //         const photo = result.data.url
        //         console.log(photo)
        //         product["picture"] = photo
        //     }).catch(err => {
        //         console.log(err)
        //     })
    }
    useEffect(() => {
        fetch('http://localhost:8000/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
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
    return (
        <div className='px-9'>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='my-6'>
                    {/* 1 */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input type="text" {...register("productName")} placeholder="product name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* 2 */}
                    <select {...register("category")} className="select select-bordered">
                        {
                            category?.map(cata => <option key={cata._id} value={cata.name}>{cata.name}</option>)
                        }
                    </select>
                    {/* 3 */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" {...register("description")} placeholder="description" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* 4 */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">location</span>
                        </label>
                        <input type="text" {...register("location")} placeholder="Location" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* 5 */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Resale price</span>
                        </label>
                        <input type="text" {...register("resalePrice")} placeholder="Resale price" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* 6 */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Original price</span>
                        </label>
                        <input type="text" {...register("originalPrice")} placeholder="Original price" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* 7 */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" {...register("sellerPhone")} placeholder="phone" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* 8 */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product photo</span>
                        </label>
                        <input type="file" {...register("userPhoto")} placeholder="Choose Your" className="input input-bordered" />
                    </div>
                    <button type='submit' className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
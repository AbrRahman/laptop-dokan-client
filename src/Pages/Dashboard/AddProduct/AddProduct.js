import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const AddProduct = () => {
    const [category, setCategory] = useState([]);
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(user);
    // handel submit
    const handleAddProduct = (data) => {
        const product = {}
        const productCatagory = data.category;
        const exstinCatagort = category.find(cata => cata.name === productCatagory);
        const catagoryId = exstinCatagort._id;
        // prepared product object
        product['category_id'] = catagoryId;
        product['product_name'] = data.productName;
        product['category_name'] = productCatagory
        product['description'] = data.description
        product['location'] = data.location
        product['resale_price'] = data.resalePrice
        product['original_price'] = data.originalPrice
        product['years_of_use'] = data.useOfYears
        product['posted_time'] = new Date()
        product['seller_name'] = user.displayName
        product['seller_email'] = user.email
        product['seller_phone'] = data.sellerPhone
        product['product_type'] = data.productType
        product['verified_seller'] = data.verifiedSeller
        const image = data.userPhoto[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_Imgbb}`;
        fetch(url, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(result => {
                const photo = result.data.url
                console.log(photo)
                product["picture"] = photo
            }).catch(err => {
                console.log(err)
            })
        fetch("http://localhost:8000/myproduct", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.acknowledged === true) {
                    console.log(product.picture)
                    toast.success('Product add success')
                    navigate("/dashboard/myproduct");
                }
            })

    }
    useEffect(() => {
        fetch('http://localhost:8000/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

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
                    {/*  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Use of Years</span>
                        </label>
                        <input type="text" {...register("useOfYears")} placeholder="Use Of year" className="input input-bordered w-full max-w-xs" />
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
                    <select {...register("productType")} className="select select-bordered">
                        <option value='excellent'>excellent</option>
                        <option value='good'>good</option>
                        <option value='fair'>fair</option>
                    </select>
                    <select {...register("verifiedSeller")} className="select select-bordered">
                        <option value={true}>verified Seller</option>
                        <option value={false}>not verified</option>
                    </select>
                    <button type='submit' className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
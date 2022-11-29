import React from 'react';
import { useForm } from "react-hook-form";
const Register = () => {
    const { register, handleSubmit } = useForm();
    const handelEmailPasswordRegister = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handelEmailPasswordRegister)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Enter Name</span>
                                    </label>
                                    <input type="text" {...register("name")} placeholder="Enter Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} placeholder="Enter Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="file" {...register("userPhoto")} placeholder="Choose Your" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text-alt">Select Option</span>
                                    </label>
                                    <select {...register("userRule")} className="select select-bordered">
                                        <option value='user'>User</option>
                                        <option value='seller'>Seller</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("user password")} placeholder="Enter password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <div className="form-control">
                                <button type='submit' className="btn btn-secondary">Signup Width Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
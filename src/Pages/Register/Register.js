import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const { signUpWithGoogle, user, signUpWidthEmailPassword, setDisplayNameAndPhotoUrl } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const handelEmailPasswordRegister = (data) => {
        const name = data.name;
        const email = data.email;
        const rule = data.userRule;
        const password = data.userPassword;
        console.log(name, email, rule, password)
        const image = data.userPhoto[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_Imgbb}`
        const setNameAndPhotoUrl = {
            displayName: name,
        }
        fetch(url, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(result => {
                const photo = result.data.url
                console.log(photo)
                setNameAndPhotoUrl["photoURL"] = photo
            }).catch(err => {
                console.log(err)
            })
        signUpWidthEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    // update profile on fire base
                    updateUserProfile(setNameAndPhotoUrl)
                    // save user database
                    const userData = {
                        name,
                        email,
                        rule,
                        image: setNameAndPhotoUrl.photoURL
                    }

                    const googleSignup = false
                    insertUserDb(userData, googleSignup)
                }

            }).catch(err => {
                console.log(err.message)
            })
    }
    // update user profile
    const updateUserProfile = (updateInfo) => {
        setDisplayNameAndPhotoUrl(updateInfo)
            .then(() => {
                console.log('user update success')
            })
            .catch(err => {
                console.log(err)
            })
    }
    // handel google signUp 
    const handleGoogleSignup = () => {
        signUpWithGoogle()
            .then(result => {
                const user = result.user;
                if (user) {
                    const userData = {
                        name: user.displayName,
                        email: user.email,
                        rule: "bayer",
                        image: user.photoURL
                    }
                    console.log(userData)
                    const googleSignup = true
                    insertUserDb(userData, googleSignup)
                }
            }).catch(err => {
                console.log(err.message)
            })
    }
    // save user to database
    const insertUserDb = (userData, googleSignup) => {
        fetch("http://localhost:8000/user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (googleSignup === true) {
                    navigate('/')
                }
                if (result.acknowledged === true) {
                    toast.success("Register success")
                    if (googleSignup === false) {
                        navigate('/login')
                    }

                }
            })
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
                                    <input type="password" {...register("userPassword")} placeholder="Enter password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Sign up</button>
                                </div>
                                <span className=''>Already have account? <Link to='/login'><small>Login</small></Link></span>
                            </form>
                            <div className="divider">OR</div>
                            <div className="form-control">
                                <button onClick={handleGoogleSignup} type='submit' className="btn btn-secondary">Signup Width Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
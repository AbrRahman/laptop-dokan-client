import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';
const Login = () => {
    const [createEmail, setCreateEmail] = useState('')
    const [token] = useToken(createEmail)
    const { emailPasswordLogin, signUpWithGoogle } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }
    const { register, handleSubmit } = useForm();
    // handel email password login
    const handelLogin = (data) => {
        console.log(data);
        const email = data.email;
        const password = data.password;
        console.log(email, password)
        emailPasswordLogin(email, password)
            .then(result => {
                const user = result.user;
                setCreateEmail(user.email);
                console.log(user)
                toast.success('LogIn success')
            }).catch(err => {
                console.log(err.message)
            })
    }

    const handleGoogleLogin = () => {
        signUpWithGoogle()
            .then(result => {
                const user = result.user;
                setCreateEmail(user.email);
                console.log(user)
                toast.success('Sign up add success')
            }).catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handelLogin)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} placeholder="Enter Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password")} placeholder="Enter password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                                <span className=''>Don't have account? <Link to='/register'><small>Register</small></Link></span>
                            </form>
                            <div className="divider">OR</div>
                            <div className="form-control">
                                <button onClick={handleGoogleLogin} type='submit' className="btn btn-secondary">SignIn Width Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const { logIn, googleLogin } = useContext(AuthContext)


    const handlerLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (password.length < 8) {
            console.log('munimun 8 characters ');
        }
        else {
            console.log('success')
        }

        logIn(email, password)
            .then((result) => {
                const loggedUser = result.user
                console.log(loggedUser);
                form.reset("")
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
            })

    }

    const handlerGoogleLogIn = () => {
        googleLogin()
            .then((result) => {
                const logUser = result.user
                console.log(logUser);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlerLogIn} className="card-body">
                        <h1 className="text-5xl font-bold">Please Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="enter your password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                           <Link to="/register">
                    <p className='link ml-24 underline'>Please Registration ? </p>
                    </Link>
                    </form>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                        <div className='text-center mb-5'>
                        <button onClick={handlerGoogleLogIn} className="btn w-52">Google</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
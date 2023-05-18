import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
    const {createUser,userUpdate}=useContext(AuthContext)

    const handlerRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email, password,photo);

        if (password.length < 8) {
            console.log('at least 8 characters ');
        }
        else {
            console.log('success')
        }


            createUser(email,password)
            .then((result)=>{
                const regUser = result.user
                console.log(regUser);
                userUpdate(result.user,name,photo)
                form.reset("")
            })
            .catch((error)=>{
                console.log(error);
            })

    }



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handlerRegister} className="card-body">
                    <h1 className="text-4xl font-bold">Please Sign Up</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="URL" name="photo" placeholder="Enter your photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                <Link to="/login">
                    <p className='link underline mb-8 text-center'>Already have an account? Login</p>
                    </Link>
            </div>
        </div>
    </div>
    );
};

export default Register;
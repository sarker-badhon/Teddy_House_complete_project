import React, { useContext,useState  } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser,userUpdate}=useContext(AuthContext)
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handlerRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // console.log(name,email, password,photo);

        
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password should be at least 8 characters long';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


            createUser(email,password)
            .then((result)=>{
                const regUser = result.user
                console.log(regUser);
                userUpdate(result.user,name,photo)
                form.reset("")
                Swal.fire({
                    title: 'Register Success',
                    icon: 'success',
                    confirmButtonText: 'OK',
                  })
                navigate('/');
            })
            .catch((error)=>{
                console.log(error);
            })

    }



    return (

    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="card flex-shrink-0 w-96  shadow-2xl bg-base-100">
        <form onSubmit={handlerRegister} className="card-body">
          <h1 className="text-4xl font-bold">Please Sign Up</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className={`input input-bordered ${errors.name && 'input-error'}`}
            />
            {errors.name && <p className="text-xs text-error">{errors.name}</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`input input-bordered ${errors.email && 'input-error'}`}
            />
            {errors.email && <p className="text-xs text-error">{errors.email}</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className={`input input-bordered ${errors.password && 'input-error'}`}
            />
            {errors.password && <p className="text-xs text-error">{errors.password}</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="URL"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        <Link to="/login">
          <p className="link underline mb-8 text-center">Already have an account? Login</p>
        </Link>
      </div>
    </div>
  </div>
    );
};

export default Register;
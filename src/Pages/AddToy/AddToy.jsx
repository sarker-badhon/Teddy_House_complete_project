import React from 'react';
import './AddToy.css'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2'


const AddToy = () => {
    const { user } = useContext(AuthContext)

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const toy_name = form.toy_name.value;
        const email = form.email.value;
        const name = form.name.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const description = form.description.value;
        const user_name = user?.displayName;
        const user_email = user?.email;
        const addToy = {
            toy_name, email, price, photo, name, user_email,
            quantity, description, category, user_name
        }
        console.log(addToy)

        fetch('https://new-teddy-bear-server.vercel.app/bookToys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Added Toy',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <form onSubmit={handleAddToy} className="my-16">
            <div className="mx-20">
                <div className="grid md:grid-cols-3 gap-6 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="name" name="toy_name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Picture URL" className="input input-bordered" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <select name='category' className="select select-primary w-full">
                            <option disabled selected>Select Toy</option>
                            <option>Paddington Toy</option>
                            <option>Simba Toy</option>
                            <option>Narla Toy</option>
                            <option>Teddy Toy</option>
                            <option>Yogi Toy</option>
                            <option>Woody Toy</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="quantity" className="input input-bordered" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" value={user?.displayName} name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" value={user?.email} name="email" placeholder="Price" className="input input-bordered" />
                    </div>
                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-[1060px]" name="description" placeholder="description"></textarea>
                </div>
            </div>
            <div className='mx-20 mt-3'>
                <button className="btn btn-block bg-blue-600">Add Toy</button>
            </div>
        </form>
    );
};

export default AddToy;
import React from 'react';
import './AddToy.css'




const AddToy = ()=> {

    const handleAddToy = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const sellerName = form.sellerName.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const selects = form.selects.value;
        const description = form.description.value;
        const toy = {
            name,email,sellerName,price,photo,quantity,description,selects
        }
        console.log(toy)
    }

    return (
        <form onSubmit={handleAddToy} className="my-24">
            <div className="grid md:grid-cols-2 gap-6 p-6 ">
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">seller name</span>
                        </label>
                        <input type="text" name="sellerName" placeholder="seller name" className="input input-bordered" />
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
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <select name='selects' className="select select-primary w-full">
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
                    <div>
                    <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                    <textarea className="textarea textarea-bordered w-full" name="description" placeholder="description"></textarea>
                    </div>
                </div>


            </div>
            <div className='px-'>

            <button className="btn btn-block ">AddToy</button>
            </div>
        </form>
    );
};

export default AddToy;
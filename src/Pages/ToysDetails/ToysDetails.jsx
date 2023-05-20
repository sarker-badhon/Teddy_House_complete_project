import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { useLoaderData } from 'react-router';

const ToysDetails = () => {

    const toyDetails = useLoaderData()
    console.log(toyDetails)
    const {photo, toy_name, name, email,  quantity, description, price, } = toyDetails;       

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">ToY Name: {toy_name}</h1>
            <p className=""> Name : {name}</p>
            <p className=""> Email : {email}</p>
            <p className="">Price : ${price}</p>
            <p className="">Rating : 4.3</p>
            <p className="">Quantity : {quantity}</p>
            <p className="">Description : {description}</p>
          </div>
        </div>
      </div>
    );
};

export default ToysDetails;

  
  
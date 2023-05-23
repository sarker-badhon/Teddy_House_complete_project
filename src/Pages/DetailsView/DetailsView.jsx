import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsView = () => {
    const tabDetails = useLoaderData()
    console.log(tabDetails)
    const {picture, toy_name, name,price, } = tabDetails;  
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">ToY Name: {name}</h1>
            <p className=""> Name : {picture}</p>
            <p className=""> Name : {name}</p>
            <p className="">Price : ${price}</p>
            <p className="">Rating : 4.3</p>
          </div>
        </div>
      </div>
    );
};

export default DetailsView;
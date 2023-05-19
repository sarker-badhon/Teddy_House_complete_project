import React from 'react';
import { useLoaderData } from 'react-router';

const ToysDetails = () => {

    const toyDetails = useLoaderData()
    console.log(toyDetails)
    const {
        photo,
        toy_name,
        seller_name,
        seller_email,
        price,
        rating,
        quantity,
        description,
      } = toyDetails;

    return (
        <div>
            <h1>{photo}</h1> 
        </div>
    );
};

export default ToysDetails;

  
  
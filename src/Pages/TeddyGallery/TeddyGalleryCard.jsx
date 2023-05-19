import React from 'react';

const TeddyGalleryCard = ({ toy }) => {
    const { name, picture, price, rating } = toy;
    return (
        <div className="bg-white rounded-lg shadow-md p-2 md:p-4 ">
        <div className="mb-2">
          <img
            src={picture}
            alt={name}
            className="w-full h-36 object-cover"
          />
        </div>
        <p className="text-2xl font-semibold mb-1">{name}</p>
        <p className="text-gray-600  mb-1">Price: ${price}</p>
        <p className="text-gray-600  mb-3">Rating: {rating}</p>
        <button className="btn btn-outline bg-blue-500 w-26 text-white rounded  ">
          <small>Add to Cart</small>
        </button>
      </div>
    );
};

export default TeddyGalleryCard;
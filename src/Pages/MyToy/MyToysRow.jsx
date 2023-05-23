import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const MyToysRow = ({ toy, handleDelete, handleUpdate }) => {
  // console.log(toy)
  const { _id, toy_name, category, price, quantity, status } = toy

  return (
    <tr>
      <th>{1}</th>
      <td>{toy_name}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{quantity}</td>

      <td>
        <Link to={`/UpdateToy/${_id}`}>
           <button className='btn'>update</button> 
        </Link>
      </td>

      <td><button className='btn' onClick={() => handleDelete(_id)}>delete</button></td>
    </tr>
  );
};

export default MyToysRow;
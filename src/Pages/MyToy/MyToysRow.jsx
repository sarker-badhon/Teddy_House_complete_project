import React from 'react';
import Swal from 'sweetalert2'
const MyToysRow = ({toy,handleDelete}) => {
    // console.log(toy)
    const {_id,toy_name,category,price,quantity,}=toy
   
    return (
        <tr>
            <th>{1}</th>
            <td>{toy_name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td><button>update</button></td>
            <td><button  className='btn' onClick={()=>handleDelete(_id)}>delete</button></td>
          </tr>
    );
};

export default MyToysRow;
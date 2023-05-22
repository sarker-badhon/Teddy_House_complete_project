import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';

const MyToy = () => {
  const { user } = useContext(AuthContext)
  const [toys, setToys] = useState([])
  useEffect(() => {

    fetch(`https://new-teddy-bear-server.vercel.app/bookToys?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setToys(data);
      });

  }, []);



  const handleDelete = id => {


    fetch(`https://new-teddy-bear-server.vercel.app/bookToys/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
          const remaining = toys.filter(toy => toy._id !== id)
          setToys(remaining)
        }


      })

  };


  const handleUpdate = id => {
    fetch(`https://new-teddy-bear-server.vercel.app/bookToys/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status: 'updated' })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          const filters = toys.filter(toy => toy._id !== id)
          const updated = toys.find(toy => toy._id === id)
          updated.status = 'updated'
          const toyBook = [updated, ...filters];
          setToys(toyBook)
        }
      })
  }

  return (
    <div className="overflow-x-auto">
      <Link to="/addToy">

        <button className='btn btn-primary my-6 mx-3'>Add A Toy</button>
      </Link>
      <table className="table w-full">
        {/* head*/}
        <thead>
          <tr>
            <th>NO</th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className='p-5'>
          {/* row 1 */}

          {
            toys.map(toy => <MyToysRow
              key={toy._id}
              toy={toy}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            ></MyToysRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyToy;
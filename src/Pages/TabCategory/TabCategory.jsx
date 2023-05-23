
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link,useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2';

const TabCategory = () => {
  const [teddys, setTeddys] = useState([])
  const navigate = useNavigate();
  

  useEffect(() => {
    fetch('https://new-teddy-bear-server.vercel.app/teddys')
      .then(res => res.json())
      .then(data => {
        setTeddys(data);
      })
  }, [])

  const handleDetails = () => {
      // Display SweetAlert message and redirect to the login page
      Swal.fire({
        title: 'You have to log in first to view details',
        icon: 'warning',
        confirmButtonText: 'OK',
      }).then(() => {
       
      });
      
    }

  

  return (

    <Tabs className="bg-black mt-4 ">
      <h1 className='text-4xl text-white font-bold text-center my-5 pt-6'>Shop by category</h1>
      <TabList className="flex justify-center space-x-4 border">
        {teddys.map(category => (
          <Tab key={category.name} className="py-2 px-4 hover:text-gray-800 focus:outline cursor-pointer text-white">
            {category.name}
          </Tab>
        ))}
      </TabList>

      {teddys.map(category => (
        <TabPanel key={category.name} className="py-4 text-white">
          <h2 className="text-2xl text-center font-bold mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.toys.map(toy => (

              <div className="card mx-auto w-72 h-96 glass md:mx-32">
                <figure>
                  <img src={toy.picture} alt="" className="w-full h-auto top-0 object-fit" />
                </figure>
                <div className="card-body mt-4  ">
                  <h3 className="text-lg font-semibold mb-2">{toy.name}</h3>
                  <p className="mb-2">Price: ${toy.price}</p>
                  <p className="mb-2">Rating: {toy.rating}</p>
                  <div className="card-actions justify-end">
                    <Link onClick={handleDetails} to={`/detailView/${toy._id}`}>
                      <button className="btn btn-outline bg-blue-500 w-26 text-white rounded">
                        <small>View Details</small>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>

  );
};

export default TabCategory;
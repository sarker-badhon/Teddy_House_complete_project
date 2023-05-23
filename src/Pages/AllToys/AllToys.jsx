import { useContext, useEffect, useState } from "react";
import ToyBookings from "../ToyBookings/ToyBookings";

// const [toys, setToys] = useState([]);
// const [searchQuery, setSearchQuery] = useState('');

// useEffect(() => {

//   const fetchToys = async () => {
//     const response = await fetch('https://api.example.com/toys');
//     const data = await response.json();
//     setToys(data);
//   };
//   fetchToys();
// }, []);

// const handleSearch = (event) => {
//   setSearchQuery(event.target.value);
// };

// const filteredToys = toys.filter((toy) => {
//   return toy.toyName.toLowerCase().includes(searchQuery.toLowerCase());
// });



const AllToys = () => {
    const [toys, setToys] = useState([])
    // console.log(toys)
    useEffect(() => {
        const url = ('https://new-teddy-bear-server.vercel.app/bookToys')
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])



    return (
        <div className="overflow-x-auto w-full">
            <div className="text-center my-5 p-4">
                <h1 className="text-3xl font-bold mb-3">All Toys</h1>

                <input
                className="input input-bordered"
                    type="text"
                    placeholder="Search by toy name"
                //   value={searchQuery}
                //   onChange={handleSearch}
                />
            </div>

            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                               
                            </label>
                        </th>
                        <th>Toy Name</th>
                        <th>Name</th>
                        <th>category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>View Details</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        toys.map(toy => <ToyBookings
                            key={toy._id}
                            toy={toy}
                        ></ToyBookings>)
                    }

                </tbody>
            </table>
        </div>
    )
}
export default AllToys;
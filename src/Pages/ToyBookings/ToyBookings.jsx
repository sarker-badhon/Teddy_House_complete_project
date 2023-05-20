import { Link } from "react-router-dom";

const ToyBookings = ({toy}) => {
    // console.log(toy._id)
    const {_id,toy_name,photo,price,name,quantity,category,selects
    }=toy


    return (
       
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-16 h-16">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{toy_name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {name}
                    
                </td>
                <td>{selects}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <th>
                <Link to={`/toysdetails/${_id}`}> 
                    <button className="btn btn-ghost btn-outline  btn-xs">View Details</button>
                </Link>
                </th>
            </tr>
        
    );
};

export default ToyBookings;
import { Link ,useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';
const ToyBookings = ({ toy }) => {
    // console.log(toy._id)
    const navigate = useNavigate();
    const { _id, toy_name, photo, price, name, quantity, category, selects
    } = toy
    const handleViewDetails = () => {
        Swal.fire({
            title: 'You have to log in first to view details',
            icon: 'warning',
            confirmButtonText: 'OK',
          }).then(() => {
            navigate('/login'); 
          });
    };

    return (

        <tr>
            <th>
                <label>

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
                    <button className="btn btn-ghost btn-outline btn-xs" onClick={handleViewDetails}>
                        View Details
                    </button>
                </Link>
            </th>
        </tr>

    );
};

export default ToyBookings;
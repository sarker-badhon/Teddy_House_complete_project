import { useEffect, useState } from "react";
import TeddyGalleryCard from "./TeddyGalleryCard";



const TeddyBear = () => {

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toyGallery')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

    return (
        <div className="bg-gray-100  ">
            <h2 className="text-4xl font-bold text-center pt-20 mb-9">Get Our New Toy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10 mx-20 ">
                {toys.map((toy) => (
                    <TeddyGalleryCard key={toy._id} toy={toy} />
                ))}
            </div>

        </div>
    )
}
export default TeddyBear;
import { FaStar, FaClock, FaUtensils, FaDrumstickBite, FaLeaf } from "react-icons/fa";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    // const {resData} = props;
    // console.log(resData);

    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla} = props.resData.info;

    //slice desc
    // const cuisinesShort = cuisines.length > 3 ? (cuisines.slice(0, 3)+"...") : cuisines ;
    // console.log(cuisinesShort)
    

    // console.log(resData);

    return (
        <div data-testid="resCard" className="
        
        m-4 p-4 w-[280px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-95 hover:shadow-2xl" style={{ backgroundColor: "#ffffff" }}>
        <div className="h-[200px] overflow-hidden rounded-t-lg">
            <img
                className="rounded-lg w-full h-full object-cover transition-transform duration-300 "
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
        </div>
        <div className="px-4 py-3">
            <h3 className="font-bold py-2 text-xl text-gray-800">{name}</h3>
            <h4 className="flex items-center text-gray-600 py-1"><FaUtensils className="mr-2 text-green-500" />{cuisines.join(", ")}</h4>
            <h4 className="flex items-center text-gray-600 py-1"><FaClock className="mr-2 text-blue-500" />{sla.deliveryTime} mins</h4>
            <h4 className="flex items-center text-gray-600 py-1"><FaStar className="mr-2 text-yellow-500" />{avgRating} stars</h4>
            <h4 className="text-gray-600 py-1">{costForTwo}</h4>
        </div>
    </div>
    );
};

//Higher Order Component
//RestaurantCard(input) => RestaurantCardDiscount(output)

export const withVegLabel = (RestaurantCard) => {
    // Return a component
    return (props) => {
        const { veg } = props?.resData?.info;

        const label = veg ? "Veg" : "Non-Veg";

        return (
            <div className="relative">
                <div className="absolute top-2 left-2 flex items-center space-x-2 bg-black text-white rounded-lg px-3 py-1 z-10 text-lg animate-pulse">
                    {veg ? (
                        <FaLeaf className="text-green-500" />
                    ) : (
                        <FaDrumstickBite className="text-red-500" />
                    )}
                    <span className="font-bold">{label}</span>
                </div>
                <RestaurantCard {...props} />
            </div>
        );
    };
}

export default RestaurantCard;
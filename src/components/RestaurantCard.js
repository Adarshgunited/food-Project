import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props;
    // console.log(resData);

    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,sla} = resData.info;

    //slice desc
    // const cuisinesShort = cuisines.length > 3 ? (cuisines.slice(0, 3)+"...") : cuisines ;
    // console.log(cuisinesShort)
    

    // console.log(resData);

    return (
        <div data-testid="resCard" className="m-4 p-4 w-[273px] rounded-md shadow-2xl transform transition duration-300 hover:scale-105" style = {{backgroundColor:"#f0f0f0"}}>
                <div className="h-[200px]">
                    <img
             className="rounded-lg  w-full h-full" 
             alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
                </div>
            <div className="px-3">
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="font-semibold py-2">{costForTwo} </h4>
            <h4 className="font-semibold py-2">{cuisines.join(", ")  }</h4>
            <h4 className="font-semibold py-2">{avgRating} stars</h4>
            <h4 className="font-semibold py-2">{sla.deliveryTime} mins</h4>
            <h4 className=""></h4>
            </div>
        </div>
    );
};

//Higher Order Component
//RestaurantCard(input) => RestaurantCardDiscount(output)

export const withVegLabel = (RestaurantCard) =>{
    //imp : return a component 
    return (props) => {
        // console.log(props);
        const {veg} = props?.resData?.info;

        const label = veg ? "Veg" : "NonVeg" ;

        // console.log(veg);
        return (
            <div>
                <label className="absolute ml-4 p-2 bg-black text-white rounded-lg font-bold z-10 text-lg ">{label}</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;
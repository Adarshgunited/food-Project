import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { RESTAURANTLIST_API } from "../utils/constants";
// import FoodCarousel from "./FoodCarousel";


const Body = () => {

    //Local state variable - super powerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    // console.log(listOfRestaurant);
    // copy/instance of listOfRestaurant
    const [filteredRestaurant,  setFilteredRestaurant] = useState([]);
    //carouselData
    // const [carouselData,setCarouselData] = useState([]);

    //Keeps track of the text entered in the search input.(bind the searchText with input box)
    const[searchText, setSearchText] = useState("");

    //higher order function, return a new component to RestaurantVegCard
    const RestaurantVegCard = withVegLabel(RestaurantCard);

    // console.log("body rendered",listOfRestaurant);

    //useEffect to fetch data when the component mounts, handle side effect and not for declaring fn.
    useEffect(()=>{
        //we invoke, separation of concern
    fetchData();
    },[]);

    //fn to fetch restaurant data from an api
    const fetchData = async() => {
        try {
            const data = await fetch(RESTAURANTLIST_API);
        
        //&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

        // convert data to json format;
        const json = await data.json();

        // console.log(json);
        //Optional Chaining(?) - for better data handling.
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setCarouselData(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
        
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        
    }

    //custom hook(check oneLine)
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
    return <h1 className="flex justify-center items-center font-bold text-2xl p-4 m-4">Look's like you're offline!!! Please check your internet connection.</h1>

    // import the setUserName fn from the App.js
    // const {loggedInUser, setUserName} = useContext(UserContext);


    return listOfRestaurant.length === 0 ? (
        // Conditional rendering - display Shimmer component while data is being fetched
    <Shimmer/>
    ) : (
        // Render the component with fetched data
        <div className="flex-col">
            <div className="flex items-center  shadow-lg flex-wrap m-4  lg:ml-36 py-4 px-0">
                <div className="flex w-[50%] mx-4">
                    {/* Input box for searching */}
                    <input type="text" placeholder="Search for restaurants and food"
                    data-testid="searchInput"
                    className="w-[70%] py-2 px-4 mx-4 border border-solid border-black rounded-md text-lg font-md " value={searchText}
                    //it will take the input value from the input box and will change the searchText to that new value.
                     onChange={(e)=>{
                        // Update searchText state with the input value typed.
                        setSearchText(e.target.value);
                    }}/>
                    <button className="py-3 px-4 bg-green-400 rounded-lg transition duration-300 hover:bg-green-600 font-bold"
                    //
                    onClick={()=>{
                        // console.log(searchText)
                        //Filter the restaurant cards logic and update the UI
                        //search text (includes() js method used to see the searchText in the res.data.name)
                        // Filter restaurant cards based on searchText
                        const filteredRestaurant = listOfRestaurant.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        
                        // Update filteredRestaurant state
                        setFilteredRestaurant(filteredRestaurant);
                    }}
                    >Search</button>
                </div>
                {/* Button to filter top-rated restaurants */}
                <div className="w-[30%]flex items-center">
                    <button className="p-3 bg-green-400 rounded-lg font-bold transition duration-300 hover:bg-green-600" onClick={()=>{
                 const filteredList = listOfRestaurant.filter((restaurant) => restaurant.info.avgRating >= 4.5)
                 setFilteredRestaurant(filteredList)
                }}>Top Rated Restaurants</button>
                </div>
                {/* <div className="search p-4 m-4 flex items-center">
                    <label>UserName : </label>
                    <input className="border border-black p-2" 
                    value={loggedInUser}
                    onChange={(e)=> setUserName(e.target.value)}/>
                </div> */}
            </div>
            {/* carousel */}
            {/* <div className="flex justify-center items-center m-2 p-2">
            <h2 className="flex justify-center items-center">What's on your Mind</h2>
                {carouselData.map((data) => (
                    <FoodCarousel key={data.id} carouselInfo={data}/>
                ))}
            </div> */}

            <div className="flex flex-wrap justify-center  ">
                {
                    //  Mapping over filteredRestaurant to render RestaurantCard components 
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant?.info?.id}
                         to={"/restaurants/"+restaurant?.info?.id}
                        >
                        {/* logic if the restaurant is having any discount then add the discount label to it. */}
                            {restaurant?.info?.veg ? (<RestaurantVegCard key={restaurant?.info?.id}
                            resData={restaurant}/>) : (<RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>)}
                            </Link>
                        
                    ))
                }
            </div>
        </div>
    );
}

export default Body;
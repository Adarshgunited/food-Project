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

    //search (no match)
    const [searchPerformed, setSearchPerformed] = useState(false);

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
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestaurant(restaurants);
        setFilteredRestaurant(restaurants);
        // setCarouselData(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
        
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        
    }

    //custom hook(check oneLine)
    const onlineStatus = useOnlineStatus();

    if(!onlineStatus)
    return <h1 className="flex justify-center items-center font-bold text-2xl p-4 m-4">Look's like you're offline!!! Please check your internet connection.</h1>

    // import the setUserName fn from the App.js
    // const {loggedInUser, setUserName} = useContext(UserContext);
     
    const handleSearch = () => {
        const filtered = listOfRestaurant.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filtered);
          setSearchText(""); // Clear the input box after search
          setSearchPerformed(true); // Set search performed to true
      };

      const handleInputChange = (e) => {
        setSearchText(e.target.value);
      };
    
      const handleTopRated = () => {
        const filtered = listOfRestaurant.filter((restaurant) => restaurant.info.avgRating >= 4.5);
        setFilteredRestaurant(filtered);
      };

    return listOfRestaurant.length === 0 ? (
        // Conditional rendering - display Shimmer component while data is being fetched
    <Shimmer/>
    ) : (
        // Render the component with fetched data
        <div className="flex 
        flex-col 
        min-h-screen
        ">
            <div className="flex flex-wrap justify-between items-center shadow-lg 
            p-4 
            lg:ml-36
            ">
                <div className="
                flex 
                w-full 
                md:w-1/2 
                mb-4 
                md:mb-0
                ">
                    {/* Input box for searching */}
                    <input type="text" placeholder="Search for restaurants and food"
                    data-testid="searchInput"
                    className="
                    flex-grow py-2 px-4 border border-solid border-gray-300 rounded-md text-lg 
                    " value={searchText}
                    //it will take the input value from the input box and will change the searchText to that new value.
                     onChange={handleInputChange}/>
                    <button className="py-2 px-4 ml-2 bg-green-400 rounded-lg transition duration-300 hover:bg-green-600 font-bold"
                    //
                    onClick={handleSearch}
                    >Search</button>
                </div>
                {/* Button to filter top-rated restaurants */}

                    <button className="py-2 px-4 ml-2 bg-green-400 rounded-lg transition duration-300 hover:bg-green-600 font-bold" onClick={handleTopRated}>Top Rated Restaurants</button>

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

{searchPerformed && filteredRestaurant.length === 0 ? (
        <div className="flex justify-center items-center p-4 m-4">
          <h2 className="font-bold text-xl">No restaurants or food items found.</h2>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            //   className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 transition-transform transform hover:scale-105"
            >
              {restaurant?.info?.veg ? (
                <RestaurantVegCard key={restaurant?.info?.id} resData={restaurant} />
              ) : (
                <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
        </div>
    );
}

export default Body;
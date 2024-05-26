// import { useEffect, useState }  from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

// useParams: useParams is a React Router hook that returns an object of key/value pairs of URL parameters. In this case, it extracts the resId parameter from the URL.

const RestaurantMenu = () =>{
    // props drilling
    // const DummyData = "dummy data";
//  State variable to hold restaurant information
    // const [resInfo, setResInfo] = useState(null);

// useParams hook to extract the restaurant ID from the URL
    const {resId} = useParams();
    // const params = useParams();
    // console.log(params) // {resId: '1234'}

    // custom hook fetch menu data
    const resInfo = useRestaurantMenu(resId);
    // console.log(resInfo);

    // index to open accordion
    const [showIndex, setShowIndex] = useState(null);

// useEffect hook to fetch menu data when the component mounts
    // useEffect(() =>{
    //     fetchMenu();
    // },[]);

    // Function to fetch menu data from the API
    // const fetchMenu = async() =>{
// Fetch data from the API using the restaurant ID
        // const data = await fetch(MENU_API+resId);
// Convert the response to JSON format
        // const json = await data.json();
// Set the restaurant information in the state variable
        // setResInfo(json);
        // console.log(json);
    // }
    //should be used before the api data access value.(no error of undefined data value)
    if(resInfo === null)
    return <Shimmer/>;

    const {name, cuisines,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;

    // const {itemCards} = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    // console.log(itemCards)
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories)

    // console.log(itemCards);
// 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* categories accordion */}
            {
                // controlled component
                categories.map((cardData, index)=>(<RestaurantCategory key={cardData?.card?.card?.title} data={cardData?.card?.card} showItems={index === showIndex ? true : false}
                setShowIndex = {()=> setShowIndex(index)}
                />))
            }
        </div>
    );
}

export default RestaurantMenu;

{/* <ul>
                {
                    itemCards.map((item) =>(
                        <li key={item.card.info.id}>{item.card.info.name} - {" ₹"}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
                    ))
                }
            </ul> */}
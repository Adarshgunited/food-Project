import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState, useEffect, useRef } from "react";
import CategoryShimmer from "./CategoryShimmer";
import { FaUtensils } from "react-icons/fa";

// useParams: useParams is a React Router hook that returns an object of key/value pairs of URL parameters. In this case, it extracts the resId parameter from the URL.

const RestaurantMenu = () => {
    // useParams hook to extract the restaurant ID from the URL
    const { resId } = useParams();

    // Custom hook to fetch menu data
    const resInfo = useRestaurantMenu(resId);

    // Index to open accordion
    const [showIndex, setShowIndex] = useState(null);

    const categoryRefs = useRef([]);


    useEffect( () => {
        if(showIndex !== null){
            categoryRefs.current[showIndex]?.scrollIntoView({ behavior : "smooth"});
        }
    }, [showIndex])

    // Display shimmer effect while loading data
    if (resInfo === null) return <CategoryShimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;

    // Extract categories from the API response
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-3xl flex items-center justify-center">
                <FaUtensils className="mr-2" /> {name}
            </h1>
            <p className="font-semibold text-lg flex items-center justify-center mb-6">
                {`${cuisines.join(", ")} -  ${costForTwoMessage}`}
            </p>
            {/* Categories accordion */}
            <div className="accordion-container">
            {
                    categories.map((cardData, index) => (
                        <div ref={el => categoryRefs.current[index] = el} key={cardData?.card?.card?.title}>
                            <RestaurantCategory
                                data={cardData?.card?.card}
                                showItems={index === showIndex}
                                setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default RestaurantMenu;

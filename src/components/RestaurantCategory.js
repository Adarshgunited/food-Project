import { useState } from "react";
import ItemList from "./ItemList";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // console.log(data);
    
    // hide/show the data on UI.(default hide)
    // const [showItems, setShowItems] = useState(false); 

    // open/collapse our accordion logic
    // toggle feature
    const handleClick = () => {
        // setShowIndex(!showItems);
        setShowIndex();
    }

    return(
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg transition-all duration-300">
            {/* Header */}
            <div 
                className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300" 
                onClick={handleClick}
            >
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span className="text-2xl">
                    {showItems ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </div>
            {/* Accordion body */}
            {showItems && (
                <div className="mt-4 transition-all duration-300 ease-in-out">
                    <ItemList items={data.itemCards} />
                </div>
            )}
        </div>
        
    );
}

export default RestaurantCategory;

//emoji : window LogoKey + .(period);
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // console.log(data);
    
    // hide/show the data on UI.(default hide)
    // const [showItems, setShowItems] = useState(false); 

    // open/collapse our accordion logic
    // toggle feature
    const handlerClick = () => {
        // setShowIndex(!showItems);
        setShowIndex();
    }

    return(
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4
            bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" 
            onClick={handlerClick}
            >
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span className="text-2xl">⬇️</span>
            </div>
            {/* showItem is true and ItemList is true then show on UI ItemList component */}
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
        {/* Accordion body */}
        
        </div>
        
    );
}

export default RestaurantCategory;

//emoji : window LogoKey + .(period);
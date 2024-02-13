import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    // console.log(dummyInfo);

    // dispatch fn use useDispatch hook
    const dispatch = useDispatch();

    // dispatch an action logic
    const handleAddItem = (item) => {
        // item is dispatch to the given slice, action 
        dispatch(addItem(item));
        //item is the single card full details
        // console.log(item);
    }

    return (
        <div>
                {items.map((item)=>(
                    <div
                    // test id for test cases
                    data-testid="foodItems"
                    key={item.card.info.id} 
                     className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className=" py-2 font-bold">
                        <span>{item.card.info.name}</span>
                    <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                    </div>
                        <p className="text-sm text-gray-600">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12">
                            <div className="absolute">
                            <button className=" bg-black text-white shadow-lg m-auto p-2 mx-16 rounded-lg" 
                            onClick={() => 
                            // dispatch an action
                            handleAddItem(item)}> Add +</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} className="rounded-md "/>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default ItemList;
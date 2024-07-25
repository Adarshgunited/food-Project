import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { FaPlus } from "react-icons/fa";


const ItemList = ({items}) => {
    // console.log(items);

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
        <div className="space-y-4">
        {items.map((item) => (
          <div
            // Test id for test cases
            data-testid="foodItems"
            key={item?.card?.info?.id}
            className="p-4 border-b border-gray-300 flex flex-col md:flex-row justify-between items-center animate-fadeIn transition duration-300 ease-in-out transform hover:scale-95 bg-white shadow-lg rounded-lg"
          >
            <div className="w-full md:w-8/12 lg:w-9/12 mb-4 md:mb-0">
              <div className="py-2 font-bold text-lg md:text-xl text-gray-800">
                <span>{item.card.info.name}</span>
                <span className="text-green-500">
                  {" "}
                  - ₹ {Math.round(item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100)}
                </span>
              </div>
              <p className="text-sm text-gray-600">{item.card.info.description}</p>
            </div>
            <div className="w-full md:w-4/12 lg:w-3/12 flex flex-col items-center">
              {item.card.info.imageId && (
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="rounded-md w-full h-24 object-cover mb-2"
                  alt={item.card.info.name}
                />
              )}
              <button
                className="bg-green-500 text-white shadow-lg px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition duration-300 ease-in-out flex items-center"
                onClick={() => handleAddItem(item)}
              >
                <FaPlus className="mr-2" />
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ItemList;
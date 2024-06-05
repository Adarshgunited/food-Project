import React from 'react';
import { useDispatch } from 'react-redux';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import { removeItem, increaseQuantity, decreaseQuantity } from '../utils/cartSlice';
import { CDN_URL } from '../utils/constants';

const CartCard = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        dispatch(removeItem(item));
    };

    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(item));
    };

    const handleDecreaseQuantity = () => {
        if (item.cartQuantity > 1) {
            dispatch(decreaseQuantity(item));
        } else if(item.cartQuantity == 0) {
            dispatch(removeItem(item));
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:justify-between items-center ">
            <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full md:w-40 rounded-lg mb-4 md:mb-0"
            />
            <div className="flex flex-col md:flex-row md:justify-between w-full md:ml-4">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-bold text-gray-900">{item.card.info.name}</h2>
                    <p className="text-gray-700 mt-1">{item.card.info.description}</p>
                </div>
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex items-center">
                        <button
                            onClick={handleDecreaseQuantity}
                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3 duration-100 hover:bg-secondary hover:text-white"
                        >
                            <FaMinus />
                        </button>
                        <input
                            className="h-8 w-8 border text-center text-xs outline-none"
                            type="number"
                            value={item.cartQuantity}
                            min="1"
                            readOnly
                        />
                        <button
                            onClick={handleIncreaseQuantity}
                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-secondary hover:text-white"
                        >
                            <FaPlus />
                        </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-md">₹ {Math.round((item.card.info.price/100 || item.card.info.defaultPrice/100) * item.cartQuantity)}</p>
                        <FaTrashAlt
                            onClick={handleRemoveItem}
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;

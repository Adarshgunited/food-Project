import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { clearCart } from '../utils/cartSlice';
import CartCard from './CartCard';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const getTotalPrice = () => {
        return cartItems.reduce((acc, item) => acc + item.cartQuantity * (item.card.info.price/100 || item.card.info.defaultPrice/100), 0);
    };

    const getTotalQuantity = () => {
        return cartItems.reduce((acc, item) => acc + item.cartQuantity, 0);
    };

    const totalPrice = getTotalPrice();
    const totalQuantity = getTotalQuantity();
    const finalPrice = totalPrice + 50; // Including shipping

    return (
        <div className="min-h-screen bg-gray-100 pt-5">
            <h1 className="text-2xl font-bold text-center mb-5">Cart Items ({totalQuantity})</h1>
            <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:space-x-6 px-4 lg:px-0">
                <div className="lg:w-2/3 space-y-6">
                    {cartItems.map((item) => (
                        <CartCard key={item.card.info.id} item={item} />
                    ))}
                </div>
                {cartItems.length > 0 && (
                    <div className="mt-6 lg:mt-0 lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-4 flex justify-between">
                            <p>Subtotal</p>
                            <p>₹ {Math.round(totalPrice.toFixed(2))}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Shipping</p>
                            <p>₹ 50.00</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div>
                                <p className="mb-1 text-lg font-bold">₹ {(finalPrice.toFixed(2))}</p>
                                <p className="text-sm">including Tax</p>
                            </div>
                        </div>
                        <button className="mt-6 w-full bg-blue-500 py-2 rounded-md text-white font-medium hover:bg-blue-600 transition duration-300">
                            Check out
                        </button>
                    </div>
                )}
            </div>
            <div className="flex justify-center mt-6">
                {cartItems.length !== 0 && (
                    <button className="bg-red-500 text-white p-2 rounded-lg font-bold hover:bg-red-600 transition duration-300" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                )}
            </div>
            {cartItems.length === 0 && (
                <>
                    <h1 className="text-xl font-medium text-center mt-6">Your cart is empty.</h1>
                    <p className="text-center mt-2">Browse our restaurants and find delicious food!</p>
                    
                    <div className="flex justify-center mt-4">
                        <Link to="/" className="flex items-center p-2 bg-green-300 rounded-lg shadow-lg hover:bg-green-400 transition duration-300">
                            <FaShoppingCart className="mr-2" />
                            <span className="text-lg font-bold">Browse Restaurants</span>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;

import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Cart = () => {
 
    // store we got from provider(app.js file)
    const cartItems = useSelector((store) => store.cart.items);

    // console.log(cartItems);



    const dispatch = useDispatch();

    //remove the cart item
    const handleRemoveItem = (cartItem) => (
        dispatch(removeItem(cartItem))
    )

    // clear the cart
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    // if(cartItems.length === 0) return <Shimmer/>

    // const {id, name, description, imageId, price} = cartItems[0].card.info;

    return (

        //old ui 
        <div className="">
             <h1 className="font-bold text-center text-xl p-2 m-2">Cart</h1>
             <div className="w-1/2 m-auto">
                 {/* reuse ItemList component */}
                 <ItemList items={cartItems} />
            </div>
            
             {/* cartUI in Progress */}
                     {/* <h2 className="font-bold text-center">Cart</h2>
//             <div className="titles grid grid-cols-4 gap-4 ">
//                 <div className="p-4 font-bold col-span-2 ">
//                     <h4>Item</h4>
//                     <h4>Quantity</h4>
//                     <h4>Total</h4>
//                 </div>
                
//                 <div className="cardsItems ">
//                     <h4>Price</h4>
//                     {
//                         cartItems?.map((cartItem)=>{
//                             return(
//                                 <div className="cardRender" key={cartItem?.card?.info?.id}>
//                                     <div>
//                                         <img src={CDN_URL+cartItem.card.info.imageId} alt="itemImage" />
//                                     </div>
//                                     <div>
//                                         <h2>{cartItem.card.info.name}</h2>
//                                     <p>{cartItem.card.info.description}</p>
//                                     <button onClick={()=> handleRemoveItem(cartItem)}>Remove</button>
//                                     </div>
//                                     <div>₹ {Math.floor(cartItem.card.info.price / 100)}</div>
//                                     <div className="buttonsQuantity">
//                                         <button>-</button>
//                                         <div>{cartItem.cartQuantity}</div>
//                                         <button>+</button>
//                                     </div>
//                                     <div>
//                                     <h2>₹ {Math.floor((cartItem.card.info.price / 100) * cartItem.cartQuantity)}</h2>
//                                     </div>
//                                 </div>
                                
//                             );
//                         })
//                     }
//                 </div>
//                 <div className="cart-summary ">
//                                         <div className="checkout">
//                                             <span>Subtotal</span>
//                                         <span className="amount">totalAmount</span>
//                                         </div>
//                                         <p>Taxes calculated at checkout</p>
//                                         <button>checkout</button>
//                                         <div className="flex justify-center m-2 p-2">
//                 <Link to="/" className="flex justify-center p-2 bg-slate-300 rounded-lg shadow-lg">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 22" strokeWidth={2.8} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
// </svg><span className="text-lg font-bold mx-2 px-2">Continue to Add Items</span>
                
//                 </Link>
//                 </div>
//                                     </div>

//             </div> */}
             {/* uI upper end div */}


             <div className="flex justify-center">
                 {cartItems.length !== 0 && (<button className="p-2 m-2 bg-black text-white rounded-lg font-bold" onClick={handleClearCart}>
                     Clear Cart
                 </button>)}
             </div>
             {cartItems.length === 0 && <h1 className="text-xl font-medium text-center"> Your cart is empty. Please add items to your cart !!!</h1>}
             {cartItems.length === 0 && <div className="flex justify-center m-2 p-2">
                 <Link to="/" className="flex justify-center p-2 bg-slate-300 rounded-lg shadow-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 22" strokeWidth={2.8} stroke="currentColor" className="w-6 h-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
 </svg><span className="text-lg font-bold mx-2 px-2">You can go to home page to view more restaurants</span>
                
                 </Link>
                 </div>}
         </div>
        //new ui
//   <div class="h-screen bg-gray-100 pt-5">
//     <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
//     <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//       <div class="rounded-lg md:w-2/3">
//         <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//           <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
//           <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//             <div class="mt-5 sm:mt-0">
//               <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
//               <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
//             </div>
//             <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//               <div class="flex items-center border-gray-100">
//                 <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
//                 <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
//                 <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
//               </div>
//               <div class="flex items-center space-x-4">
//                 <p class="text-sm">259.000 ₭</p>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//           <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
//           <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//             <div class="mt-5 sm:mt-0">
//               <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
//               <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
//             </div>
//             <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//               <div class="flex items-center border-gray-100">
//                 <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
//                 <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
//                 <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
//               </div>
//               <div class="flex items-center space-x-4">
//                 <p class="text-sm">259.000 ₭</p>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <!-- Sub total --> */}
//       <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
//         <div class="mb-2 flex justify-between">
//           <p class="text-gray-700">Subtotal</p>
//           <p class="text-gray-700">$129.99</p>
//         </div>
//         <div class="flex justify-between">
//           <p class="text-gray-700">Shipping</p>
//           <p class="text-gray-700">$4.99</p>
//         </div>
//         <hr class="my-4" />
//         <div class="flex justify-between">
//           <p class="text-lg font-bold">Total</p>
//           <div class="">
//             <p class="mb-1 text-lg font-bold">$134.98 USD</p>
//             <p class="text-sm text-gray-700">including VAT</p>
//           </div>
//         </div>
//         <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
//       </div>
//     </div>
//   </div>
    );
}

export default Cart;

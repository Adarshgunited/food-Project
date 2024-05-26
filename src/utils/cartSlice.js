import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// imagine cartSlice is a big object.
// createSlice is for making config for our cartSlice. it has initially a name, initialState, and reducers.
const cartSlice = createSlice({
    name: 'cart',
    // what will be the cart items initially
    // initial state is empty(cart is empty)
    initialState: {
        items: [],
        totalQuantity:0,
        totalAmount:0,
    },
    //fn to modify the items
    reducers: {
        //addItem is a single slice
        // action is an object and it store the data(in form of "payload")
        addItem : (state, action) => {
            // search item index in redux store
            // console.log(state.items);
            // console.log(action.payload.card.info.name);
            const itemIndex = state.items.findIndex((item) => item?.card?.info?.id === action?.payload?.card?.info?.id);
            // item array index, not present -1.
            if(itemIndex >=0){
                state.items[itemIndex].cartQuantity += 1;
                // toast info, info in blue
                toast.info(`${state.items[itemIndex].card.info.name} quantity increased by 1 unit`,{position:"bottom-center"});
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1};
            // got an items and added
            //We have to mutate/modify the state (redux toolkit)
            state.items.push(tempProduct);
            // toast, success in green
            toast.success(`${action.payload.card.info.name} added to cart`,{position:"bottom-center"});

            // console.log(action);
            }
        },
        // no need action, another slice
        removeItem : (state, action) => {
            //remove items based on id
            console.log(state.items);
            const nextCartItems = state.items.filter((cartItem) => cartItem.card.info.id !== action.payload.card.info.id);
            state.items = nextCartItems;
            
            //remove msg
            toast.error(`${action.payload.card.info.name} removed from cart`,{position:"bottom-center"})

        },
        decreaseQuantity: (state,action)=> {
            const itemIndex = state.items.findIndex(
                cartItem => cartItem.info.id === action.payload.card.info.id
            )

            if(state.items[itemIndex].cartQuantity > 1){
                state.items[itemIndex].cartQuantity -= 1;

                toast.info(`Decreased ${action.payload.card.info.name} cart quantity`,{position:"bottom-center"})
            }

        },
        // originalState = {items:["pizza"]};
        clearCart : (state) => {
            // clear the cart items = 0
            state.items.length = 0;
            // return { items: []};//this work. this new object will be replaced inside originalState = []
            // state = ["akshay"] // ... this will not work. their is a reason.
        }
    },
})

// export actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

// here we r only exporting the reducers.
export default cartSlice.reducer;
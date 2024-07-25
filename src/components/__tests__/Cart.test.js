import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu";
import Mock_Data from "../mocks/mockRestaurantMenu.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(()=>
    Promise.resolve({
        json : () => Promise.resolve(Mock_Data),
    })
)

it("should load restaurant Menu component",async()=>{
    
    await act(async()=> render(
    <BrowserRouter>
    <Provider store={appStore}>
        {/* cart items change */}
        <Header/>
        <RestaurantMenu/>
        <Cart/>
    </Provider>
    </BrowserRouter>
    ));

    //find accordion header
    const accordionHeader = screen.getByText("Recommended (20)");

    fireEvent.click(accordionHeader);

    //find foodItems, here we have expanded the accordion
    const foodItemsPresent = screen.getAllByTestId("foodItems");

    expect(foodItemsPresent.length).toBe(20); 

    // before add btn 
    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();


    const addBtns = screen.getAllByRole("button",{name:"Add +"});

    // console.log(addBtns.length);
    //clicked on 1st button
    fireEvent.click(addBtns[0]);

    // cart present or not, items change
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    // click on 1st button 
    fireEvent.click(addBtns[1]);
  
    //2nd button click, then cart should have 2 items
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    //after adding food items in cart then we have
    expect(screen.getAllByTestId("foodItems").length).toBe(22); 
    
    //clear cart event invoke
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

    //cart is clear food items are of only recommended present
    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    //cart clear, message present
    expect(screen.getByText("Cart is Empty. Please Add Items to Your Cart !!!")).toBeInTheDocument();

})
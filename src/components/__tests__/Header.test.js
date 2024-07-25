import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load Header Component with a login Button",() => {
    render(
        //the Header component here, can fetch Link Component
        <BrowserRouter>
        {/* the Header component here, can access the redux store */}
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );
    //most used - getByRole, even more descriptive by name
    const loginButton = screen.getByRole("button", {name:"Login"});
    // alternate way
    // const loginButton = screen.getByText("Login");


    expect(loginButton).toBeInTheDocument();

});

it("Should load Header Component with Cart items 0",()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );
    // be careful while using string(case-sensitive).
    const cartItems = screen.getByText("Cart - (0 items)");

    expect(cartItems).toBeInTheDocument();

})

it("Should render Header Component with a Cart item",()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    //use regex(no need to write exact string)
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();

})

it("Should change Login Button to Logout on click",()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"Login"});
    
    //doubt, when we click on the button this is triggered
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument();


});
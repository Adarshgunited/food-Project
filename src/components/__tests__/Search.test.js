import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/RestaurantListMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

//global object, fetch will replace the fetch of body(it does not find fetch fn of body).
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

//Search bar input
it("Should search the restaurant list card before/after for burger text input",async()=>{

    await act(async() =>
        render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        )
    );

    const cardBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardBeforeSearch.length).toBe(9);
    
    const searchBtn = screen.getByRole("button",{name:"Search"});

    //we got our searchInput box. jest give getByTestId().
    const searchInput = screen.getByTestId("searchInput");

    // replicate onchange event of body.js input attribute.
    fireEvent.change(searchInput,{ target : { value : "burger"}});

    fireEvent.click(searchBtn);

    //to get the cards, we have it inside div. we got div by resCard.
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    
    //card to be display if we click on the btn after search
    expect(cardsAfterSearch.length).toBe(1)
    
    expect(searchBtn).toBeInTheDocument();

});

//top rated restaurant button
it("Should filter top rated restaurant",async()=>{

    await act(async()=>
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    ))

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", {name:"Top Rated Restaurants"});

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(3);

})
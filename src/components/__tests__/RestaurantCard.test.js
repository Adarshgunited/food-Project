import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/RestaurantCardMock.json"
import "@testing-library/jest-dom"
import RestaurantCard from "../RestaurantCard";


it("should render RestaurantCard component with props Data",()=>{

    // pass props
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const restaurantName = screen.getByText("Burger King")

    expect(restaurantName).toBeInTheDocument();


});
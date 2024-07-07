import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/mockRestaurantList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import  "@testing-library/jest-dom";

// Mock the fetch function globally
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

// Mark the test function as async to use await inside it
it("Should render the body with search", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });


    // Render component to test and check if it renders correctly or not.
const beforesearch=screen.getAllByTestId("rescardtestid");
expect (beforesearch.length).toBe(3);

const searchBtn= screen.getByRole("button",{name:"Search"});
const inputboxsearch= screen.getByTestId("searchInput")
fireEvent.change(inputboxsearch,{target:{value:"pizza"}});
fireEvent.click(searchBtn);
// screen should load 4 card
const cards= screen.getAllByTestId("rescardtestid");

expect(cards.length).toBe(3);



//expect(searchBtn).toBeInTheDocument();

});

import { render,screen } from "@testing-library/react"
import RestaurantCard,{locatedRestaurantCard} from "../RestaurantCard"
import "@testing-library/jest-dom";
// import resCardMockData from "../../data/restaurants.json";

import MOCK_DATA  from "../../components/mocks/resCardMock.json"

it("Should render REstaurantcard data component with props data",()=>{
    render(<RestaurantCard dat={MOCK_DATA}/>);
    const name= screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();

})


// it("Should render restaurant card component with located label",()=>{
//     render(<locatedRestaurantCard RestaurantCard={<RestaurantCard dat={MOCK_DATA}/>}/>);
//     const locality= screen.getByText("Durg");
//     expect(locality).toBeInTheDocument();
// })

const LocatedRestaurantCard = locatedRestaurantCard(RestaurantCard);

it("Should render restaurant card component with located label", () => {
    render(<LocatedRestaurantCard dat={MOCK_DATA} />);
    const locality = screen.getByText(/Loaction:\s*Durg/i);
    expect(locality).toBeInTheDocument();
  });
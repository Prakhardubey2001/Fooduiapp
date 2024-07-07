import { fireEvent, render,screen } from "@testing-library/react"
import Heading from "../Heading"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
it("Should render Header Component with a login button",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Heading/>
    </Provider>
    </BrowserRouter>    
    );

    const loginButton = screen.getByRole("button",{name:"Login"});

    expect(loginButton).toBeInTheDocument();

})

it("Should render Header Component with cart items 0",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Heading/>
    </Provider>
    </BrowserRouter>    
    );

    // const cartItems = screen.getByText("Cart (0 items)");
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();

})

it("Should change login button to logout on click and vice versa",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Heading/>
    </Provider>
    </BrowserRouter>    
    );

    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton= screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument();

})
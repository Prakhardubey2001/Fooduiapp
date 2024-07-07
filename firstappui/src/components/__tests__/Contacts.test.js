import { render,screen } from "@testing-library/react"
import Contacts from "../Contacts"
import "@testing-library/jest-dom";

// this describe block is for grouping test cases 
describe("Contact us page test cases ",()=>{
    
test("Should load contact us component",()=>{
    render(<Contacts/>);
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

})

test("Should load button inside contact component",()=>{
    render(<Contacts/>);
    // const button=screen.getByRole("button");
    const button= screen.getByText("Submit");
    expect(button).toBeInTheDocument();

})

test("Should load input name inside contact component",()=>{
    render(<Contacts/>);
    const input= screen.getByPlaceholderText("Name...");
    expect(input).toBeInTheDocument();
})

test("Should load input email inside contact component",()=>{
    render(<Contacts/>);
    const input= screen.getByPlaceholderText("Email Address...");
    expect(input).toBeInTheDocument();
})

test("Should load two input boxes",()=>{
    render(<Contacts/>);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //console.log(inputBoxes);
    // this return a jsx element react element react fibre node object  virtual dom object
    //expect(inputBoxes).toBeInTheDocument();
    // Assert
    expect(inputBoxes.length).toBe(2);



})
})

// you can also it in place of test also it is just alias
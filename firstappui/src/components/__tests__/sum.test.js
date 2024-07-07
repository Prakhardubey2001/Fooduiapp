import { sum } from "../sum"

test("Sum fn should calculate the sum of two number",()=>{

    const result= sum(2,3);
    // Assertion
    expect(result).toBe(5);

    // expect is a function that takes in an argument and returns a value. The test function will return true or false based on whether the expected value matches the actual value. In this case we are expecting the returned value to be 5. If it's not then the test fails and you get a red message saying "Expected ... to equal ..."."
})
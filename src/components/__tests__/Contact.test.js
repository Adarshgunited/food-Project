const { render, screen } = require("@testing-library/react");
const { default: Contact } = require("../Contact");
import "@testing-library/jest-dom";

describe("Contact us test cases, used to group one component test cases",()=> {
    // run before all the below test cases
    beforeAll(()=>{
        // console.log("Before All test cases i will be run once");
    })

    //before each test this will run one time
    beforeEach(()=>{
        // console.log("Before each single test i will run");
    })

    afterAll(()=>{
        // console.log("after All test cases i will be run once");
    })

    afterEach(()=>{
        // console.log("After each single test i will run");
    })

    test("Should load contact us component", () => {
    // render Contact component on jsdom
    render(<Contact/>);
    // it will find all the heading inside the contact component and give to heading.
    const heading = screen.getByRole("heading");
    //the below fn will find whether our heading was inside the document or not
    //Assertion
    expect(heading).toBeInTheDocument();
});
})

// test to check button present or not.
// test alternate it
it("Should load button inside Contact component",() => {

    render(<Contact/>)

    const button = screen.getByRole("button");
    
    //alternate way
    // const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();

});

it("Should load input name inside Contact component",()=>{

    render(<Contact/>)

    const inputName = screen.getByRole("button");

    expect(inputName).toBeInTheDocument();
})

test("Should load 2 input boxes on the contact component",()=>{

    render(<Contact/>)

    //don't use it 
    // const inputBox = screen.getByRole("input");
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes);

    expect(inputBoxes.length).not.toBe(3);

});
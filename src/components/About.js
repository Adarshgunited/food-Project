import {Component} from 'react';
import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';


//destructure the {Component} from react.
class About extends Component {

// Constructor is optional
  constructor(props){

    super(props);
    
    // console.log("Parent Constructor");
  }

  componentDidMount(){

    // console.log("Parent Component Did Mount")
    
  };

// Render method defines what will be displayed on the screen.
  render(){

    // console.log("Parent Render");
    
    return (
    <div>
      {/* <h1>About</h1> */}
            {/* <h1>This is Namaste React Web Series</h1>
            {/* provided by react useContext kindOf alternate way */}
            {/* <UserContext.Consumer>
              {({loggedInUser})=> <h1 className='font-bold'>{loggedInUser}</h1>}
            </UserContext.Consumer> */}

            {/* Render UserClass component with a prop */}
      {/* <User name={'adarsh (Functional component)'}/> */}
      {/* <UserClass name={'first'} /> */}
      {/* You can create multiple instances of UserClass with different props */}
      {/* <UserClass name={'Second'} /> */}
      
      {/* new about info */}
      <div className="min-h-screen p-6 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to <span className="font-semibold">Foodie Haven</span>, your number one source for all things food. We're dedicated to giving you the best experience in discovering and ordering delicious meals, with a focus on three key characteristics: dependability, customer service, and uniqueness.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="mb-4">
            At Foodie Haven, our mission is to make it easy for you to find and enjoy great food. Whether you're looking for a quick bite or planning a special meal, we aim to bring you the best dining experiences right to your door.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Our History</h2>
          <p className="mb-4">
            Founded in 2023 by a team of passionate food lovers, Foodie Haven has come a long way from its beginnings. When we first started out, our passion for delicious, high-quality food drove us to start this app so that Foodie Haven can offer you a seamless and enjoyable food ordering experience. We now serve customers all over the city and are thrilled to be a part of the food delivery industry.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-4">
            We love to hear from our customers! If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Email: support@foodiehaven.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Foodie St, Food Town, FT 12345</li>
          </ul>
          <p className="text-center text-sm text-gray-500">Thank you for choosing Foodie Haven!</p>
        </div>
      </div>
    </div>
    </div>
  )
  }
}

export default About;
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
      <h1>About</h1>
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
    </div>
  )
  }
}

export default About;
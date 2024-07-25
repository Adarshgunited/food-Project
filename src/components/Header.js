import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () =>{

    //manage menu
    const [isOpen, setIsOpen] = useState(false);

    //  let btnName = "Login";

    const [btnNameReact, setBtnNameReact] = useState("Login");

    //variable check onlineStatus, custom hook
    const onlineStatus = useOnlineStatus();

    // context hook (assume global object)
    const {loggedInUser} = useContext(UserContext);

    // console.log("header rendered")

    // useEffect(()=>{
    // console.log("useEffect is called");
    // },[btnNameReact]);
    
    // console.log("re-render that whole header/component if state changes")

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store)=> store.cart.items);
    // console.log(cartItems);

    //Menu toggle
    const toggleMenu= () => {
        setIsOpen(!isOpen);
    }

    // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

    return(
        <header className="
        bg-gray-800
         text-white 
         p-4 
         flex 
         justify-between 
         items-center
         font-serif   
        ">  
              {/* logo */}
        <div className="flex items-center">
            <Link to="/"><img className="
            rounded-full transform transition duration-300 hover:scale-95
            h-20 w-20 mr-2
            "
            src={LOGO_URL} alt="logo"/></Link>
            
        </div>
            <nav className="
            md:flex 
            md:items-center">
            <ul className={`md:flex md:space-x-4 md:static absolute top-24 left-0 w-full bg-gray-800 md:bg-transparent z-10 transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}>
                <li className="px-4 py-2 md:py-0 hover:text-green-600 hover:underline"><Link  onClick={closeMenu} to="/" >Home</Link></li>
                <li className="px-4 py-2 md:py-0 hover:text-green-600 hover:underline"><Link  onClick={closeMenu} to="/about">About Us</Link></li>
                <li className="px-4 py-2 md:py-0 hover:text-green-600 hover:underline"><Link  onClick={closeMenu} to="/contact">Contact Us</Link></li>
                <li className="px-4 py-2 md:py-0 hover:text-green-600 hover:underline"><Link  onClick={closeMenu} to="/cart">Cart ({cartItems.length})</Link></li>
                {/* <li className="px-4 py-2 md:py-0 hover:text-green-600 hover:underline"><Link to="/grocery">Grocery</Link></li> */}
                <li className="px-4 py-2 md:py-0 ">Online: {onlineStatus?"Yes":"No"}</li>

                {/* <button className="login" onClick={()=>{
                    btnNameReact === "Login" ?
                    setBtnNameReact("Logout") :
                    setBtnNameReact("Login");
                    // console.log(btnNameReact);
                }}>{btnNameReact}</button> */}
                {/* <li className="px-4 hover:text-green-600">{loggedInUser}</li> */}
            </ul>
            <button onClick={toggleMenu} className="md:hidden text-xl focus:outline-none transition-transform duration-300 hover:text-green-600">
            {isOpen ? '✕' : '☰'}
            </button>
            </nav>
        </header>
    );
}

export default Header;
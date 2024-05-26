import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () =>{

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

    return(
        <div className="flex justify-between shadow-lg bg-cyan-200 h-24">        
        <div className="logo-container rounded-lg px-2 m-2">
            <Link to="/"><img className="w-20 rounded-[50%] transform transition duration-300 hover:scale-110"
            src={LOGO_URL} alt="logo"/></Link>
            
        </div>
        <div className="flex items-center flex-wrap font-bold">
            <ul className="flex p-4 m-4">
                <li className="px-4 hover:text-green-600"><Link to="/">Home</Link></li>
                <li className="px-4 hover:text-green-600"><Link to="/about">About Us</Link></li>
                <li className="px-4  hover:text-green-600"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4 hover:text-green-600 "><Link to="/cart">Cart({cartItems.length} items)</Link></li>
                {/* <li className="px-4 hover:text-green-600"><Link to="/grocery">Grocery</Link></li> */}
                <li className="px-4">Online:{onlineStatus?"Yes":"No"}</li>

                {/* <button className="login" onClick={()=>{
                    btnNameReact === "Login" ?
                    setBtnNameReact("Logout") :
                    setBtnNameReact("Login");
                    // console.log(btnNameReact);
                }}>{btnNameReact}</button> */}
                {/* <li className="px-4 hover:text-green-600">{loggedInUser}</li> */}
            </ul>
        </div>
        </div>
    );
}

export default Header;
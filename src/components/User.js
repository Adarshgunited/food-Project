import { useEffect, useState } from "react";

const User = ({name}) => {
    
    //state variable
    const [count,setCount] = useState(0);
    //another state variable
    const [count1] = useState(1);

    

    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count1: {count1}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : Mumbai</h3>
            <h4>Contact : adarshgunited786@gmail.com</h4>
        </div>
    );
}

export default User;
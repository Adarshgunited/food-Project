import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    // default online 
    const [onlineStatus, setOnlineStatus] = useState(true);

    // Logic for online/offline(render once)
    useEffect(() => {

        // offline logic
        window.addEventListener("offline", () => {
        setOnlineStatus(false)
        });

        //online logic
        window.addEventListener("online", () => {
        setOnlineStatus(true)
        });
    },[])
    //State variable(boolean value) 
    return onlineStatus;
}

export default useOnlineStatus;
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    //fetchData
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        try{
            const data = await fetch(MENU_API+resId);
        const json = await data.json();
        // our data is present in json.data
        setResInfo(json);
        // console.log(json);

        } catch (err) {
            console.error("Error while Fetching data:", err)
        }
    };
    //must return
    return resInfo;
};

export default useRestaurantMenu;

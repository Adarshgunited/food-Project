import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    //fetchData
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        // our data is present in json.data
        setResInfo(json);
        // console.log(json);
    };
    return resInfo;
};

export default useRestaurantMenu;

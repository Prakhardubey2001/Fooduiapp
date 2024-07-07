
import { useEffect, useState } from "react";

const useRestaurantMenu =(resId)=>{
    // fetchdata
    const [resInfo,setResInfo]= useState(null);
    useEffect(()=>{
        tfetchMenu(); 
     },[resId]);

    const tfetchMenu = async ()=>{
        const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.21290&lng=81.42930&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);

    };


    
    return [resInfo];
}
export default useRestaurantMenu;


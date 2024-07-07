// With TailWind

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import ResCategory from "./ResCategory.js";
const RestaurantMenu = () => {
const [resMenu,setresMenu]=useState(null);

const [showIndex,setShowIndex]=useState();

useEffect(()=>{
   fetchMenu(); 
},[]);
const {resId}=useParams();
const [resInfo]=useRestaurantMenu(resId);
console.log("below is custom hook  "+ resInfo);
console.log(resId)
const fetchMenu= async ()=>{
const data= await  fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.21290&lng=81.42930&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
const json= await data.json();
console.log(json); 
setresMenu(json.data);


};
if(resMenu===null)
    {
        return <Shimmer/>
    }
const {name,cuisines,costForTwoMessage}=resMenu?.cards[2]?.card?.card?.info;
 const {itemCards}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 console.log(itemCards)
//  const abc=itemCards;
//  console.log(abc)
 const bcd=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
 console.log(bcd)
const categories= bcd.filter((c)=>c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
console.log("categories below")
console.log(categories);
//  console.log("this is to work on:"+resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);   
 return  (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{resMenu?.cards[2]?.card?.card?.info.name}</h1>
      <h3 className="font-bold text-lg">{resMenu?.cards[2]?.card?.card?.info.cuisines.join(", ")}-{resMenu?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
      {categories.map((category,index)=>{
       return <ResCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index===showIndex?true:false}PasstoChildfn={()=>{ return setShowIndex(index===showIndex?null:index)}}/>
      })}

      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item)=>(
            <li key={item.card.info.id}>
                {item.card.info.name}- Rs. {item.card.info.price/100||item.card.info.defaultPrice/100}
            </li>
        ))}
       </ul>  */}
      
    </div>
    
  );
};
export default RestaurantMenu;







// Without Tailwind

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Shimmer from "./Shimmer";
// import useRestaurantMenu from "../utils/useRestaurantMenu.js";
// const RestaurantMenu = () => {
// const [resMenu,setresMenu]=useState(null); 
// useEffect(()=>{
//    fetchMenu(); 
// },[]);
// const {resId}=useParams();
// const [resInfo]=useRestaurantMenu(resId);
// console.log("below is custom hook  "+ resInfo);
// console.log(resId)
// const fetchMenu= async ()=>{
// const data= await  fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.21290&lng=81.42930&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
// const json= await data.json();
// console.log(json); 
// setresMenu(json.data);


// };
// if(resMenu===null)
//     {
//         return <Shimmer/>
//     }
// const {name,cuisines,costForTwoMessage}=resMenu?.cards[2]?.card?.card?.info;
//  const {itemCards}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//  console.log(itemCards)
// //  const abc=itemCards;
// //  console.log(abc)
//  const bcd=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//  console.log(bcd)
// const categories= bcd.filter((c)=>c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
// console.log("categories below")
// console.log(categories);
// //  console.log("this is to work on:"+resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);   
//  return  (
//     <div className="menu">
//       <h1>{resMenu?.cards[2]?.card?.card?.info.name}</h1>
//       <h3>{resMenu?.cards[2]?.card?.card?.info.cuisines.join(", ")}-{resMenu?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
//       <h2>Menu</h2>
//       <ul>
//         {itemCards.map((item)=>(
//             <li key={item.card.info.id}>
//                 {item.card.info.name}- Rs. {item.card.info.price/100||item.card.info.defaultPrice/100}
//             </li>
//         ))}
//        </ul> 
      
//     </div>
    
//   );
// };
// export default RestaurantMenu;


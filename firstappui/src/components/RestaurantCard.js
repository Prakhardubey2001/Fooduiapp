// With Tailwind

import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

// const styleCard={
//     backgroundColor:"#f0f0f0",

// }


// const data=useContext(UserContext);

const RestaurantCard =({dat})=>{
    console.log("What goes inside dat")
    console.log(dat);
    const contextdata= useContext(UserContext);
    
    return (   
    <div data-testid="rescardtestid"  className="m-4 p-4 w-[310px] bg-gray-200 rounded-xl hover:bg-blue-300" >
        
        
            {
        /* <img alt="food image" className="res-img"src={IMAGE_URL}/> */}
        <img alt="food image" className="res-img rounded-lg"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+dat.info.cloudinaryImageId}/>
        {/* <h3>Baba ka dhaba</h3>
        <h4>Asian</h4>
        <h4>1 star</h4> */}
        <h3 className="font-bold text-lg py-4">{dat.info.name}</h3>
        <h4>
        {dat.info.cuisines
.join(",")}</h4>
        <h4>{dat.info.avgRating}</h4>
        <h4>{contextdata.loggedInUser}</h4>
        
        {/* <h4>{loggedInUser}</h4> */}

        {/* <h3>{dat.name}</h3>
        <h4>{dat.cousines
.join(",")}</h4>
        <h4>{dat.rating}</h4> */}


    </div>);
};


// Higher order component

// input- Restaurant Card=> Restaurant card location

export const locatedRestaurantCard =(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Loaction:{props.dat.info.locality}</label>
                <RestaurantCard {...props}/>

            </div>
        )
    }
}










export default RestaurantCard;




















// Without Tailwind

// import { IMAGE_URL } from "../utils/constants.js";

// const styleCard={
//     backgroundColor:"#f0f0f0",

// }

// const RestaurantCard =({dat})=>(
    
//     <div className="res-card" style={styleCard}>
        
//         {/* <img alt="food image" className="res-img"src={IMAGE_URL}/> */}
//         <img alt="food image" className="res-img"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+dat.info.cloudinaryImageId}/>
//         {/* <h3>Baba ka dhaba</h3>
//         <h4>Asian</h4>
//         <h4>1 star</h4> */}
//         <h3>{dat.info.name}</h3>
//         <h4>
//         {dat.info.cuisines
// .join(",")}</h4>
//         <h4>{dat.info.avgRating}</h4>
//         {/* <h3>{dat.name}</h3>
//         <h4>{dat.cousines
// .join(",")}</h4>
//         <h4>{dat.rating}</h4> */}


//     </div>
// );

// export default RestaurantCard;


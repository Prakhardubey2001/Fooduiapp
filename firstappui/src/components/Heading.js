// With Tailwind
import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Heading= ()=>{
    const [Name, setName]= useState("Login");
    const isOnline= useOnlineStatus();
    const cartItems= useSelector((store)=>store.cart.items);
    console.log(cartItems);
    const contextdata= useContext(UserContext);
    // console.log("Render Render")
    return(
    <div className="flex justify-between bg-pink-100  shadow-lg mb-2">
    <div >
        <img className="w-24" src={LOGO_URL} />    
    </div>
    <div className="flex items-center">
        <ul className="flex px-5 p-4 m-4">
            <li className="px-4"> Online:{isOnline?"👍":"👎"} </li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About us</Link></li>
            <li className="px-4"><Link to="/contact">Contact us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 font-bold text-xl">
                <Link to='/cart'>Cart ({cartItems.length} items)</Link>
                </li>
        <button className="login px-4" 
        onClick={()=>Name === "Login"? setName("Logout"):setName( "Login")}>{Name}</button>    
        <li className="px-4 font-bold">{contextdata.loggedInUser}</li>
        </ul>
    </div>

    </div>
    );
};
export default Heading;















// Without Tialwind


// import { LOGO_URL } from "../utils/constants";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// const Heading= ()=>{
//     const [Name, setName]= useState("Login");
//     const isOnline= useOnlineStatus();


//     console.log("Render Render")
//     return(
//     <div className="Heading ">
//     <div >
//         <img className="img" src={LOGO_URL} />    
//     </div>
//     <div className="nav-items">
//         <ul>
//             <li> Online:{isOnline?"👍":"👎"} </li>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About us</Link></li>
//             <li><Link to="/contact">Contact us</Link></li>
//             <li><Link to="/grocery">Grocery</Link></li>
//             <li>Cart</li>
//         <button className="login" 
//         onClick={()=>Name === "Login"? setName("Logout"):setName( "Login")}>{Name}</button>    
//         </ul>
//     </div>

//     </div>
//     );
// };
// export default Heading;



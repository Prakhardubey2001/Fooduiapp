import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading.js";
import RestaurantCard from "./components/RestaurantCard.js";
import Body from "./components/Body.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import About from "./components/About.js";
import Contacts from "./components/Contacts.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Shimmer from "./components/Shimmer.js";
//import Grocery from "./components/Grocery.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
import Autocomplete from "./components/Autocomplete.js";
import TabforAutocomplete from "./components/TabforAutocomplete.js";

// const  App = () => <div> Hello World </div> 
const Grocery=lazy(()=>import('./components/Grocery.js'));
const About= lazy(()=>import('./components/About.js'));


const AppLayout=()=>{

    const[userInformation,setUserInformation]=useState();
    useEffect(()=>{
        const data={
            name:"Prakhar Dubey"
        }
        setUserInformation(data.name);
    },[]);
    

    return(
        <Provider store={appStore}>
       <UserContext.Provider value={{ loggedInUser:userInformation,setUserInformation}}>
    <div className="App">
        
        <Heading/>
        <Outlet />

        {/* if path is / 
        <Body/>
        if path is /about 
        <About/>
        if path is /contacts  
        <Contacts/>  */}
    </div>
    </UserContext.Provider>
    </Provider>
)}

const appRouter= createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path:"/contact",
                element: <Contacts/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>

            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/autocomplete",
                element:<TabforAutocomplete/>
            }
        ],
        errorElement:<Error/>
    },
    
]) ;
const root= ReactDOM.createRoot(document.getElementById("root")) ;
root.render(<RouterProvider router={appRouter}/>) ;


//ReactDOM.render(<App />, document.getElementById('root'))




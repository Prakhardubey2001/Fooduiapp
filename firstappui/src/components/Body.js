// With tailWind 

import RestaurantCard,{locatedRestaurantCard} from "./RestaurantCard.js";
import { useContext, useEffect, useState } from "react";

import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import Autocomplete from "./Autocomplete.js";

let listofrestaujs=[{
    data:{
        id:"334475",
        name:"dhaba G",
        cousines:["veg", "non-veg","continental"],
        rating:5,
    }
},{
    data:{
        id:"334476",
        name:"dhaba ka baba",
        cousines:["veg", "non-veg"],
        rating:1,
    }
}];





const Body =()=>
    
    
    {   
        // const staticData=[
        //     "apple",
        //     "banana",
        //     "kiwi",
        //     "PineApple",
        //     "Orange"
        // ]

        // const fetchSuggestions=async (query)=>{
        //     const response= await fetch(
        //         `https://dummyjson.com/recipes/search?q=${query}`
        //     );
        //     if(!response.ok)
        //         {
        //             throw new Error("Network Response not ok");
        //         }
        //     const result= await response.json();
        //     console.log("recipies here");
        //     console.log(result);
        //     return result.recipes;    

        // }
        
        
        const [searchtext,setsearchtext]=useState("");
        console.log("body is rendered")
        const [thefilteredlistofrestau,setthefilteredlistofrestau]=useState([]);
        const Locatedrestau= locatedRestaurantCard(RestaurantCard);

    const [listofrestau,setlistofrestau]= useState([
            {
                data:{
                    id:"334475",
                    name:"dhaba G",
                    cousines:["veg", "non-veg","continental"],
                    rating:5,
                }
            },
            {
                data:{
                    id:"334476",
                    name:"dhaba ka baba",
                    cousines:["veg", "non-veg"],
                    rating:1,
                }
            }
        ]);


        
        //[listofrestau,setlistofrestau]=arr    
        
        useEffect(()=>{
            fetchData();
            
        },[])
        const [page,setPage]=useState(1);
        const {loggedInUser,setUserInformation}= useContext(UserContext);
        const fetchData= async ()=>{
             const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1952894&lng=81.3465805&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
             const json= await data.json();
             console.log(json);
             setlistofrestau(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
             console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
             setthefilteredlistofrestau(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            console.log(listofrestaujs);
        
        
             //     setthefilteredlistofrestau([
        //         {
        //             data:{
        //                 id:"334475",
        //                 name:"dhaba G",
        //                 cousines:["veg", "non-veg","continental"],
        //                 rating:5,
        //             }
        //         },
        //         {
        //             data:{
        //                 id:"334476",
        //                 name:"dhaba ka baba",
        //                 cousines:["veg", "non-veg"],
        //                 rating:1,
        //             }
        //         }
        //     ])
         };

         const isonline= useOnlineStatus();
         if(isonline===false)
            {   
                return(
                    <h1>Look like you are offline</h1>
                )};

        if(listofrestau.length===0)
            {
              return <Shimmer/>  
            }

        const selectpagehandler= (pageget)=>{
            if(pageget>=1 && pageget<=thefilteredlistofrestau.length && pageget!=page)
            {
                setPage(pageget);
            }
        }   

     return (  
    <div className="Body">
        {/* <div className="Search">Search</div> */}
        <div className="filter flex">
            <div className="search m-4 p-4">
                <input type="text" placeholder="search here" data-testid="searchInput" className="search-box border border-solid border-black py-0.5 rounded-xl px-5" value={searchtext} onChange={(e)=>{setsearchtext(e.target.value);}}  />
                <button className="px-4 py-0.5 bg-green-400 m-4 rounded-lg " onClick={()=>{
                    // fiter the card and update the ui 
                    console.log(searchtext);
                    const filterres= listofrestau.filter((item)=>item.info.name.toLowerCase().includes(searchtext.toLowerCase())); 
                    // setlistofrestau(filterres);
                    setthefilteredlistofrestau(filterres);
                }}>Search</button>
                

            </div>
        
             
        <div className="search m-4 p-4 flex items-center" >
            <button className="px-4 py-1 bg-gray-100 flex items-center rounded-lg" onClick={()=>{
                console.log(listofrestau);
                console.log("clicked");
             const  filteredlistofrestau=thefilteredlistofrestau.filter((item)=>{return item.info.avgRating>4});
            //const  filteredlistofrestau=listofrestau.filter((item)=>{return item.data.rating>=4});
                console.log(filteredlistofrestau);
                setlistofrestau(filteredlistofrestau);

            }
        }
            onMouseOver={()=>{console.log("mouse over")}}>
                TOP RATED RESTAURANT
            </button>
            {/* <div><Autocomplete placeholder={"Enter here"} fetchSuggestions={fetchSuggestions}
            //staticData={staticData}
            dataKey={"name"}
            customloading={<Shimmer/>}
            onSelect={(res)=>{
                console.log(res)
            }}
            onChange={(input)=>{}}
            onBlur={(e)=>{}}
            onFocus={(e)=>{} }
            

            
            
            /></div> */}
        </div>
        <div className="m-4 py-8 ">
            <label>Username:</label>
            <input value={loggedInUser} className="border border-black px-2" onChange={(e)=>setUserInformation(e.target.value)}/>
        </div>



        </div> 
        
        <div className="flex items-center flex-wrap justify-between ">
        {thefilteredlistofrestau.slice(page*3-3,page*3).map((res)=>(
            <Link key={res.info.id} to={"/restaurants/"+res.info.id}>
                {/* if the location is available show it */}

                {res.info.locality?(<Locatedrestau dat={res}/>):(<RestaurantCard dat={res}/>)}

                </Link>
        ))}

        </div>
        {
            thefilteredlistofrestau.length>0 && <div className="Pagination">
                <span className={page>1?"":"Pagination__disabled"} onClick={()=>{
                    selectpagehandler(page-1);
                }}>⬅️</span>
                {/* <span>1</span> */}
                 {/*Automatic mapping  */}
                 {
                    [...Array(thefilteredlistofrestau.length)].map((_,i)=>{
                        return <span className={ page === i+1?"Pagination__selected":""} 
                        onClick={()=>{
                            selectpagehandler(i+1)
                            
                        }} key={i}>{i+1}</span>
                    })
                 }
                <span className={page <thefilteredlistofrestau.length?"":"Pagination__disabled"} onClick={()=>{
                    selectpagehandler(page+1);
                }}>➡️</span>
            </div> 
        }
        

    </div>)
    };
export default Body;




// Without Tailwind

// import RestaurantCard from "./RestaurantCard.js";
// import { useEffect, useState } from "react";
// import shimmer from "./Shimmer.js";
// import Shimmer from "./Shimmer.js";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus.js";

// let listofrestaujs=[{
//     data:{
//         id:"334475",
//         name:"dhaba G",
//         cousines:["veg", "non-veg","continental"],
//         rating:5,
//     }
// },{
//     data:{
//         id:"334476",
//         name:"dhaba ka baba",
//         cousines:["veg", "non-veg"],
//         rating:1,
//     }
// }];



// const Body =()=>
    
    
//     {   const [searchtext,setsearchtext]=useState("");
//         console.log("body is rendered")
//         const [thefilteredlistofrestau,setthefilteredlistofrestau]=useState([]);
//     const arr= useState([
//             {
//                 data:{
//                     id:"334475",
//                     name:"dhaba G",
//                     cousines:["veg", "non-veg","continental"],
//                     rating:5,
//                 }
//             },
//             {
//                 data:{
//                     id:"334476",
//                     name:"dhaba ka baba",
//                     cousines:["veg", "non-veg"],
//                     rating:1,
//                 }
//             }
//         ]);


        
//         [listofrestau,setlistofrestau]=arr    
        
//         useEffect(()=>{
//             fetchData();
            
//         },[])
        
//         const fetchData= async ()=>{
//              const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1952894&lng=81.3465805&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//              const json= await data.json();
//              console.log(json);
//              setlistofrestau(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//              console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
//              setthefilteredlistofrestau(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//         //     setthefilteredlistofrestau([
//         //         {
//         //             data:{
//         //                 id:"334475",
//         //                 name:"dhaba G",
//         //                 cousines:["veg", "non-veg","continental"],
//         //                 rating:5,
//         //             }
//         //         },
//         //         {
//         //             data:{
//         //                 id:"334476",
//         //                 name:"dhaba ka baba",
//         //                 cousines:["veg", "non-veg"],
//         //                 rating:1,
//         //             }
//         //         }
//         //     ])
//          };

//          const isonline= useOnlineStatus();
//          if(isonline===false)
//             {   
//                 return(
//                     <h1>Look like you are offline</h1>
//                 )};

//         if(listofrestau.length===0)
//             {
//               return <Shimmer/>  
//             }

//      return (  <div className="Body">
//         {/* <div className="Search">Search</div> */}
//         <div className="filter">
//             <div className="search">
//                 <input type="text" placeholder="search here" className="search-box" value={searchtext} onChange={(e)=>{setsearchtext(e.target.value);}}  />
//                 <button onClick={()=>{
//                     // fiter the card and update the ui 
//                     console.log(searchtext);
//                     const filterres= listofrestau.filter((item)=>item.info.name.toLowerCase().includes(searchtext.toLowerCase())); 
//                     // setlistofrestau(filterres);
//                     setthefilteredlistofrestau(filterres);
//                 }}>Search</button>
//                 {/* <button onClick={()=>{
//                     setsearchtext("");
//                     setlistofrestau(
//                         [
//                             {
//                                 data:{
//                                     id:"334475",
//                                     name:"dhaba G",
//                                     cousines:["veg", "non-veg","continental"],
//                                     rating:5,
//                                 }
//                             },
//                             {
//                                 data:{
//                                     id:"334476",
//                                     name:"dhaba ka baba",
//                                     cousines:["veg", "non-veg"],
//                                     rating:1,
//                                 }
//                             }
//                         ]
//                     )
//                 }}>back</button> */}

//             </div>
//             <button className="filter-btn" onClick={()=>{
//                 console.log(listofrestau);
//                 console.log("clicked");
//              const  filteredlistofrestau=thefilteredlistofrestau.filter((item)=>{return item.info.avgRating>4});
//             //const  filteredlistofrestau=listofrestau.filter((item)=>{return item.data.rating>=4});
//                 console.log(filteredlistofrestau);
//                 setlistofrestau(filteredlistofrestau);

//             }
//         }
//             onMouseOver={()=>{console.log("mouse over")}}>
//                 TOP RATED RESTAURANT
//             </button>
//         </div>
//         <div className="res-container">

//         {/* <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/> */}
//         {/* {listofrestau.map((res,index)=>(
//             <RestaurantCard key={index} dat={res.data}/>
//         ))} */}
//        {/* {thefilteredlistofrestau.map((res,index)=>(
//             <RestaurantCard key={index} dat={res.data}/>
//         ))} */}
//         {thefilteredlistofrestau.map((res)=>(
//             <Link key={res.info.id} to={"/restaurants/"+res.info.id}><RestaurantCard dat={res}/></Link>
//         ))}
//         </div>


//     </div>)
//     };
// export default Body;
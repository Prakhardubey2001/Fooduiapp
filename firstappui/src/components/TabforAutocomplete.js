import React from 'react'
import Autocomplete from './Autocomplete';
import Shimmer from './Shimmer';
const TabforAutocomplete = () => {
  
    const fetchSuggestions=async (query)=>{
        const response= await fetch(
            `https://dummyjson.com/recipes/search?q=${query}`
        );
        if(!response.ok)
            {
                throw new Error("Network Response not ok");
            }
        const result= await response.json();
        console.log("recipies here");
        console.log(result);
        return result.recipes;    

    }
    return (
    <div><Autocomplete placeholder={"Enter here"} fetchSuggestions={fetchSuggestions}
            //staticData={staticData}
            dataKey={"name"}
            customloading={<Shimmer/>}
            onSelect={(res)=>{
                console.log(res)
            }}
            onChange={(input)=>{}}
            onBlur={(e)=>{}}
            onFocus={(e)=>{} }
            

            
            
            /></div>
  )
}

export default TabforAutocomplete
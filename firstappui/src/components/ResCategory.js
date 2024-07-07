import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory=(props)=>{
    // console.log(props);
    const {data,showItems,PasstoChildfn}=props;
    // const [showItems,setShowItems]= useState(false);
    // const handleClick=()=>{
    //     setShowItems(!showItems);
    // }
    const [count,setCount]=useState(0);
    const handleClick=()=>{
        
        
        PasstoChildfn();
        
            
        
    };

    return <div>
        {/* Header */}
        <div className="w-6/12 my-2  mx-auto bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
        {/* Accordian Body */}
        
    </div>
}

export default ResCategory;
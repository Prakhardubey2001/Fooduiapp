import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList=({items})=>{
    console.log("items below")
    console.log(items);
   const dispatch= useDispatch();
    const handleCartItem=(item)=>{
        // console.log("hello clicked")
        dispatch(addItem(item));
   }

    return(<div>
        
            {items.map((item)=>{return (<div key={item.card.info.id} className="py-2 m-2 border-gray-300 border-b-2 flex justify-between">
               
               <div className="w-9/12 " >
               <div className="py-2 ">
                <span className="font-bold">{item.card.info.name}</span>
                <span className="font-bold text-sm" > ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                </div>
                <div className=" ">
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                </div>
                <div  className="w-3/12 p-4 ">
                <div className="absolute  "><button className=" bg-black text-white p-2 my-auto mx-10 shadow-lg rounded-lg " onClick={()=>handleCartItem(item)} >Add+</button></div>
                <img className="w-30 h-30" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId} alt="Image" />
                

                </div>
                                
                                
            </div>)})}
        
    </div>);
}

export default ItemList;


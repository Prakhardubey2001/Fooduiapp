import { useSelector,useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems= useSelector((state)=>state.cart.items)
    console.log(cartItems)
    // don't do this way, you can access all the state values from your component. but it is heavy 
    // const store= useSelector((state)=>state);
    // const cartItems= store.cart.items 

const dispatch = useDispatch();
const handlclear=()=>{dispatch(clearCart());};
    return(<div className="text-center  m-4 p-4 " >
        <h1
         className="  font-bold text-xl ">Cart</h1>
         <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-red-200 rounded" onClick={handlclear}>Clear</button>
            {cartItems.length===0?(<h1>No Items in the cart.</h1>) : (<ItemList  items={cartItems}/>)}
         </div>
    </div>);
}
export default Cart;


import{createSlice,current} from "@reduxjs/toolkit";
// import cartSlice from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"Cart",
    initialState:{items:[]},
    reducers:{
        // {
        //     payload:"pizza"
        // },

        // Vanilla Redux ==> It always states that don't mutate the state, returning was mandateory
        // const newState=[...state]
        // newState.items.paush(action.payload)
        // return newState;
        
        // In Redux Toolkit we have to mutate the state and returning is not mandatory it is taking care iteself
        
        addItem:(state,action)=>{
            state.items.push(action.payload);
            console.log(state);
            console.log(current(state));
            // console.log(state.items[0]);
            console.log("Add item");
        },
        removeItem:(state,action)=>{
            state.items.pop();  
        },
        clearCart:(state,action)=>{
            state.items.length=0;
            // retrun {items:[]}; // this new obj will be replacedinside originalState={}
        }

    }
});

export const{addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;



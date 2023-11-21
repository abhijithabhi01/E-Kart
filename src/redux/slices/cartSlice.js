import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            state.push(action.payload)
        },
        removeFromcart : (state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state = []
        }
    }
})
export const{addtocart,removeFromcart,emptyCart} = cartSlice.actions
export default cartSlice.reducer
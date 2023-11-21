const { createSlice } = require("@reduxjs/toolkit");




const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[], // since this state have to hold more than one item
    reducers:{
        //actions
        //function to add items to wishlist array state
        addtowishlist:(state,action)=>{
            state.push(action.payload)
        },
        //function to remove items from wishlist array state
        removefromwishlist:(state,action)=>{
        return state.filter(item=>item.id!==action.payload)
        
        }
    }

})
export const{addtowishlist,removefromwishlist} =wishlistSlice.actions
export default wishlistSlice.reducer
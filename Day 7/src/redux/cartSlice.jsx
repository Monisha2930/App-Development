import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"addItem",
    initialState:{
        user:[]
    },
    reducers:{
        addItems : (state, action) => {
            switch (action.type) {
                case "ADDITEM" : return [
                    ...state,
                    action.payload
                ]
                break;
        
                case "DELITEM" :
                    return state = state.filter((x)=>{
                        return x.id !== action.payload.id
                    })
                break;
        
                default: return state;
                break;
        
                
            }
        }
    }  
})
export const {addItems}=cartSlice.actions;

export const selectCart =(state)=>state.addItem.addItem;

export default cartSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//     name:"addItem",
//     initialState:{
//         user:[]
//     },
//     reducers:{
//         addItems : (state, action) => {
//             switch (action.type) {
//                 case "ADDITEM" : return [
//                     ...state,
//                     action.payload
//                 ]
//                 break;
        
//                 case "DELITEM" :
//                     return state = state.filter((x)=>{
//                         return x.id !== action.payload.id
//                     })
//                 break;
        
//                 default: return state;
//                 break;
        
                
//             }
//         }
//     }  
// })
// export const {addItems}=cartSlice.actions;

// export const selectCart =(state)=>state.addItem.addItem;

// export default cartSlice.reducer;


// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.pid === newItem.pid);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.pid !== itemId);
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.pid === itemId);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.pid === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    removeAllFromCart: state => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, removeAllFromCart} = cartSlice.actions;

export default cartSlice.reducer;
export const selectCart =(state)=>state.cart.cart;

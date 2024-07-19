import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    
   
  },
  reducers: {
       addTocart :(state , action)=>{
     const duplicate = state.items.filter(item => item._id === action.payload._id)
     if(duplicate.length === 0){
      state.items.push(
        {
          ...action.payload,
          quantity: 1
        }
      )
     }
     else{
      state.items = state.items.map(item=>{
        if(item._id === action.payload._id){
          return{
            ...item,
            quantity : item.quantity + 1
          }
        }
        return item
      })
     }
     
  },
  removeFromCart: (state, action) => {
    state.items = state.items.map(item => {
      if (item._id === action.payload) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    }).filter(item => item.quantity > 0);
  },
    
}})

// Action creators are generated for each case reducer function
export const { addTocart ,removeFromCart} = cartSlice.actions

export default cartSlice.reducer
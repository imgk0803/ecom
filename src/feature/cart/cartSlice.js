import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    quantity : 0
  },
  reducers: {
       addTocart :(state , action)=>{
        
        console.log(state.items)
        state.items.push(action.payload)
       }
  },
})

// Action creators are generated for each case reducer function
export const { addTocart} = cartSlice.actions

export default cartSlice.reducer
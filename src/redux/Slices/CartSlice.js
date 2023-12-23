import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      // reducer function takes 2 parameters one is state and other is action and we need to push the input parameter into state by :
      // action.payload refers to the input parameter received by the reducer (here, it is post).
    },
    remove: (state, action) => { 
    return state.filter((item)=> item.id !== action.payload);
    // it filters out the items whose id is not equal to the input's id 
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;

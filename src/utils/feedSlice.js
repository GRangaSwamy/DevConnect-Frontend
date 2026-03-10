import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,actions)=>{
            return actions.payload
        },
         removeFeed: (state, action) => {
            const filtered = state.filter((user) => user._id !== action.payload);
            return filtered.sort(() => Math.random() - 0.5);
        }
    }
})
export const{addFeed,removeFeed} = feedSlice.actions
export default feedSlice.reducer;
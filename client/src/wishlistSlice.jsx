import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";



const wishListSlice=createSlice({
    name:"mywishlist",
    initialState:{
        card:[]
    },

    reducers:{
        addTowishlist: (state, actions) => {
            const mydata = state.card.filter((key) => key.id == actions.payload.id)

            if (mydata.length >= 1) {
                message.error("product already exits in your card")
            }

            else {
                state.card.push(actions.payload);
                message.success("product added sucessfully")
            }
        },
    }
})

export default wishListSlice.reducer;
export const {addTowishlist} = wishListSlice.actions
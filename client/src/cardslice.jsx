import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";


const cardslice = createSlice({
    name: "mycard",
    initialState: {
        card: []
    },

    reducers: {
        addTocard: (state, actions) => {
            const mydata = state.card.filter((key) => key.id == actions.payload.id)

            if (mydata.length >= 1) {
                message.error("product already exits in your card")
            }

            else {
                state.card.push(actions.payload);
                message.success("product added sucessfully")
            }
        },

        qntyIncrement: (state, actions) => {
            for (var i = 0; i < state.card.length; i++) {
                if (state.card[i].id == actions.payload.id) {
                    state.card[i].qnty++;
                }
            }
        },

        qntyDecrement: (state, actions) => {
            for (var i = 0; i < state.card.length; i++) {
                if (state.card[i].id == actions.payload.id) {

                    if (state.card[i].qnty <= 1) {
                        message.error("Quantity not less than 1 ")
                    }
                    else {
                        state.card[i].qnty--;
                    }

                }
            }
        },

        dataRemove:(state,actions)=>{
            state.card = state.card.filter(key=>key.id!=actions.payload)
        }
    }







 })


export const { addTocard, qntyIncrement, qntyDecrement,dataRemove } = cardslice.actions;
export default cardslice.reducer;

// // cardslice.js (or wherever your slice is defined)
// import { createSlice } from "@reduxjs/toolkit";

// // Helper function to save the state to localStorage
// const saveToLocalStorage = (state) => {
//   localStorage.setItem("cart", JSON.stringify(state.card));
// };

// // Helper function to load the state from localStorage
// const loadFromLocalStorage = () => {
//   const savedCart = localStorage.getItem("cart");
//   return savedCart ? JSON.parse(savedCart) : [];
// };

// const initialState = {
//   card: loadFromLocalStorage(),  // Load saved cart data from localStorage if available
// };

// const cardslice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     qntyIncrement: (state, action) => {
//       const card = state.card.find((card) => card.id === action.payload.id);
//       if (card) card.qnty += 1;
//       saveToLocalStorage(card); // Save to localStorage after every change
//     },
//     qntyDecrement: (state, action) => {
//       const item = state.card.find((item) => item.id === action.payload.id);
//       if (item && item.qnty > 1) item.qnty -= 1;
//       saveToLocalStorage(state); // Save to localStorage after every change
//     },
//     dataRemove: (state, action) => {
//       state.card = state.card.filter((item) => item.id !== action.payload);
//       saveToLocalStorage(state); // Save to localStorage after every change
//     },
//     addTocard: (state, action) => {
//       state.card.push(action.payload);
//       saveToLocalStorage(state); // Save to localStorage after every change
//     },
//   },
// });

// export const { qntyIncrement, qntyDecrement, dataRemove, addTocard } = cardslice.actions;
// export default cardslice.reducer;

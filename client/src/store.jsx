// import { configureStore } from "@reduxjs/toolkit";
// import cardreducer from "./cardslice"
// import wishlistdata from "./wishlistSlice"


// const store = configureStore({
//     reducer:{
//        mycard:cardreducer,
//        mywishlist:wishlistdata
//     }
// })

// export default store;

// import { configureStore } from '@reduxjs/toolkit';


// // Use Redux-presist
// import {persistStore,persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react
// import wishlistdata from "./wishlistSlice"

// import cardReducer from "./cardslice";

// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, cardReducer,wishlistdata);

// const store= configureStore({
//     reducer:{
//       // mycard:cardReducer
//       mycard:persistedReducer,
//       mywishlist:persistedReducer
//     }
// })

// export default store;  

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';

// Use Redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react

import wishlistdata from "./wishlistSlice";
import cardReducer from "./cardslice";

// Persist configuration for cardReducer
const cardPersistConfig = {
  key: 'card',
  storage,
};

// Persist configuration for wishlistdata
const wishlistPersistConfig = {
  key: 'wishlist',
  storage,
};

// Persisted reducers
const persistedCardReducer = persistReducer(cardPersistConfig, cardReducer);
const persistedWishlistReducer = persistReducer(wishlistPersistConfig, wishlistdata);

// Configure the store
const store = configureStore({
  reducer: {
    mycard: persistedCardReducer,
    mywishlist: persistedWishlistReducer,
  },
});

export default store;

// Persistor for the store
export const persistor = persistStore(store);

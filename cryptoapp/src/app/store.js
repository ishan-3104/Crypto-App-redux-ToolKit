import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptonewApi } from "../services/CryptoNewApi";

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptonewApi.reducerPath] : cryptonewApi.reducer,
    },
})
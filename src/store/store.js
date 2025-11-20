import { configureStore } from "@reduxjs/toolkit";
import plansReducer from "../slices/planSlice"

export const store = configureStore({
    reducer: {
        plans: plansReducer,
    },
})
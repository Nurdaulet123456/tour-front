import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SystemReducer  from "./system/system.slice";


const combineReducer = combineReducers({
    system: SystemReducer
})

export const store = configureStore({
    reducer: combineReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })  
})

const {getState, dispatch} = store

export type RooteState = ReturnType<typeof getState>
export type AppDispatch = typeof dispatch
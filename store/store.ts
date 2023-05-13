import SystemReducer from './system/system.slice'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

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

const makeStore = () => {
    const store = configureStore({
        reducer: combineReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware({
                serializableCheck: false
            })
    })

    return store
}

export type RootState = ReturnType<typeof store.getState>
export type RootStore = ReturnType<typeof makeStore>
export type AppDispatcher = typeof store.dispatch
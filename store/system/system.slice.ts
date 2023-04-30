import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "axios";
import { systemInitialState, IUser } from "./system.store";
import { RooteState } from "../store";

export const getUser = createAsyncThunk(
    "getUser",
    async ({ token, axios }: { token: any, axios: Axios }) => (await axios.get('/api/v1/my_referrals', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })).data
)

const systemSlice = createSlice({
    name: "systemSlice",
    initialState: systemInitialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            getUser.fulfilled,
            (state, action: PayloadAction<IUser | undefined>) => {
                if (action.payload) {
                    return {
                        ...state,
                        profile: action.payload
                    }
                }
            }
        )
    }
})

export const profileSelector = (state: RooteState) => state.system
export default systemSlice.reducer
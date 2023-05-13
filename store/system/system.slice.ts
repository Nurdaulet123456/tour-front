import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { systemInitialState } from "./system.store";
import { IUser, IReferral } from "@/types/assets.type";
import { getUserThunk, getReferralThunk } from "./system.thunk";


const systemSlice = createSlice({
    name: "systemSlice",
    initialState: systemInitialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            getUserThunk.fulfilled,

            (state, { payload }: PayloadAction<IUser | undefined>) => {
                if (payload) {
                    return {
                        ...state,
                        profile: payload
                    }
                }
            }
        ).addCase(
            getReferralThunk.fulfilled,
            (state, { payload }: PayloadAction<IReferral | undefined>) => {
                if (payload) {
                    return {
                        ...state,
                        referral: payload
                    }
                }
            }
        )
    }
})


export const { actions } = systemSlice

export default systemSlice.reducer
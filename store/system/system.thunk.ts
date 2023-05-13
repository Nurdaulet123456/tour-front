import { createAsyncThunk } from "@reduxjs/toolkit";
import { assetsApi } from "api/assets.instance";

export const getUserThunk = createAsyncThunk(
    "getUserThunk",
    async ({token}: {token: string | undefined}) => (await assetsApi.getUser(token)) 
)

export const getReferralThunk = createAsyncThunk(
    "getReferralThunk",
    async ({token}: {token: string | undefined}) => (await assetsApi.getRefferallInfo(token))
)
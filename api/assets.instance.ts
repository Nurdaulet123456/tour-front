import { instance } from "./axios";
import { IUser, IReferral } from "types/assets.type";

export const assetsApi = {
    async getUser(token: string | undefined): Promise<IUser> {
        return instance.get('/api/v1/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    },

    async getRefferallInfo(token: string | undefined): Promise<IReferral> {
        return instance.get('/api/v1/my_referrals', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
}
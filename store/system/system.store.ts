import { IUser, IReferral } from "types/assets.type"

interface IStore { 
    profile?: IUser
    referral?: IReferral
}

export const systemInitialState: IStore = {
    profile: {},
    referral: {}
}


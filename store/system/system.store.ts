export interface IUser {
    "Line 1"?: IUserInfo[]
    "Line 2"?: IUserInfo[]
    "Line 3"?: IUserInfo[]
}

interface IUserInfo {
    ID?: number,
	CreatedAt?: string,
	UpdatedAt?: string,
	DeletedAt?: any,
	first_name?: string,
	last_name?: string,
	email?: string,
	role?: string,
	phone?: string,
	bank_uuid?: string,
	referral_code?: string
}

interface IState {
    profile?: IUser
}

export const systemInitialState: IState = {
    profile: {}
}
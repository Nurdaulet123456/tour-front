export interface IUser {
    ID?: number
    CreatedAt?: string
    UpdatedAt?: string
    DeletedAt?: any
    first_name?: string
    last_name?: string
    email?: string
    role?: string
    phone?: string
    bank_uuid?: string
    referral_code?: string
}

// Refferal 

export interface IReferral {
    "Line 1"?: ILine[]
    "Line 2"?: ILine[]
    "Line 3"?: ILine[]
}

interface ILine {
    ID?: number
    CreatedAt?: string
    UpdatedAt?: string
    DeletedAt?: any
    first_name?: string
    last_name?: string
    email?: string
    role?: string
    phone?: string
    bank_uuid?: string
    referral_code?: string
}
import { LoadingState } from "../../types";

export interface User {
    _id?: string
    email: string
    fullname: string
    username: string
    confirmed?: boolean
}

export interface AuthState {
    user: User | null
    loadingState: LoadingState
    registerLoadingState: LoadingState
    registeredUser: User | null
}
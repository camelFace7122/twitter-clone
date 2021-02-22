import { Action } from "redux"
import { ISignInFormData, ISignUpFormData } from "../../../components/SignIn/SignInTypes"
import { AuthState } from "./contracts"

export enum AuthActionsTypes {
    AUTH='auth/auth',
    SET_AUTH_LOADING_STATE='auth/SET_AUTH_LOADING_STATE',
    SET_AUTH_USER='auth/SET_AUTH_USER',
    REGISTER='auth/REGISTER',
    SET_REGISTER_LOADING_STATE='auth/SET_REGISTER_LOADING_STATE',
    SET_REGISTERED_USER='auth/SET_REGISTERED_USER'
}

export interface IAuthAction extends Action<AuthActionsTypes> {
    type: AuthActionsTypes.AUTH
    payload: ISignInFormData
}

interface ISetAuthLoadingStateAction extends Action<AuthActionsTypes> {
    type: AuthActionsTypes.SET_AUTH_LOADING_STATE
    payload: AuthState['loadingState']
}

interface ISetAuthUserAction extends Action<AuthActionsTypes> {
    type: AuthActionsTypes.SET_AUTH_USER
    payload: AuthState['user']
}

export interface IRegisterAction extends Action<AuthActionsTypes> {
    type: AuthActionsTypes.REGISTER
    payload: ISignUpFormData
}

interface ISetRegisteredUserAction extends Action<AuthActionsTypes> {
    type: AuthActionsTypes.SET_REGISTERED_USER
    payload: AuthState['registeredUser']
}

interface ISetRegisterLoadingStateAction extends Action<AuthActionsTypes> {
    type: AuthActionsTypes.SET_REGISTER_LOADING_STATE
    payload: AuthState['registerLoadingState']
}

export const authorize = (payload: ISignInFormData): IAuthAction => {
    return {
        type: AuthActionsTypes.AUTH,
        payload,
    }
}

export const setAuthUser = (payload: AuthState['user']): ISetAuthUserAction => {
    return {
        type: AuthActionsTypes.SET_AUTH_USER,
        payload,
    }
}

export const setAuthLoadingState = (payload: AuthState['loadingState']): ISetAuthLoadingStateAction => {
    return {
        type: AuthActionsTypes.SET_AUTH_LOADING_STATE,
        payload,
    }
}

export const register = (payload: ISignUpFormData): IRegisterAction => {
    return {
        type: AuthActionsTypes.REGISTER,
        payload
    }
}

export const setRegisterLoadingState = (payload: AuthState['registerLoadingState']): ISetRegisterLoadingStateAction => {
    return {
        type: AuthActionsTypes.SET_REGISTER_LOADING_STATE,
        payload
    }
}

export const setRegisteredUser = (payload: AuthState['registeredUser']): ISetRegisteredUserAction => {
    return {
        type: AuthActionsTypes.SET_REGISTERED_USER,
        payload
    }
}

export type AuthActions = IAuthAction | ISetAuthLoadingStateAction | ISetAuthUserAction | ISetRegisterLoadingStateAction | ISetRegisteredUserAction
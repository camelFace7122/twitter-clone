import { Action } from "redux"
import { AppState } from "./contracts"

export enum AppActionsTypes {
    INITIALIZE_APP='app/INITIALIZE_APP',
    SET_INITIALIZE_APP_LOADING_STATE='app/SET_INITIALIZE_APP_LOADING_STATE',
}

export interface IInitializeAppAction extends Action<AppActionsTypes> {
    type: AppActionsTypes.INITIALIZE_APP
}

export interface ISetInitializeAppLoadingStateAction extends Action<AppActionsTypes> {
    type: AppActionsTypes.SET_INITIALIZE_APP_LOADING_STATE,
    payload: AppState['loadingState']
}

export const initializeApp = (): IInitializeAppAction => {
    return {
        type: AppActionsTypes.INITIALIZE_APP,
    }
}

export const setInitializeAppLoadingState = (payload: AppState['loadingState']): ISetInitializeAppLoadingStateAction => {
    return {
        type: AppActionsTypes.SET_INITIALIZE_APP_LOADING_STATE,
        payload
    }
}

export type AppActions = IInitializeAppAction | ISetInitializeAppLoadingStateAction
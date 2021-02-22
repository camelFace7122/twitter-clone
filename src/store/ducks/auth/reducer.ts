import produce, { Draft } from 'immer';
import { LoadingState } from '../../types';
import { AuthActions, AuthActionsTypes } from './actionCreators';
import { AuthState } from './contracts';

const initialAuthState: AuthState = {
    user: null,
    loadingState: LoadingState.NEVER,
    registerLoadingState: LoadingState.NEVER,
    registeredUser: null
}

export const authReducer = produce((draft: Draft<AuthState>, action: AuthActions) => {
    switch (action.type) {
        case AuthActionsTypes.AUTH: 
            draft.loadingState = LoadingState.LOADING
            break;
        case AuthActionsTypes.SET_AUTH_LOADING_STATE: 
            draft.loadingState = action.payload
            break;
        case AuthActionsTypes.SET_AUTH_USER:
            draft.user = action.payload
            break;
        case AuthActionsTypes.SET_REGISTER_LOADING_STATE: 
            draft.registerLoadingState = action.payload
            break;
        case AuthActionsTypes.SET_REGISTERED_USER:
            draft.registeredUser = action.payload
            break;
    }   
}, initialAuthState)
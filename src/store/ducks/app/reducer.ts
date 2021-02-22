import produce, { Draft } from 'immer';
import { LoadingState } from '../../types';
import { AppActions, AppActionsTypes } from './actionCreators';
import { AppState } from './contracts';

const initialAppState: AppState = {
    loadingState: LoadingState.NEVER,
}

export const appReducer = produce((draft: Draft<AppState>, action: AppActions) => {
    switch (action.type) {
        case AppActionsTypes.INITIALIZE_APP: 
            draft.loadingState = LoadingState.LOADING
            break;
        case AppActionsTypes.SET_INITIALIZE_APP_LOADING_STATE: 
            draft.loadingState = action.payload
            break;
    }   
}, initialAppState)
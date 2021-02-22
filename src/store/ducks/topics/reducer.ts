import produce, { Draft } from 'immer';
import { LoadingState } from '../../types';
import { TopicsActions, TopicsActionsTypes } from './actionCreators';
import { TopicsState } from './contracts';

const initialTopicsState: TopicsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const topicsReducer = produce((draft: Draft<TopicsState>, action: TopicsActions) => {
    switch (action.type) {
        case TopicsActionsTypes.SET_TOPICS: 
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break;
        case TopicsActionsTypes.SET_TOPICS_LOADING_STATE:
            draft.loadingState = action.payload
            break;
        case TopicsActionsTypes.FETCH_TOPICS:
            draft.items = []
            // draft.loadingState = LoadingState.LOADING
            break;
    }   
}, initialTopicsState)
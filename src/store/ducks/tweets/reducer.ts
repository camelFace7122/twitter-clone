import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsTypes } from './actionCreators';
import { TweetsState, LoadingState } from './contracts';

const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
        case TweetsActionsTypes.SET_TWEETS: 
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break;
        case TweetsActionsTypes.SET_TWEETS_LOADING_STATE:
            draft.loadingState = action.payload
            break;
        case TweetsActionsTypes.FETCH_TWEETS:
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break;
    }   
}, initialTweetsState)
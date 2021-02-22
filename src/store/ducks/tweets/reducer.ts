import produce, { Draft } from 'immer';
import { LoadingState } from '../../types';
import { TweetsActions, TweetsActionsTypes } from './actionCreators';
import { TweetsState } from './contracts';

const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
    newTweetLoadingState: LoadingState.NEVER
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
        case TweetsActionsTypes.CREATE_NEW_TWEET:
            draft.newTweetLoadingState = LoadingState.LOADING
            break;
        case TweetsActionsTypes.SET_NEW_TWEET_LOADING_STATE: 
            draft.newTweetLoadingState = action.payload
            break;
    }   
}, initialTweetsState)
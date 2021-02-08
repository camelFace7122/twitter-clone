import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsTypes } from './actionCreators';
import { TweetsState, LoadingState, NewTweetLoadingState } from './contracts';

const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
    newTweetLoadingState: NewTweetLoadingState.NEVER
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
            draft.newTweetLoadingState = NewTweetLoadingState.LOADING
            break;
        case TweetsActionsTypes.SET_NEW_TWEET:
            draft.items.splice(0, 0, action.payload)
            draft.newTweetLoadingState = NewTweetLoadingState.NEVER
            break
    }   
}, initialTweetsState)
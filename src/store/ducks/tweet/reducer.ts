import produce, { Draft } from 'immer';
import { LoadingState } from '../../types';
import { FullTweetActions, FullTweetActionsTypes } from './actionCreators';
import { FullTweetState } from './contracts';

const initialFullTweetState: FullTweetState = {
    data: undefined,
    loadingState: LoadingState.NEVER
}

export const fullTweetReducer = produce((draft: Draft<FullTweetState>, action: FullTweetActions) => {
    switch (action.type) {
        case FullTweetActionsTypes.SET_FULL_TWEET: 
            draft.data = action.payload
            draft.loadingState = LoadingState.LOADED
            break;
        case FullTweetActionsTypes.SET_FULL_TWEET_LOADING_STATE:
            draft.loadingState = action.payload
            break;
        case FullTweetActionsTypes.FETCH_FULL_TWEET:
            draft.data = undefined
            draft.loadingState = LoadingState.LOADING
            break;
    }   
}, initialFullTweetState)
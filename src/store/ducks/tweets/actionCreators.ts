import { Action } from "redux"
import { TweetsState } from "./contracts"

export enum TweetsActionsTypes {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_TWEETS_LOADING_STATE = 'tweets/SET_TWEETS_LOADING_STATE'
}

interface SetTweetsActionInterface extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.SET_TWEETS
    payload: TweetsState['items']
}

interface FetchTweetsActionInterface extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.FETCH_TWEETS
}

interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.SET_TWEETS_LOADING_STATE,
    payload: TweetsState['loadingState']
}

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => {
    return {
        type: TweetsActionsTypes.SET_TWEETS,
        payload,
    }
}

export const fetchTweets = () => {
    return {
        type: TweetsActionsTypes.FETCH_TWEETS
    }
}

export const setTweetsLoadingState = (payload: TweetsState['loadingState']): SetTweetsLoadingStateActionInterface => {
    return {
        type: TweetsActionsTypes.SET_TWEETS_LOADING_STATE,
        payload,
    }
}

export type TweetsActions = SetTweetsActionInterface | FetchTweetsActionInterface | SetTweetsLoadingStateActionInterface
import { Action } from "redux"
import { FullTweetState } from "./contracts"

export enum FullTweetActionsTypes {
    SET_FULL_TWEET = 'tweets/SET_FULL_TWEET',
    FETCH_FULL_TWEET = 'tweets/FETCH_FULL_TWEET',
    SET_FULL_TWEET_LOADING_STATE = 'tweets/SET_FULL_TWEET_LOADING_STATE'
}

interface SetFullTweetActionInterface extends Action<FullTweetActionsTypes> {
    type: FullTweetActionsTypes.SET_FULL_TWEET
    payload: FullTweetState['data']
}

export interface FetchFullTweetActionInterface extends Action<FullTweetActionsTypes> {
    type: FullTweetActionsTypes.FETCH_FULL_TWEET
    payload: string
}

interface SetFullTweetLoadingStateActionInterface extends Action<FullTweetActionsTypes> {
    type: FullTweetActionsTypes.SET_FULL_TWEET_LOADING_STATE,
    payload: FullTweetState['loadingState']
}

export const setFullTweet = (payload: FullTweetState['data']): SetFullTweetActionInterface => {
    return {
        type: FullTweetActionsTypes.SET_FULL_TWEET,
        payload,
    }
}

export const fetchFullTweet = (payload: string): FetchFullTweetActionInterface => {
    return {
        type: FullTweetActionsTypes.FETCH_FULL_TWEET,
        payload,
    }
}

export const setFullTweetLoadingState = (payload: FullTweetState['loadingState']): SetFullTweetLoadingStateActionInterface => {
    return {
        type: FullTweetActionsTypes.SET_FULL_TWEET_LOADING_STATE,
        payload,
    }
}

export type FullTweetActions = SetFullTweetActionInterface | FetchFullTweetActionInterface | SetFullTweetLoadingStateActionInterface
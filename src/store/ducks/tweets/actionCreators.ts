import { Action } from "redux"
import { NewTweetLoadingState, Tweet, TweetsState } from "./contracts"

export enum TweetsActionsTypes {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_TWEETS_LOADING_STATE = 'tweets/SET_TWEETS_LOADING_STATE',
    CREATE_NEW_TWEET = 'tweets/CREATE_NEW_TWEET',
    SET_NEW_TWEET = 'tweets/SET_NEW_TWEET',
    SET_NEW_TWEET_LOADING_STATE = 'tweets/SET_NEW_TWEET_LOADING_STATE'
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

export interface CreateNewTweetActionInterface extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.CREATE_NEW_TWEET,
    payload: string
}

interface SetNewTweetActionInterface extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.SET_NEW_TWEET,
    payload: Tweet
}

interface SetNewTweetLoadingStateActionInterface extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.SET_NEW_TWEET_LOADING_STATE,
    payload: TweetsState['newTweetLoadingState']
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

export const createNewTweet = (payload: string): CreateNewTweetActionInterface => {
    return {
        type: TweetsActionsTypes.CREATE_NEW_TWEET,
        payload,
    }
}

export const setNewTweet = (payload: Tweet): SetNewTweetActionInterface => {
    return {
        type: TweetsActionsTypes.SET_NEW_TWEET,
        payload,
    }
}

export const setNewTweetLoadingState = (payload: NewTweetLoadingState): SetNewTweetLoadingStateActionInterface => {
    return {
        type: TweetsActionsTypes.SET_NEW_TWEET_LOADING_STATE,
        payload,
    }
}

export type TweetsActions = SetTweetsActionInterface | FetchTweetsActionInterface 
                            | SetTweetsLoadingStateActionInterface | CreateNewTweetActionInterface
                            | SetNewTweetActionInterface | SetNewTweetLoadingStateActionInterface
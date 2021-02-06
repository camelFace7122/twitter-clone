import { Action } from "redux"
import { TopicsState } from "./contracts"

export enum TopicsActionsTypes {
    SET_TOPICS = 'topics/SET_TOPICS',
    FETCH_TOPICS = 'topics/FETCH_TOPICS',
    SET_TOPICS_LOADING_STATE = 'topics/SET_TOPICS_LOADING_STATE'
}

interface SetTopicsActionInterface extends Action<TopicsActionsTypes> {
    type: TopicsActionsTypes.SET_TOPICS
    payload: TopicsState['items']
}

interface FetchTopicsActionInterface extends Action<TopicsActionsTypes> {
    type: TopicsActionsTypes.FETCH_TOPICS
}

interface SetTopicsLoadingStateActionInterface extends Action<TopicsActionsTypes> {
    type: TopicsActionsTypes.SET_TOPICS_LOADING_STATE,
    payload: TopicsState['loadingState']
}

export const setTopics = (payload: TopicsState['items']): SetTopicsActionInterface => {
    return {
        type: TopicsActionsTypes.SET_TOPICS,
        payload,
    }
}

export const fetchTopics = () => {
    return {
        type: TopicsActionsTypes.FETCH_TOPICS
    }
}

export const setTopicsLoadingState = (payload: TopicsState['loadingState']): SetTopicsLoadingStateActionInterface => {
    return {
        type: TopicsActionsTypes.SET_TOPICS_LOADING_STATE,
        payload,
    }
}

export type TopicsActions = SetTopicsActionInterface | FetchTopicsActionInterface | SetTopicsLoadingStateActionInterface
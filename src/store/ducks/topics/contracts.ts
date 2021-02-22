import { LoadingState } from "../../types";

export interface Topic {
    _id: string
    name: string
    tweetsCount: number
}

export interface TopicsState {
    items: Topic[]
    loadingState: LoadingState
}
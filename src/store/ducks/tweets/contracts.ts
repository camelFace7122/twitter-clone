import { LoadingState } from "../../types";

export interface Tweet {
    _id: string
    text: string
    mediaImg?: string
    mediaTag?: string
    commentsCount?: number
    retweetsCount?: number
    likeCount?: number
    createdAt: Date
    updatedAt: Date
    userPlatform: string
    user: {
        fullname: string
        username: string
        avatarUrl: string
        verified: boolean
    }
}

export interface TweetsState {
    items: Tweet[]
    loadingState: LoadingState
    newTweetLoadingState: LoadingState
}
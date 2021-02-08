export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export enum NewTweetLoadingState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Tweet {
    _id: string
    text: string
    mediaImg?: string
    mediaTag?: string
    commentsCount?: number
    retweetsCount?: number
    likeCount?: number
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
    newTweetLoadingState: NewTweetLoadingState
}
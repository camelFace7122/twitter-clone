export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface FullTweet {
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

export interface FullTweetState {
    data?: FullTweet,
    loadingState: LoadingState
}
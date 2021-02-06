export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Topic {
    _id: string
    name: string
    tweetsCount: number
}

export interface TopicsState {
    items: Topic[]
    loadingState: LoadingState
}
import { createSelector } from 'reselect'
import { State } from "../../store"
import { LoadingState } from '../../types'

const selectFullTweetState = (state: State) => state.fullTweet

export const selectFullTweetData = createSelector(selectFullTweetState, (fullTweetState) => fullTweetState.data)

export const selectFullTweetLoadingState = createSelector(selectFullTweetState, (fullTweetState) => fullTweetState.loadingState)

export const selectFullTweetIsLoading = createSelector(selectFullTweetState, (fullTweetState) => fullTweetState.loadingState === LoadingState.LOADING)
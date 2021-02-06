import { createSelector } from 'reselect'
import { State } from "../../store"
import { LoadingState } from './contracts'

const selectTweetsState = (state: State) => state.tweets

export const selectTweetsItems = createSelector(selectTweetsState, (tweetsState) => tweetsState.items)

export const selectTweetsLoadingState = createSelector(selectTweetsState, (tweetsState) => tweetsState.loadingState)

export const selectTweetsIsLoading = createSelector(selectTweetsState, (tweetsState) => tweetsState.loadingState === LoadingState.LOADING)
import { createSelector } from 'reselect'
import { State } from "../../store"
import { LoadingState } from '../../types'

const selectTopicsState = (state: State) => state.topics

export const selectTopicsItems = createSelector(selectTopicsState, (topicsState) => topicsState.items)

export const selectTopicsLoadingState = createSelector(selectTopicsState, (topicsState) => topicsState.loadingState)

export const selectTopicsIsLoading = createSelector(selectTopicsState, (topicsState) => topicsState.loadingState === LoadingState.LOADING)
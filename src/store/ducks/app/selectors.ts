import { createSelector } from 'reselect'
import { State } from "../../store"
import { LoadingState } from '../../types'


const selectAppState = (state: State) => state.app

export const selectAppLoadingState = createSelector(selectAppState, (appState) => appState.loadingState)

export const selectAppIsNever = createSelector(selectAppState, (appState) => appState.loadingState === LoadingState.NEVER)

export const selectAppIsLoading = createSelector(selectAppState, (appState) => appState.loadingState === LoadingState.LOADING)

export const selectAppIsLoaded = createSelector(selectAppState, (appState) => appState.loadingState === LoadingState.LOADED)

export const selectAppIsError = createSelector(selectAppState, (appState) => appState.loadingState === LoadingState.ERROR)
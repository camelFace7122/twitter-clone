import { createSelector } from 'reselect'
import { State } from "../../store"
import { LoadingState } from '../../types'


const selectAuthState = (state: State) => state.auth

export const selectAuthUser = createSelector(selectAuthState, (authState) => authState.user)

export const selectAuthLoadingState = createSelector(selectAuthState, (authState) => authState.loadingState)

export const selectAuthIsLoading = createSelector(selectAuthState, (authState) => authState.loadingState === LoadingState.LOADING)

export const selectAuthIsLoaded = createSelector(selectAuthState, (authState) => authState.loadingState === LoadingState.LOADED)

export const selectAuthIsError = createSelector(selectAuthState, (authState) => authState.loadingState === LoadingState.ERROR)

export const selectRegisteredUser = createSelector(selectAuthState, (authState) => authState.registeredUser)

export const selectRegisterLoadingState = createSelector(selectAuthState, (authState) => authState.registerLoadingState)

export const selectRegisterIsLoading = createSelector(selectRegisterLoadingState, (registerLoadingState) => (registerLoadingState) === LoadingState.LOADING)

export const selectRegisterIsLoaded = createSelector(selectRegisterLoadingState, (registerLoadingState) => (registerLoadingState) === LoadingState.LOADED)

export const selectRegisterIsError = createSelector(selectRegisterLoadingState, (registerLoadingState) => (registerLoadingState) === LoadingState.ERROR)
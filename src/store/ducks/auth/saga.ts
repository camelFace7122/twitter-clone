import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthApi } from '../../../api/AuthApi'
import { LoadingState } from '../../types'
import { AuthActionsTypes, setAuthLoadingState, setAuthUser, IAuthAction, IRegisterAction, setRegisteredUser, setRegisterLoadingState } from './actionCreators'

function* authRequest({payload}: IAuthAction) {
    try {
        const data = yield call(AuthApi.authorize, payload)
        const userData = data ? data.data : undefined
        console.log(data)
        if (userData) {
            yield put(setAuthUser(userData))
            window.localStorage.setItem('Authorization', `bearer ${data.token}`)
            yield put(setAuthLoadingState(LoadingState.LOADED)) 
        } else {
            yield put(setAuthUser(null))
            yield put(setAuthLoadingState(LoadingState.ERROR))
        }
    } catch (error) {
        yield put(setAuthUser(null))
        yield put(setAuthLoadingState(LoadingState.ERROR))
    }
}

function* registerRequest({payload}: IRegisterAction) {
    try {
        yield put(setRegisterLoadingState(LoadingState.LOADING)) 
        const data = yield call(AuthApi.register, payload)
        const userData = data ? data.data : undefined
        console.log(data) 
        if (userData) {
            yield put(setRegisteredUser(userData))
            yield put(setRegisterLoadingState(LoadingState.LOADED)) 
        } else {
            yield put(setRegisteredUser(null))
            yield put(setRegisterLoadingState(LoadingState.ERROR)) 
        }
    } catch (error) {
        yield put(setRegisteredUser(null))
        yield put(setRegisterLoadingState(LoadingState.ERROR)) 
    }
}

export function* authSaga() {
  yield takeLatest(AuthActionsTypes.AUTH, authRequest);
  yield takeLatest(AuthActionsTypes.REGISTER, registerRequest)
}
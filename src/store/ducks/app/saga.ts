import { call, put, takeLatest } from 'redux-saga/effects'
import { AppApi } from '../../../api/AppApi'
import { LoadingState } from '../../types'
import { setAuthUser } from '../auth/actionCreators'
import { AppActionsTypes, setInitializeAppLoadingState } from './actionCreators'

function* initializeAppRequest() {
    try {
        const data = yield call(AppApi.initialize)
        const userData = data ? data.data : undefined
        if (userData) {            
            yield put(setAuthUser(userData))
        } else {
            yield put(setAuthUser(null))
        }
        yield put(setInitializeAppLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setAuthUser(null))
        yield put(setInitializeAppLoadingState(LoadingState.ERROR))
    }
}

export function* appSaga() {
  yield takeLatest(AppActionsTypes.INITIALIZE_APP, initializeAppRequest);
}
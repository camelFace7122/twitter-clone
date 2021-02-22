import { call, put, takeLatest } from 'redux-saga/effects'
import { TopicsApi } from '../../../api/TopicsApi'
import { LoadingState } from '../../types'
import { TopicsActionsTypes, setTopicsLoadingState, setTopics } from './actionCreators'

export function* fetchTopicsRequest() {
    try {
        // const data = yield call(TopicsApi.fetchTopics)
        // yield put(setTopics(data))
    } catch (error) {
        yield put(setTopicsLoadingState(LoadingState.ERROR))
    }
}

export function* topicsSaga() {
  yield takeLatest(TopicsActionsTypes.FETCH_TOPICS, fetchTopicsRequest)
}
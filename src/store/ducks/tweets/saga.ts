import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../api/TweetsApi'
import { TweetsActionsTypes, setTweetsLoadingState, setTweets } from './actionCreators'
import { LoadingState } from './contracts'

export function* fetchTweetsRequest() {
    try {
        const data = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(data))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsTypes.FETCH_TWEETS, fetchTweetsRequest)
}
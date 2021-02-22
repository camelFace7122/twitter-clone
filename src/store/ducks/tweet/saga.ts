import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../api/TweetsApi'
import { LoadingState } from '../../types'
import { FullTweetActionsTypes, setFullTweetLoadingState, setFullTweet, FetchFullTweetActionInterface } from './actionCreators'

function* fetchFullTweetRequest({ payload: tweetId }: FetchFullTweetActionInterface ) {
    try {
        const data = yield call(TweetsApi.fetchFullTweet, tweetId)
        yield put(setFullTweet(data))
    } catch (error) {
        yield put(setFullTweetLoadingState(LoadingState.ERROR))
    }
}

export function* fullTweetSaga() {
  yield takeLatest(FullTweetActionsTypes.FETCH_FULL_TWEET, fetchFullTweetRequest)
}
import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../api/TweetsApi'
import { FullTweetActionsTypes, setFullTweetLoadingState, setFullTweet, FetchFullTweetActionInterface } from './actionCreators'
import { LoadingState } from './contracts'

function* fetchFullTweetRequest({ payload: tweetId }: FetchFullTweetActionInterface ) {
    try {
        const data = yield call(TweetsApi.fetchFullTweet, tweetId)
        yield put(setFullTweet(data[0]))
    } catch (error) {
        yield put(setFullTweetLoadingState(LoadingState.ERROR))
    }
}

export function* fullTweetSaga() {
  yield takeLatest(FullTweetActionsTypes.FETCH_FULL_TWEET, fetchFullTweetRequest)
}
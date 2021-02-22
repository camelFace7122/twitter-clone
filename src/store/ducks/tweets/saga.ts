import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../api/TweetsApi'
import { LoadingState } from '../../types'
import { TweetsActionsTypes, setTweetsLoadingState, setTweets, setNewTweetLoadingState, CreateNewTweetActionInterface } from './actionCreators'

function* fetchTweetsRequest() {
    try {
        const data = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(data))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

function* createNewTweetRequest({payload: text}: CreateNewTweetActionInterface) {
    try {
        const data = yield call(TweetsApi.createNewTweet, text)
        yield put(setTweets(data))
        yield put(setNewTweetLoadingState(LoadingState.NEVER))
    } catch (error) {
        yield put(setNewTweetLoadingState(LoadingState.ERROR))
    }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsTypes.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsTypes.CREATE_NEW_TWEET, createNewTweetRequest)
}
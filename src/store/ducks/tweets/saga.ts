import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../api/TweetsApi'
import { TweetsActionsTypes, setTweetsLoadingState, setTweets, setNewTweet, setNewTweetLoadingState, CreateNewTweetActionInterface } from './actionCreators'
import { LoadingState, NewTweetLoadingState } from './contracts'

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
        const newTweet = {
            _id: Math.random().toString(36),
            text,
            mediaImg: 'https://pbs.twimg.com/media/Esmp3ZjXcAIerim?format=jpg&name=large',
            commentsCount: 6,
            retweetsCount: 17,
            likeCount: 100,
            user: {
                fullname: 'Proper No. Twelve',
                username: 'ProperWhiskey',
                avatarUrl: 'https://pbs.twimg.com/profile_images/1234132860807852034/YUqrfkq7_400x400.jpg',
                verified: true
            }
        }
        const data = yield call(TweetsApi.createNewTweet, newTweet)
        yield put(setNewTweet(data))

    } catch (error) {
        yield put(setNewTweetLoadingState(NewTweetLoadingState.ERROR))
    }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsTypes.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsTypes.CREATE_NEW_TWEET, createNewTweetRequest)
}
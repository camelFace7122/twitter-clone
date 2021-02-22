import { all } from 'redux-saga/effects'
import { appSaga } from './ducks/app/saga'
import { authSaga } from './ducks/auth/saga'
import { topicsSaga } from './ducks/topics/saga'
import { fullTweetSaga } from './ducks/tweet/saga'
import { tweetsSaga } from './ducks/tweets/saga'

export default function* rootSaga() {
  yield all([
    tweetsSaga(),
    topicsSaga(),
    fullTweetSaga(),
    authSaga(),
    appSaga()
  ])
}
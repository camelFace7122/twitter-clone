import {applyMiddleware, compose, createStore} from 'redux';
import {combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import { tweetsReducer } from './ducks/tweets/reducer';
import { topicsReducer } from './ducks/topics/reducer';
import { fullTweetReducer } from './ducks/tweet/reducer';
import { TweetsState } from './ducks/tweets/contracts';
import { TopicsState } from './ducks/topics/contracts';
import { FullTweetState } from './ducks/tweet/contracts';

const rootReducer = combineReducers({
    tweets: tweetsReducer,
    topics: topicsReducer,
    fullTweet: fullTweetReducer
})

export type State = {
    tweets: TweetsState
    topics: TopicsState
    fullTweet: FullTweetState
}

const sagaMiddleware = createSagaMiddleware()

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))   

sagaMiddleware.run(rootSaga)
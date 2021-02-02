import produce, { Draft } from 'immer';
import { TweetsState, LoadingState } from './contracts';

const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

const tweetReducer = produce((draft: Draft<TweetsState>, action: any) => {
    
}, initialTweetsState)
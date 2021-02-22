import {axios} from '../core/axios'
import {AxiosResponse} from 'axios';
import { FullTweetState } from '../store/ducks/tweet/contracts';
import { TweetsState } from '../store/ducks/tweets/contracts';
import { defineUserPlatform } from '../utils/defineUserPlatform'

export const TweetsApi = {
    fetchTweets: async (): Promise<AxiosResponse<TweetsState['items']> | undefined> => {
        try {
            const data = await axios.get('/tweets');
            return data.data.data
        } catch (error) {
            console.error(error);
            throw new Error(error)
        }
    },
    fetchFullTweet: async (id: string): Promise<AxiosResponse<FullTweetState['data']> | undefined> => {
        try {
            const data = await axios.get(`/tweets/${id}`);
            return data.data.data
        } catch (error) {
            console.error(error);
            throw new Error(error)
        }
    },
    createNewTweet: async (payload: string): Promise<AxiosResponse<TweetsState['items']> | undefined> => {
        try {
            const userPlatform = defineUserPlatform()
            const data = await axios.post('/tweets', {text: payload, userPlatform})
            return data.data.data
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }
    }
}
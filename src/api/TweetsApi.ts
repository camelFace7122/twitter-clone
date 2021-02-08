import axios, {AxiosResponse} from 'axios';
import { FullTweetState } from '../store/ducks/tweet/contracts';
import { Tweet, TweetsState } from '../store/ducks/tweets/contracts';

export const TweetsApi = {
    fetchTweets: async (): Promise<AxiosResponse<TweetsState['items']> | undefined> => {
        try {
            const data = await axios.get('/tweets?_sort=id&_order=desc');
            console.log(data.data[1])
            return data.data
        } catch (error) {
            console.error(error);
        }
    },
    fetchFullTweet: async (id: string): Promise<AxiosResponse<FullTweetState['data']> | undefined> => {
        try {
            const data = await axios.get(`/tweets?_id=${id}`);
            return data.data
        } catch (error) {
            console.error(error);
        }
    },
    createNewTweet: async (newTweet: Tweet): Promise<AxiosResponse<Tweet> | undefined> => {
        try {
            const data = await axios.post('/tweets', newTweet)
            return data.data
        } catch (error) {
            console.log(error)
        }
    }
}
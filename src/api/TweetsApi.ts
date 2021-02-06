import axios, {AxiosResponse} from 'axios';
import { FullTweetState } from '../store/ducks/tweet/contracts';
import { TweetsState } from '../store/ducks/tweets/contracts';

export const TweetsApi = {
    fetchTweets: async (): Promise<AxiosResponse<TweetsState['items']> | undefined> => {
        try {
            const data = await axios.get('/tweets');
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
    }
}
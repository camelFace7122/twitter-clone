import axios, {AxiosResponse} from 'axios';
import { TopicsState } from '../store/ducks/topics/contracts';

export const TopicsApi = {
    fetchTopics: async (): Promise<AxiosResponse<TopicsState['items']> | undefined> => {
        try {
            const data = await axios.get('/topics');
            return data.data
        } catch (error) {
            console.error(error);
        }
    },
    
}
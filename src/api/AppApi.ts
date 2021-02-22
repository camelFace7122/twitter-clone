import axios from 'axios';
import { AuthState } from '../store/ducks/auth/contracts';

interface IResponse {
    status: 'success' | 'error',
    data?: AuthState['user'],
}

export const AppApi = {
    initialize: async (): Promise<IResponse | undefined> => {
        try {
            const data = await axios.get<IResponse>('/profile');
            console.log(data)
            return data.data
        } catch (error) {
            console.error(error);
        }
    },
}
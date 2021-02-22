import axios from 'axios';
import { ISignInFormData, ISignUpFormData } from '../components/SignIn/SignInTypes';
import { AuthState } from '../store/ducks/auth/contracts';

interface authorizeResponse {
    status: 'success' | 'error',
    data?: AuthState['user'],
    token?: string
}

interface registerResponse {
    status: 'success' | 'error'
    data?: AuthState['registeredUser'] 
}

export const AuthApi = {
    authorize: async (payload: ISignInFormData): Promise<authorizeResponse | undefined> => {
        try {
            const data = await axios.post<authorizeResponse>('/login', payload);
            return data.data
        } catch (error) {
            console.error(error);
        }
    },
    register: async (payload: ISignUpFormData): Promise<registerResponse | undefined> => {
        try {
            const data = await axios.post<registerResponse>('/users', payload);
            return data.data
        } catch (error) {
            console.log(error)
        }
    }
}
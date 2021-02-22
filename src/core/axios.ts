import axios from 'axios'

axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('Authorization')
    config.headers.Authorization = token;

    return config;
})

export {axios}
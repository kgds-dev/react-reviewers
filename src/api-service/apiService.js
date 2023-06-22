import axios from 'axios';

const apiService = axios.create({
    baseURL: 'https://express-js-reviewers.vercel.app/',
});

export default apiService;
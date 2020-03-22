import axios from 'axios';

const httpService = axios.create({
    baseURL: "" //__API__ ,
});

export {httpService}
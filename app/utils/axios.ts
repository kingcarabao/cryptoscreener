import axios from 'axios';
console.log(process.env.API_URL);
const localHttp = axios.create({
    baseURL: process.env.API_URL
})

localHttp.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || `Something went wrong: ${error}`)
);

export { localHttp };
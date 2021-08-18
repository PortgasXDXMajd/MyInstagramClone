import axios from "axios";

const base = 'https://oer.majdalkayyal.com';
const baseURL = 'https://api.weatherbit.io/v2.0';
const apiKey = 'a0384447-8725-4478-b8b9-16ef2995125f'


const api_service = axios.create({
    baseURL: baseURL,
    timeout: 5000,
});

const endpoints = {
    getImage: `/Image/get`,
    current:`/current`
}

export {api_service, endpoints} ;
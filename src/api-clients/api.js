import axios from 'axios'

class ApiClient {
    constructor() {
        if (!process.env.VUE_APP_API_BASEURL) {
            throw new Error('VUE_APP_API_BASEURL env variable is required for api connection');
        }

        this._axios = axios.create({
            baseURL: process.env.VUE_APP_API_BASEURL
        });
    }

    fetchLines() {
        return this._axios.get('/lines', {
            params: {
                $limit: 500
            }
        }).then(data => {
            return data;
        })
    }

}

const client = new ApiClient();

export default client;
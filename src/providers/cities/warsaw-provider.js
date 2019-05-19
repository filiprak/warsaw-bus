import CommuteProvider from "../commute-provider"
import axios from 'axios'

class WarsawCommuteProvider extends CommuteProvider {
    constructor() {
        super();

        if (!process.env.VUE_APP_WARSAW_API_ZTM_KEY) {
            throw new Error('VUE_APP_WARSAW_API_ZTM_KEY env variable is required for warsaw api connection');
        }

        this.api_key = process.env.VUE_APP_WARSAW_API_ZTM_KEY;

        this.cache = {};

        this._axios = axios.create({
            baseURL: 'https://api.um.warszawa.pl/api/',
            params: {
                resource_id: 'f2e5503e-927d-4ad3-9500-4ab9e55deb59',
                apikey: this.api_key
            },
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
    }

    fetchLines() {
        return this._axios.post('/action/busestrams_get', {}, {
            params: {
                type: 1
            }
        }).then(data => {
            console.log(data);
            return data;
        })
    }

}

export default WarsawCommuteProvider;
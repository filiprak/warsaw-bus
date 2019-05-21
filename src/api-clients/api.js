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
                $limit: 500,
            }
        }).then(response => response.data.data);
    }

    fetchPositions({ lines, brigade }) {
        const type1 = lines.filter(v => (v.type === 'bus'));
        const type2 = lines.filter(v => (v.type === 'tram' || v.type === 'train'));

        const type1Promise = type1.length > 0 ? this._axios.get('/positions', {
            params: {
                type: 1,
                line: type1.map(v => v.lineId),
                brigade: brigade
            }
        }) : [];

        const type2Promise = type2.length > 0 ? this._axios.get('/positions', {
            params: {
                type: 2,
                line: type2.map(v => v.lineId),
                brigade: brigade
            }
        }) : [];

        return Promise.all([type1Promise, type2Promise]).then(([type1res, type2res]) => {
            let type1data = Array.isArray(type1res.data) ? type1res.data : [];
            let type2data = Array.isArray(type2res.data) ? type2res.data : [];

            return type1data.concat(type2data);
        });
    }

}

const client = new ApiClient();

export default client;
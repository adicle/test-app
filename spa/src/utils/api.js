import axios from 'axios';

// Set API base url
const BASE_URL = 'http://api.test-app.test/api';
const BASE_CSRF_COOKIE = 'http://api.test-app.test/airlock/csrf-cookie';

class Api {

    /**
     *  Constructor
     * 
     * @constructor
     */
    constructor() {
        // Set up axios request with headers
        this.axios = axios.create({
            headers: {
                common: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        });
    }

    initiate() {
        return axios.get(BASE_CSRF_COOKIE);
    }

    /**
     * Send request to API through axios
     * 
     * @param {String} method 
     * @param {String} path 
     * @param {Object} data 
     */
    request(method, path, data = {}) {
        return this.axios[method](`${BASE_URL}/${path}`, data);
    }
    
}

export default new Api;
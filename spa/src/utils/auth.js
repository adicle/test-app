import Api from '@/utils/api.js';

class Auth {
    
    /**
     * Request authentication from API
     * 
     * @param {Object} payload 
     */
    login(payload) {
        // Return api request promise
        return Api.initiate().catch(() => {
            return Api.request('post', 'auth/login', payload);
        });
    }

}

export default new Auth;
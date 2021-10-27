import vuex from  'vuex';
import auth from './modules/auth';

const store = new vuex.Store({
    modules: {
        auth
    }
});

export default store;
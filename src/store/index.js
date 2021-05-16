import Vue from 'vue'
import VueToast from 'vue-toast-notification';
import Vuex from 'vuex'

import actions from './actions'
import config from './config'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);
Vue.use(VueToast);

export default new Vuex.Store({
    state: {
        packageVersion: process.env.PACKAGE_VERSION || '0.0.0',
    },
    modules: {
        config
    },
    getters,
    mutations,
    actions
});

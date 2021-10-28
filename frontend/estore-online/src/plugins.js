import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(Loading)
Vue.use( VueToast );
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
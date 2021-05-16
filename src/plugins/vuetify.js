import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib';

// vue-toast-notification
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast, {
  duration: 3000,
});


Vue.use(Vuetify,{
  components: {
    VSnackbar,
    VBtn,
    VIcon,
  }
});

export default new Vuetify({
  theme: {
    themes: {
      dark: {

      }
    }
  },
  icons: {
    iconfont: 'mdi',
  },
});

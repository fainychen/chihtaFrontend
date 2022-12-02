import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false

import '@/assets/css/Main.css'
import '@/assets/icomoon/style.css'

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC-U-a8MbyizbkPO6xO3OF6By9obayf2JQ',
    libraries: 'places', 
    language: 'en',
  },
  installComponents: true
},)
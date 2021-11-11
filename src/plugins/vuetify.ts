import Vue from 'vue';
import Vuetify, { VApp, VTextField } from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import 'typeface-roboto/index.css';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#ffd300',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  components: {
    VTextField,
    VApp
  }
});

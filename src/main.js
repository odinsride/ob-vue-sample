// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router } from './_helpers'
import { store } from './_store'
//import 'materialize-css'
import  '../node_modules/materialize-css/dist/css/materialize.min.css'
import  '../node_modules/materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

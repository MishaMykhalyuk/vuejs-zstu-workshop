import Vue from 'vue'
import App from './App'
import store from './store/index.js'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})

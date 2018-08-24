import Vue from 'vue'
import App from './App.vue'

//import "chart.js"
//import "vue-chartjs"
//Vue.use(window.VueCharts)
//Vue.use(VueCharts)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

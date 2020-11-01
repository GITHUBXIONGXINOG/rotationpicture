import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入css样式
import '@/assets/css/reset.css'
import '@/assets/css/style.scss'
//导入iconfont样式
import '@/assets/css/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

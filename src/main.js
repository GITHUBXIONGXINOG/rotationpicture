import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入css样式
import '@/assets/css/reset.css'
import '@/assets/css/style.scss'
//导入iconfont样式
// import '@/assets/css/icon/inconfont.css'
import '@/assets/icon/iconfont'
import http from "@/http";
Vue.prototype.$http = http
Vue.config.productionTip = false
import '@/assets/css/style.scss'
import '@/assets/css/rotation.scss'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import extend from './utils/extend'

Vue.config.productionTip = false

Vue.use(extend)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
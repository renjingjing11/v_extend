/**
 * 效果：利用extend 不论在那个页面都可以使用this.$showCom
 * 1.首先在main.js 引入并挂载到Vue.use
 * 2.在需要的组件直接this.$showCom
 * 3.在extend组件直接抛出一个install方法即可
 */

export default {
    install(Vue) {
        // console.log(Vue)

        function showLog() {
            let Dom = Vue.extend({
                template: `
                <div>这是利用extend组件</div>
                `
            })
            let newDom = new Dom()
            let bestDom = newDom.$mount('#child')

            // appendChild()传入的是一个对象
            document.body.appendChild(bestDom.$el)
        }
        Vue.prototype.$showCom = showLog
    }
}
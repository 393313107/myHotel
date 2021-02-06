import Vue from 'vue'
import layer from './myLayer.vue'

const myLayer = Vue.extend(layer)

function showLayer(text, time = 2000) {
    const layerDom = new myLayer({
        data() {
            return {
                text: text
            }
        }
    }).$mount()
    console.log(layerDom)
    document.body.appendChild(layerDom.$el)
    // setTimeout(() => {
    //     layerDom.show = false
    // }, 1000);
}

function registryLayer() {
    Vue.prototype.$myLayer = showLayer
}

export default registryLayer

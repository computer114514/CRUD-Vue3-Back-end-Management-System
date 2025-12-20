import { createApp } from 'vue'
import { createPinia } from 'pinia'
import elementPlus from "element-plus"
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from "@element-plus/icons-vue"//全局引入图标

const app = createApp(App)

for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
    //app.components全局注册组件
}//这是在全局注册图标,采用forof循环


app.use(createPinia())
app.use(router)
app.use(elementPlus)
app.mount('#app')

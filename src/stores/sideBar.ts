// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
import {defineStore} from "pinia"

export const useSideBarStore=defineStore("sidebar",{
    state:()=>{
        return {
            collapse:false
        }    
    },
    getters:{},
    actions:{
        handleCollapse(){
            this.collapse=!this.collapse
        }
    }
})
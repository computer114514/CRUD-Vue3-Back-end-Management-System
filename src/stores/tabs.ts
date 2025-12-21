import {defineStore} from "pinia"

interface ListItem{
  name:string;
  path:string;
  title:string;
  //这都是干啥的?
}

export const useTabsStore=defineStore("tabs",{
    state:()=>{
        return {
            list:<ListItem[]>[]
        }
    },
    getters:{

    },
    actions:{
      setTagItem(data:ListItem){
        this.list.push(data);
        //在store里不要用箭头函数,不然就会this报错，因为this没有this，无法自动绑定
      },
      delTagItem(index:number){
        this.list.splice(index,1)
        console.log("删除之后list的样子",this.list)
      }
    }
})

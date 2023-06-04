import Mock from 'mockjs' 
import {manager} from "./manager.js"

let data = Mock.mock({
  "data|1000": [ //生成n条数据 数组
    {
      "name": "@ctitle(2)", //生成data.name，长度为2个汉字
      "age|18-30": 2,//年龄
      "manager|1": manager,//管理
    }
  ]
})
Mock.mock(/data/, 'post', () => { 
    return data
})

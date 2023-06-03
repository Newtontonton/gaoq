// const Mock = require("mockjs");
import Mock from 'mockjs' 
let data = Mock.mock({
  "data|100": [ //生成n条数据 数组
    {
      "name": "@ctitle(2)", //生成data.name，长度为2个汉字
      "age|18-30": 2,//年龄
      "manager": "@ctitle(2,4)",//管理
    }
  ]
})
Mock.mock(/data/, 'post', () => { 
    return data
})
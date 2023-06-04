import Mock from 'mockjs' 
import axios from 'axios'

let manager6 = Mock.mock({
  "manager|600":[//公司员工600人
    {
      "name":"@ctitle(2,3)",
      "photo":"",
    }
  ]
})
Mock.mock(/manager/, 'post', () => { 
  return manager6
})


const manager600 = await axios.post("http://localhost:8080/manager")
const manager = manager600.data.manager.map((value,index,self)=>{
  return value.name
})
export {
  manager
}
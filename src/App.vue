<template>
  <div class="grid-container"> 
    <div v-for="(item,index) in dataInfo" key="">
      <input type="text" v-model="item.name">
      <input type="text" v-model="item.age">
      <input type="text" list="itemlist" v-model="item.manager">
        <datalist id="itemlist">
          <option v-for="(item,index) in managerInfo" key="">{{ item.name }}</option>
        </datalist>
    </div>
  </div>
</template>


<script setup>
import axios from "axios"
import { onMounted, ref } from "vue";

const dataInfo = ref([]);
const managerInfo = ref([]);

const getDataInfo = async ()=>{
  const data = await axios.post("http://localhost:8080/data")
  dataInfo.value = data.data.data;
  managerInfo.value = dataInfo.value.map(value=>{
    return {name:value.manager}
  })

  managerInfo.value = managerInfoResult(managerInfo.value);
};
/**
 * TO DO
 * 由于mock数据manager.js中用到了顶级await。多次引入manager.js可能会有问题。
 * 所以此处managerInfo拿不到600名员工名字，仅是对1000条数据的manager进行了遍历，去重
 * 如果将mock模拟数据代码都放在APP.vue文件内或许可以一试。
 */
const managerInfoResult = (ARR) => {
  for (let i = 0; i < ARR.length; i++) {
    for (let j = i + 1; j < ARR.length; j++) {
      if (ARR[i].name == ARR[j].name) {
        ARR.splice(j, 1);
        j--;
      };
    };
  };
  return ARR;
};

onMounted(() => {
  getDataInfo();
})
</script>

<style scoped lang="scss">
  .grid-container{
    display: grid;
    border: solid 1px black;
    height: auto;
    width: 100%;
    grid-template-rows:repeat(1000,40px);
    grid-template-columns: 100%;
    input{
      width: 32%;
      height: 100%;
    }
  }
</style>




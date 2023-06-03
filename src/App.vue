<template>
  <div class="grid-container"> 
    <div v-for="(item,index) in dataInfo" key="">
      <input type="text" v-model="item.name">
      <input type="text" v-model="item.age">
      <input type="text" list="itemlist" v-model="item.manager">
        <datalist id="itemlist">
          <option v-for="(item,index) in manager" key="index">{{ item.name }}</option>
        </datalist>
    </div>
  </div>
</template>
<script setup>
import axios from "axios"
import { onMounted, ref } from "vue";

const dataInfo = ref([]);
const manager = ref([]);
const getDataInfo = async()=>{
  const data = await axios.post("http://localhost:8080/data")
  dataInfo.value = data.data.data;
  manager.value = dataInfo.value.map((value,index,self)=>{
    return {name:value.manager}
  })
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
    width: 800px;
    grid-template-rows:100px 100px 100px;
    grid-template-columns: 100%;
  }
  input{
    width: 32%;
    height: 100%;
  }
</style>

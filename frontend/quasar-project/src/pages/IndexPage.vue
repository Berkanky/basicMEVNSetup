<template>
<div>
  <q-input
    v-on:keyup.enter="sendData"
    v-model="this.testData.name" label="Test"></q-input>
  <p>
    {{ this.testData.name ? this.testData.name : 'Enter name' }}
  </p>
</div>
</template>

<script>
import axios from 'axios';
import { useCounterStore } from 'src/stores/store';
export default {
  setup(){
    const store = useCounterStore()
    return{
      store
    }
  },
  data:function(){
    return{
      testData:{}
    }
  },
  methods:{
    sendData(){
      const allBody = {
        testData:this.testData
      }

      axios.post(`${this.store.baseUrl}/app/sendTest`, allBody)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>

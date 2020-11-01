<template>
  <div id="parent">
    <son1 :sdata = "pdata"></son1>
  </div>
</template>

<script>
import son1 from './base12.vue'

export default {
  name: 'parent',
  components: {
    son1
  },
  data(){
      return{
          pdata: [
        {
          name: '1',
          label: 'root',
          link: 'https://www.baidu.com',
          children:[
            {
              name: '1-1', 
              label: 'test',
              children:[
                {name: '1-1-1', children:[]},
                {name: '1-1-2', children:[]},
                {name: '1-1-3', children:[]}
              ]
            },
            {name: '1-2', children:[]},
            {name: '1-3', children:[]},
            {name: '1-4', children:[]},
          ]},
        {name: '2', children:[
          {name: '2-1', children:[]},
        ]},
      ],
      }
  }
}
</script>

<style>

</style>

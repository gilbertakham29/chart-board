<template>
  <canvas id="scatter-chart"></canvas>
</template>

<script>
import { Chart } from 'chart.js/auto';

  export default {
    mounted(){
      const data = {
  datasets: [{
    label: 'Scatter Dataset 1',
    data: [{
      x: -2,
      y: 4
    }, {
      x: -1,
      y: 1
    }, {
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 1
    },
  {
    x:2,
    y:4
  }],
    backgroundColor: 'rgb(255, 99, 132)'
  },{
    label:'Scatter Dataset 2',
    data:[
    {
      x: -2,
      y: -4
    }, {
      x: -1,
      y: -1
    }, {
      x: 0,
      y: 1
    }, {
      x: 1,
      y: -1
    },
  {
    x:2,
    y:-4
  }
    ],
    backgroundColor:"#88ccfc"
  }],
};
const ctx = document.getElementById('scatter-chart')
const myChart = new Chart(ctx,{
  type: 'scatter',
  data: data,
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  }
})
    }
  }
</script>

<style lang="scss" scoped>

</style>
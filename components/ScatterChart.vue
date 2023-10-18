<template>
  <canvas id="scatter-chart"></canvas>
</template>

<script>
import { Chart } from 'chart.js/auto';
import chartData from '../chart-data.json'
  export default {
    mounted(){
      const data = {
  datasets: [{
    label: chartData.scatterchart.labels[0].label1,
    data: [{
      x: chartData.scatterchart.values.value1[0].x,
      y: chartData.scatterchart.values.value1[0].y
    }, {
      x:chartData.scatterchart.values.value1[1].x,
      y: chartData.scatterchart.values.value1[1].y
    }, {
      x: chartData.scatterchart.values.value1[2].x,
      y: chartData.scatterchart.values.value1[2].y
    }, {
      x: chartData.scatterchart.values.value1[3].x,
      y: chartData.scatterchart.values.value1[3].y
    },
  {
    x:chartData.scatterchart.values.value1[4].x,
    y:chartData.scatterchart.values.value1[4].y
  }],
    backgroundColor: 'rgb(255, 99, 132)'
  },{
    label:chartData.scatterchart.labels[0].label2,
    data:[{
      x: chartData.scatterchart.values.value2[0].x,
      y: chartData.scatterchart.values.value2[0].y
    }, {
      x:chartData.scatterchart.values.value2[1].x,
      y: chartData.scatterchart.values.value2[1].y
    }, {
      x: chartData.scatterchart.values.value2[2].x,
      y: chartData.scatterchart.values.value2[2].y
    }, {
      x: chartData.scatterchart.values.value2[3].x,
      y: chartData.scatterchart.values.value2[3].y
    },
  {
    x:chartData.scatterchart.values.value2[4].x,
    y:chartData.scatterchart.values.value2[4].y
  }],
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
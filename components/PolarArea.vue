<template>
    <canvas id="polar-area"></canvas>
</template>

<script>
import { Chart } from 'chart.js/auto';
import chartData from '../chart-data.json'
    export default {
        mounted(){
            const data = {
  labels: chartData.polarchart.labels,
  datasets: [{
    label: 'My First Dataset',
    data: chartData.polarchart.values,
    backgroundColor: [
      "#f5d5df",
      "#d1c9cb"
    ]
  }]
};
const ctx = document.getElementById('polar-area')
const myChart = new Chart(ctx,{
    type: 'polarArea',
  data: data,
  options: {}
})
        }   
    }
</script>

<style lang="scss" scoped>

</style>
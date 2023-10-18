<template>
<canvas id="linechart"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'
import chartData from '../chart-data.json';
export default {
   mounted(){
 

const data = {
    labels:chartData.linchart.labels,
  datasets: [{
   
    label: 'Dataset 1',
    data: chartData.linchart.values1,
    fill: false,
    borderColor: '#f794ab',
    tension: 0.5
  },
  {
   
   label: 'Dataset 2',
   data: chartData.linchart.values2,
   fill: false,
   borderColor: 'aqua',
   tension: 0.5
 }]
}; 

    const ctx = document.getElementById('linechart')
    const myChart = new Chart(ctx,{
        type: 'line',
        data: data,

    })
    
}

}

</script>

<style  scoped>

</style>
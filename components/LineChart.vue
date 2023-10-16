<template>
<canvas id="linechart"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
   mounted(){
 

const data = {
    labels:['January','February','March','April','May','June','July'],
  datasets: [{
   
    label: 'Dataset 1',
    data: [40, 20, 12, 56, 10, 30, 25, 56],
    fill: false,
    borderColor: '#f794ab',
    tension: 0.5
  },
  {
   
   label: 'Dataset 2',
   data: [10, 30, 25, 56, 78, 18, 29],
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
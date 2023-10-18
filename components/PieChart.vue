<template>
        <canvas id="piechart"></canvas>

</template>

<script>
import Chart from 'chart.js/auto'
import chartData from '../chart-data.json'
export default {
 
    mounted(){
        const data = {
  labels: chartData.piechart.labels,
  datasets: [{
    label: 'My First Dataset',
    data: chartData.piechart.values,
    backgroundColor: [
      '#f794ab',
      'grey',
      'aqua',
      'pink',
      'dark-pink'
    ],
    hoverOffset: 4
  }]
};
        const ctx = document.getElementById('piechart')
        const myChart = new Chart(ctx,{
            type: 'pie',
            data: data,
        })

    }




}
</script>

<style scoped>

</style>
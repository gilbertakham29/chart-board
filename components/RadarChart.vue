<template>
    <canvas id="radar-chart"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'
import chartData from '../chart-data.json'
    export default {
        mounted(){
            const data = {
  labels: chartData.radarchart.labels,
  datasets: [{
    label: 'My First Dataset',
    data: chartData.radarchart.values[0].value1,
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: chartData.radarchart.values[0].value2,
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

const ctx = document.getElementById('radar-chart')
const myChart = new Chart(ctx,{
    type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
})
        }
    }
</script>

<style lang="scss" scoped>

</style>
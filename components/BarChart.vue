<template>
    <canvas id="barchart"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'
import chartData from '../chart-data.json'
export default {
    mounted(){
        const data = {
  labels: chartData.barchart.labels,
  datasets: [{
    label: 'Dataset 1',
    data: chartData.barchart.values,
    backgroundColor: [
      '#e588f7',
    ],
    borderColor: [
      '#e588f7',
    ],
    borderWidth: 1,
    hoverBackgroundColor:"#da4af7",
    hoverBorderColor:"#da4af7"
  }]
};


        const ctx = document.getElementById('barchart')
    const myChart = new Chart(ctx,{
        type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },

    })
    }
}
</script>

<style  scoped>

</style>
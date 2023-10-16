<template>
    <canvas id="barchart"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'
export default {
    mounted(){
        const data = {
  labels: ['January','February','March','April','May','June','July'],
  datasets: [{
    label: 'Dataset 1',
    data: [40, 20, 12, 10, 30, 25, 56],
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
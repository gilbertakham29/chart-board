<template>
        <canvas id="piechart"></canvas>

</template>

<script>
import Chart from 'chart.js/auto'
export default {
 
    mounted(){
        const data = {
  labels: [
  'Samsung',
    'IPhone',
    'Realme',
    'Oppo',
    'Infix'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100,200,170,45],
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
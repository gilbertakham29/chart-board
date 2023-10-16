<template>
    <canvas id="dochart"></canvas>

</template>

<script>
import { Doughnut } from 'vue-chartjs'
import Chart from 'chart.js/auto';

export default {
  extends: Doughnut,
  
  mounted() {
    const ctx = document.getElementById('dochart');
    const data = {
    
  labels: [
    'Food',
    'Tech',
    'News',
    'Health',
    'Shopping'
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
    
    options: {
      plugins: {
      legend: {
        title: {
          display: true,
          text: 'Legend Title',
        
        },
      
      }
    }
  }
  
    
  },
  
]

};

    const myChart = new Chart(ctx,{
      type: 'doughnut',
  data: data,
    }
    )
  },

}
</script>

<style  scoped>

</style>
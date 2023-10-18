<template>
    <canvas id="dochart"></canvas>

</template>

<script>
import Chart from 'chart.js/auto';
import chartData from "../chart-data.json"
export default {
  
  
  mounted(){

    const data = {
    
    labels: chartData.doughnut.lables,
    datasets: [{
      
      label: 'My First Dataset',
      data: chartData.doughnut.values,
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

  const ctx = document.getElementById('dochart');
  const myChart = new Chart(ctx,{
      type: 'doughnut',
  data: data,
    })
    
  }

}


</script>

<style  scoped>

</style>
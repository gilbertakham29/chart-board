<template>
    <canvas id="bubblechart"></canvas>
</template>

<script>
import { Chart } from 'chart.js/auto';
import chartData from "../chart-data.json"
    export default {
        
        mounted(){

            const data = {
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: chartData.bubbleChart.values[0].x,
      y: chartData.bubbleChart.values[0].y,
      r: chartData.bubbleChart.values[0].r
    }, {
      x: chartData.bubbleChart.values[1].x,
      y: chartData.bubbleChart.values[1].y,
      r: chartData.bubbleChart.values[1].r
    },
    
],
    
    backgroundColor: 'rgb(255, 99, 132)'
  },
  {
    label:'Second Dataset',
    data:[{
        
      x: 15,
      y: 8,
      r: 30,
      
    },
    {
      x: 20,
      y: 20,
      r: 10
    },
    {
      x: 20,
      y: 25,
      r: 5
    }
    ],
    backgroundColor:'violet'
  }
]
};
            const ctx = document.getElementById('bubblechart')
            const myChart = new Chart(ctx,{
                type: 'bubble',
  data: data,
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  }
            })
        }
    }
</script>

<style scoped>

</style>
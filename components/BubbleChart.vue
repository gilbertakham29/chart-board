<template>
    <canvas id="bubblechart"></canvas>
</template>

<script>
import { Chart } from 'chart.js/auto';

    export default {
        
        mounted(){

            const data = {
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 10,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
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
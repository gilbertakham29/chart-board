<template>
    <canvas id="scatterchart"></canvas>
</template>

<script >
import { Chart } from 'chart.js/auto';

export default{
    methods(){
        const data = {
  datasets: [{
    label: 'Scatter Dataset 1',
    data: [{
      x: -2,
      y: 4
    }, {
      x: -1,
      y: 1
    }, {
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 1
    },{
        x:2,
        y:4
    }],
    backgroundColor: 'rgb(255, 99, 132)',
  },],
};

        const ctx = document.getElementById('scatterchart')
        const myChart = new Chart(ctx,{
            type: 'scatter',
  data: data,
  
      })
    }
}
</script>

<style  scoped>

</style>
<template>
    <canvas id="polar-area"></canvas>
</template>

<script>
import { Chart } from 'chart.js/auto';

    export default {
        mounted(){
            const data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Desiging',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [10,20,32,70,25,60,74,18,89,70],
    backgroundColor: [
      "#f5d5df",
      "#d1c9cb"
    ]
  }]
};
const ctx = document.getElementById('polar-area')
const myChart = new Chart(ctx,{
    type: 'polarArea',
  data: data,
  options: {}
})
        }   
    }
</script>

<style lang="scss" scoped>

</style>
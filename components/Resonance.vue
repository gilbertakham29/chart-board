<template>
    <canvas id="reso-chart"></canvas>

</template>

<script>
import Chart from 'chart.js/auto'
import chartData from '../chart-data.json'
import chart from '~/plugins/chart';
export default {

mounted(){
    const data = {
labels: chartData.resocahrt.labels,
datasets: [{
label: 'My First Dataset',
data: chartData.resocahrt.values,
backgroundColor: [
  '#f794ab',
  '#fac0c9',
  'aqua',
  '#bfb8b9',

],
hoverOffset: 4
}]
};
    const ctx = document.getElementById('reso-chart')
    const myChart = new Chart(ctx,{
        type: 'pie',
        data: data,
    })

}




}
</script>

<style scoped>

</style>
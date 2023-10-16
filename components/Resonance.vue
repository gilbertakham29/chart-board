<template>
    <canvas id="reso-chart"></canvas>

</template>

<script>
import Chart from 'chart.js/auto'
export default {

mounted(){
    const data = {
labels: [
'Creative A',
'Creative B',
'Creative C',
'Creative D',

],
datasets: [{
label: 'My First Dataset',
data: [24,26,28,45],
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
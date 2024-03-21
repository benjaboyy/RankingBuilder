<template>
  <div class="radarContainer">
    <Radar
        id="my-chart-id"
        :data="data"
        :options="options" />
  </div>
</template>

<script lang="ts">
import { Radar } from 'vue-chartjs'

import {
  Chart as ChartJS,

  RadarController,
  LineElement,
  PointElement,
  RadialLinearScale
} from 'chart.js'

ChartJS.register(RadarController, LineElement, PointElement, RadialLinearScale)

export default {
  name: 'RadarChart',
  components: {
    Radar // Register Radar component locally
  },
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    },
    dataSet: {
      type: Array,
      default: () => [4, 2, 3, 1, 5]
    },
    labels: {
      type: Array,
      default: () => ['A', 'B', 'C', 'D', 'E']
    }
  },
  data() {
    return {
      data: {
        labels: this.labels,
        datasets: [{ data: this.dataSet, backgroundColor: 'rgba(255, 99, 132, 0.2)' }]
      },
      options: {
        scales: {
          r: {
            suggestedMin: this.min,
            suggestedMax: this.max,
            ticks: {
              stepSize: this.max / 2
            },
            grid: {
              color: 'rgb(119,41,83)',
              lineWidth: 1,
              circular: true,
              borderColor: 'rgb(119,41,83)',
              borderDash: [5, 5],
              borderDashOffset: 5,
              drawBorder: true,
              drawOnChartArea: true,
              drawTicks: false,
              tickMarkLength: 10,

            }
          }
        },
        datasets: {
          radar: {
            fill: true,
            backgroundColor: 'rgb(233,84,32)',
            borderColor: 'rgb(233,84,32)',
            pointBackgroundColor: 'rgb(233,84,32)',
            pointHoverBorderColor: 'rgb(233,84,32)'
          }
        },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          },
          labels: {
            display: false
          }
        },
        responsive: true,
        maxWidth: 100,
        display: false,
      }
    }
  }
}
</script>


<style scoped>
.radarContainer {
  position: relative;
  margin: auto;
  height: 100%;
  max-height: 250px;
  width: 50vw;
  max-width: 100%;
}
</style>
<template>
  <div class="small">
    <pie-chart :chartData="datacollection"></pie-chart>
    <!-- <chartjs-pie :labels="labels" :data="dataset" :bind="true"></chartjs-pie> -->
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import PieChart from "./PieChart.js"
export default {
  components: {
    PieChart
  },
  data () {
    return {
      datacollection: 0
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ["qwe","asd","zxc"],
        datasets: [
        {
          label: "hola",
          backgroundColor: '#f87979',
          data: [this.getRandomInt(), 45, this.getRandomInt()]
        },
        {
          label: 'feo',
          backgroundColor: '#f83000',
          data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt()]
        }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
  // import LineChart from './LineChart.js'
  // export default {
  //   components: {
  //     LineChart
  //   },
  //   data () {
  //     return {
  //       datacollection: null
  //     }
  //   },
  //   mounted () {
  //     this.fillData()
  //   },
  //   methods: {
  //     fillData () {
  //       this.datacollection = {
  //         labels: [this.getRandomInt(), this.getRandomInt(),"asd"],
  //         datasets: [
  //           {
  //             label: 'Data One',
  //             backgroundColor: '#f87979',
  //             data: [this.getRandomInt(), 45, this.getRandomInt()]
  //           }, {
  //             label: 'Data One',
  //             backgroundColor: '#f83000',
  //             data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt()]
  //           }
  //         ]
  //       }
  //     },
  //     getRandomInt () {
  //       return Math.floor(Math.random() * (50 - 5 + 1)) + 5
  //     }
  //   }
  // }
</script>

<style>
  /* .small {
    max-width: 600px;
    margin:  150px auto;
  } */
</style>
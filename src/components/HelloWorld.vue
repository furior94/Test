<template>
  <div class="small">
    <h1 id="demo"></h1>
    <pie-chart v-if="!loading" :chartData="datacollection"></pie-chart>
    <!-- <chartjs-pie :labels="labels" :data="dataset" :bind="true"></chartjs-pie> -->
  </div>
</template>

<script>
const axios = require('axios');
var nbots = 80;
window.onload = function() {
            what();
            function what(){
                document.getElementById('demo').innerHTML = 'Top ' + nbots + " bots by Vote_Usd";
            };
        }
var input = [];
var output = [];
var Voteusd = [];
var Name = []
function test () {
  return [1,2,3,4,5,6,7]
}
function getData() {
  return new Promise(function(resolve, reject) {
    axios.get("https://steembottracker.net/bid_bots")
    .then((response)=> {
      let input = response.data
      // console.log(input)
      input.sort(function(a, b){return b.vote_usd - a.vote_usd})
      for (var i = 0; i < nbots; i ++) {
        output.push(input[i])
        Voteusd.push(input[i].vote_usd)
        Name.push(input[i].name )
        
      }
      console.log(output)
      resolve(output)
    })
    .catch((e)=>console.log(e))
  })
} 
import PieChart from "./PieChart.js"
export default {
  components: {
    PieChart
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    output: function () {
      return test()
    },
    datacollection: function () {
      return {
        labels: null,
        datasets: [
          {
            //labels: null,
            backgroundColor: ["Red","Pink", "Purple", "Orange", "Brown", "Yellow", "Green", "Grey", "Cyan", "Blue"],
            data: null
          },
          // {
          //   //label: 'feo',
          //   // backgroundColor: '#f83000',
          //   // data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt()]
          // }
        ]
      }
    }
  },
  mounted () {
    getData()
    .then((output)=>{
      this.datacollection.datasets[0].data = Voteusd
      this.datacollection.labels = Name
      console.log(this.datacollection.datasets[0].data)
      this.loading = false
    })
    .catch((e)=>console.log(e))
  },
  methods: {
    test () {
      //this.datacollection.datasets.data = arr
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
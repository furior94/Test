const axios = require('axios');
var array = []
var string = ""
var rawdata = []
var fillimit = []
axios.get("https://steembottracker.net/bid_bots")
.then((response)=> {
    rawdata = response.data
    //console.log(response.data)
    export default {
        name: rawdata,
        components: {
            rawdata
        }
    }
})

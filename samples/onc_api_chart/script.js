const ctx = document.getElementById("myChart")

const requestUrl = 'http://dmas.uvic.ca/ScalarDataAPIService?user=&sensorid=16524&sitedeviceid=1194557&option=3&isClean=true&key=0&datefrom=11-Jul-2016%2000%3A00%3A00&dateto=19-Aug-2016%2000%3A00%3A00&plotpoints=53'

const testUrl = 'https://api.github.com/users/dhh'

let chartData

$.getJSON(requestUrl, (json) => {
  debugger
  chartData = json
})


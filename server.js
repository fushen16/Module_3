/*
** author: Fulin shen
** created on: April 23, 2016
** description: make this a simple http server that writes to the response
**   stream object. the page should display the following message:
**   Today is <day name>, <month name> <date>. Here are the available food
**   trucks:
**   list the food trucks returned by filterByDay, passing in the current day
**   name. e.g. filterByDay(day); where "day" is determined using the
**   enhanced-date module. The list of trucks returned will be an array of food
**   truck objects. Iterate through the list, building up a string of food
**   truck names. Once you're done iterating through that list, display the
**   string you built up.
**   Remember that the response is a stream object that must be closed.
*/

var http = require('http');

function getTruckList() {
  var trucks = require('./trucks.js');
  var enhancedDate = require('./enhanced-date.js');
  var responseStr = '';
  var dateStr = '';
  var truckList = '';
  var filterdTrucks = trucks.filterByDay(enhancedDate.getDayName());

  dateStr = 'Today is: ' + enhancedDate.getDayName() + ', ' +
    enhancedDate.getDate('formatted');
  for (var i=0; i<filterdTrucks.length; i++) {
    truckList += filterdTrucks[i].name + '\n';
    //console.log(response);
  }
  responseStr = dateStr + '. The food trucks available are: ' + '\n\n' +
  truckList;

  return responseStr;
}

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(getTruckList());
  response.end('\n'+'Above is the food truck list for today');
}).listen(3000, function() {
  console.log('listening on port 3000');
});

//console.log("today is "+enhancedDate.getDate('formatted'));

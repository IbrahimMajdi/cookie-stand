'use strict'

var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
]
hours.unshift('  ')
hours.push('Daily Location Total')

var cities = [];

function City(name, custMin, custMax, avgCookiesSales) {
  this.name = name;
  this.custMin = custMin;
  this.custMax = custMax;
  this.avgCookiesSales = avgCookiesSales;
  this.totalCookiesNum = 0;
  this.custPerHour = [];
  this.avgCookiesPerHour = [];
  //this.locationResult = [];

  cities.push(this);
}


City.prototype.getCustomerPerHour = function () {

  for (var i = 0; i < hours.length; i++) {
    var randCustPerHour = Math.round(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin
    this.custPerHour.push(randCustPerHour)
  }
}


City.prototype.getAvgCookiesPerHour = function () {


  for (var i = 0; i < this.custPerHour.length - 2; i++) {

    var AvgAmountOfCookies = Math.round(this.custPerHour[i] * this.avgCookiesSales)

    this.avgCookiesPerHour.push(AvgAmountOfCookies)
    this.totalCookiesNum += this.avgCookiesPerHour[i]
  }
  // console.log(this.avgCookiesPerHour);
  // console.log(this.totalCookiesNum);

}

// City.prototype.finalPairs = function (time, avgCookiesPerHour) {
//   for (var i = 0; i < hours.length; i++) {
//     var pairs = zip(hours[i], this.avgCookiesPerHour[i])
//     this.locationResult.push(pairs)
//   }

// }

var container = document.getElementById('list');
var tableE1 = document.createElement('table');
container.appendChild(tableE1);

var headerRow = document.createElement('tr')
tableE1.appendChild(headerRow)

City.prototype.render = function () {

  var cityname = document.createElement('tr')
  tableE1.appendChild(cityname)
  cityname.textContent = this.name

  for (var i = 0; i < hours.length - 1; i++) {
    var tde1 = document.createElement('td')
    cityname.appendChild(tde1)
    tde1.textContent = this.avgCookiesPerHour[i]

    if (i == hours.length - 2) {
      tde1.textContent = this.totalCookiesNum
      //console.log(tde1.textContent);

    }
  }
}



for (var i = 0; i < hours.length; i++) {

  var th1 = document.createElement('th')
  headerRow.appendChild(th1)
  th1.textContent = hours[i];

}



// var city = document.createElement('h2');
// container.appendChild(city);
// city.textContent = this.name;
// var ulEl = document.createElement('ul');
// container.appendChild(ulEl);
// for (var i = 0; i < this.locationResult.length; i++) {
//   var liEl = document.createElement('li');
//   ulEl.appendChild(liEl);
//   liEl.textContent = this.locationResult[i]
// }
// var liE2 = document.createElement('li');
// ulEl.appendChild(liE2);
// liE2.textContent = ` total : ${this.totalCookiesNum}`




// function perHour(custMin, custMax) {
//   var res =
//   //console.log(res)
//   return res
// }

// function AvgCookiesPerHour(custPerHour, avgCookiesSales) {
//   var cookiesPerHour = Math.round(custPerHour * avgCookiesSales)
//   return cookiesPerHour
// }

// function zip(hours, avgCookiesPerHour) {
//   var pairs = `${hours}: ${avgCookiesPerHour}`
//   return pairs
// }


//name, custMin, custMax, avgCookiesSales

var seattle = new City('Seattle', 23, 65, 6.3)
var tokyo = new City('Tokyo', 3, 24, 1.2)
var dubai = new City('Dubai', 11, 38, 3.7)
var paris = new City('Paris', 20, 38, 2.3)
var lima = new City('Lima', 2, 16, 4.6)


for (var i = 0; i < cities.length; i++) {
  cities[i].getCustomerPerHour();
  cities[i].getAvgCookiesPerHour();
  // cities[i].finalPairs();
  cities[i].render();
}


var totalrow = document.createElement('tr')
tableE1.appendChild(totalrow)

for (var i = 0; i < hours.length - 1; i++) {
  var totaldata = document.createElement('td')
  totalrow.appendChild(totaldata)
  totaldata.textContent = 'fd'
}


// var col = 0
var hoursTotal = [];

for (var j = 0; j < hours.length - 2; j++) {
  var parts = [];
  for (var i = 0; i < cities.length; i++) {

    var columns = cities[i].avgCookiesPerHour[j]

    parts.push(columns)
    // console.log(i, 'i');
  }


  hoursTotal.push(parts)

  // console.log(j, 'j');
  // console.log(col, 'col')
  console.log(parts, 'parts');


}
console.log(hoursTotal, 'hourstotal');
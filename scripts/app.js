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
  cities.push(this);
}


City.prototype.getCustomerPerHour = function () {

  for (var i = 0; i < hours.length - 2; i++) {
    var randCustPerHour = Math.round(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin
    this.custPerHour.push(randCustPerHour)
  }
}


City.prototype.getAvgCookiesPerHour = function () {

  for (var i = 0; i < this.custPerHour.length; i++) {

    var AvgAmountOfCookies = Math.round(this.custPerHour[i] * this.avgCookiesSales)

    this.avgCookiesPerHour.push(AvgAmountOfCookies)
    this.totalCookiesNum += this.avgCookiesPerHour[i]
  }
}


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
    }
  }
}



var container = document.getElementById('list');
var tableE1 = document.createElement('table');
container.appendChild(tableE1);

var headerRow = document.createElement('tr')
tableE1.appendChild(headerRow)


function renderFirstRow() {

  for (var i = 0; i < hours.length; i++) {
    var th1 = document.createElement('th')
    headerRow.appendChild(th1)
    th1.textContent = hours[i];

  }
}


function renderTotaltRow() {

  var totalrow = document.createElement('tr')
  tableE1.appendChild(totalrow)

  var totalstring = document.createElement('td')
  totalrow.appendChild(totalstring)
  totalstring.textContent = 'total'

  var hoursTotal = [];

  for (var j = 0; j < hours.length - 2; j++) {
    var totalCells = 0
    for (var i = 0; i < cities.length; i++) {
      var columns = cities[i].avgCookiesPerHour[j]
      totalCells += columns
      // console.log(i, 'i');
    }

    hoursTotal.push(totalCells)
  }

  for (var i = 0; i < hours.length - 2; i++) {
    var totaldata = document.createElement('td')
    totalrow.appendChild(totaldata)
    totaldata.textContent = hoursTotal[i]
  }
}

function renderAll() {

  renderFirstRow()

  for (var i = 0; i < cities.length; i++) {
    cities[i].render();
  }

  renderTotaltRow()
}


//name, custMin, custMax, avgCookiesSales
var seattle = new City('Seattle', 23, 65, 6.3)
var tokyo = new City('Tokyo', 3, 24, 1.2)
var dubai = new City('Dubai', 11, 38, 3.7)
var paris = new City('Paris', 20, 38, 2.3)
var lima = new City('Lima', 2, 16, 4.6)

for (var i = 0; i < cities.length; i++) {
  
  cities[i].getCustomerPerHour();
  cities[i].getAvgCookiesPerHour();
}



var locations = document.getElementById("locations")

locations.addEventListener('submit', function (event) {
  event.preventDefault();
  var name = event.target.location.value;
  // console.log(name);
  var custMin = event.target.minimum.value;
  // console.log(custMin);
  var custmax = event.target.maximum.value;
  // console.log(custmax);
  var avgCookiesSales = event.target.avgCookies.value;
  // console.log(avgCookiesSales);

  var newlocation = new City(name, parseInt(custMin), parseInt(custmax), parseInt(avgCookiesSales));

  newlocation.getCustomerPerHour();
  newlocation.getAvgCookiesPerHour();

  var bool = false;

  for (var i = 0; i < cities.length; i++) {
    if (newlocation.name == cities[i].name) {
      bool = true;
      break;
    }
  }

  // if (bool == true) {

  //   var item = document.getElementById(newlocation.name);
  //   item.parentNode.removeChild(item);
  // }

  tableE1.removeChild(tableE1.lastChild)
  newlocation.render()
  
  renderAll();
})

//renderAll();
console.log(cities);

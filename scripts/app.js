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
var cityes = [];

function City(name, custMin, custMax, totalCookiesNum, avgCookiesSales) {
  this.name = name;
  this.custMin = custMin;
  this.custMax = custMax;
  this.totalCookiesNum = 0;
  this.avgCookiesSales = avgCookiesSales;
  this.avgCookiesPerHour = [];
  this.custPerHour = [];
  this.locationResult = [];

  cityes.push(this);
}
City.prototype.getCustomerPerHour = function (custMin, custMax) {

  for (var i = 0; i < hours.length; i++) {

    var randCustPerHour = perHour(this.custMin, this.custMax)
    this.custPerHour.push(randCustPerHour)
  }


}
City.prototype.getAvgCookiesPerHour = function (custPerHour, avgCookiesSales) {

  for (var i = 0; i < this.custPerHour.length; i++) {

    var AvgAmountOfCookies = AvgCookiesPerHour(this.custPerHour[i], this.avgCookiesSales)
    //this.avgCookiesPerHour.push(AvgAmountOfCookies)
    this.totalCookiesNum += this.avgCookiesPerHour[i];
  }

}

City.prototype.finalPairs = function (hours, avgCookiesSales) {
  for (var i = 0; i < hours.length; i++) {
    var pairs = zip(hours[i], this.avgCookiesPerHour[i])
    this.locationResult.push(pairs)
  }

}
City.prototype.render = function () {
  var container = document.getElementById('list');
  var city = document.createElement('h2');
  container.appendChild(city);
  city.textContent = this.name;
  var ulEl = document.createElement('ul');
  container.appendChild(ulEl);
  for (var i = 0; i < this.locationResult.length; i++) {
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = this.locationResult[i]
  }
  var liE2 = document.createElement('li');
  ulEl.appendChild(liE2);
  liE2.textContent = ` total : ${this.totalCookiesNum}`
}



function perHour(custMin, custMax) {
  var res = Math.round(Math.random() * (custMax - custMin + 1)) + custMin
  //console.log(res)
  return res
}

function AvgCookiesPerHour(custPerHour, avgCookiesSales) {
  var cookiesPerHour = Math.round(custPerHour * avgCookiesSales)
  return cookiesPerHour
}

function zip(hours, avgCookiesPerHour) {
  var pairs = `${hours}: ${avgCookiesPerHour}`
  return pairs
}


//name, custMin, custMax, totalCookiesNum, avgCookiesSales
var seattle = new City('Seattle', 23, 65, 0, 6.3)

for (var i = 0; i < cityes.length; i++) {
  cityes[i].getCustomerPerHour();
  cityes[i].getAvgCookiesPerHour();
  //cityes[i].finalPairs();
  cityes[i].render();

}

console.log(cityes)


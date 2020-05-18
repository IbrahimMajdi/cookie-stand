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

var seattle = {
  name: 'seattle',
  min: 23,
  max: 65,
  totalCookiesNum: 0,
  locResult: [],
  avgCookiesSales: 6.3,
  avgCookiesPerHour: [],
  custPerHour: [],
  getCustomerPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var randCustPerHour = perHour(this.min, this.max)
      this.custPerHour.push(randCustPerHour)
    }
    //console.log(this.custPerHour)
  },

  getAvgCookiesPerHour: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      var AvgAmountOfCookies = AvgCookiesPerHour(this.custPerHour[i], this.avgCookiesSales)
      this.avgCookiesPerHour.push(AvgAmountOfCookies)
      this.totalCookiesNum += this.avgCookiesPerHour[i];
    }
    //console.log(this.avgCookiesPerHour)
  },
  getLocResult: function () {
    for (var i = 0; i < hours.length; i++) {
      var pairs = finalPairs(hours[i], this.avgCookiesPerHour[i])
      this.locResult.push(pairs)
    }
    //console.log(this.locResult)
  },

  render: function () {
    var container = document.getElementById('list');
    var city = document.createElement('h2');
    container.appendChild(city);
    city.textContent = this.name;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var i = 0; i < this.locResult.length; i++) {
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.locResult[i]
    }
    var liE2 = document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent = ` total : ${this.totalCookiesNum}`
  }
}

// --------------------------
var tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  totalCookiesNum: 0,
  locResult: [],
  avgCookiesSales: 1.2,
  avgCookiesPerHour: [],
  custPerHour: [],
  getCustomerPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var randCustPerHour = perHour(this.min, this.max)
      this.custPerHour.push(randCustPerHour)
    }
    //console.log(this.custPerHour)
  },

  getAvgCookiesPerHour: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      var AvgAmountOfCookies = AvgCookiesPerHour(this.custPerHour[i], this.avgCookiesSales)
      this.avgCookiesPerHour.push(AvgAmountOfCookies)
      this.totalCookiesNum += this.avgCookiesPerHour[i];
    }
    //console.log(this.avgCookiesPerHour)
  },
  getLocResult: function () {
    for (var i = 0; i < hours.length; i++) {
      var pairs = finalPairs(hours[i], this.avgCookiesPerHour[i])
      this.locResult.push(pairs)
    }
    //console.log(this.locResult)
  },

  render: function () {
    var container = document.getElementById('list');
    var city = document.createElement('h2');
    container.appendChild(city);
    city.textContent = this.name;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var i = 0; i < this.locResult.length; i++) {
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.locResult[i]
    }
    var liE2 = document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent = ` total : ${this.totalCookiesNum}`
  }
}
// ------------------------------------------------------------
var dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  totalCookiesNum: 0,
  locResult: [],
  avgCookiesSales: 3.7,
  avgCookiesPerHour: [],
  custPerHour: [],
  getCustomerPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var randCustPerHour = perHour(this.min, this.max)
      this.custPerHour.push(randCustPerHour)
    }
    //console.log(this.custPerHour)
  },

  getAvgCookiesPerHour: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      var AvgAmountOfCookies = AvgCookiesPerHour(this.custPerHour[i], this.avgCookiesSales)
      this.avgCookiesPerHour.push(AvgAmountOfCookies)
      this.totalCookiesNum += this.avgCookiesPerHour[i];
    }
    //console.log(this.avgCookiesPerHour)
  },
  getLocResult: function () {
    for (var i = 0; i < hours.length; i++) {
      var pairs = finalPairs(hours[i], this.avgCookiesPerHour[i])
      this.locResult.push(pairs)
    }
    //console.log(this.locResult)
  },

  render: function () {
    var container = document.getElementById('list');
    var city = document.createElement('h2');
    container.appendChild(city);
    city.textContent = this.name;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var i = 0; i < this.locResult.length; i++) {
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.locResult[i]
    }
    var liE2 = document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent = ` total : ${this.totalCookiesNum}`
  }
}
// ------------------------------------------------------------
var paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  totalCookiesNum: 0,
  locResult: [],
  avgCookiesSales: 3.7,
  avgCookiesPerHour: [],
  custPerHour: [],
  getCustomerPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var randCustPerHour = perHour(this.min, this.max)
      this.custPerHour.push(randCustPerHour)
    }
    //console.log(this.custPerHour)
  },

  getAvgCookiesPerHour: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      var AvgAmountOfCookies = AvgCookiesPerHour(this.custPerHour[i], this.avgCookiesSales)
      this.avgCookiesPerHour.push(AvgAmountOfCookies)
      this.totalCookiesNum += this.avgCookiesPerHour[i];
    }
    //console.log(this.avgCookiesPerHour)
  },
  getLocResult: function () {
    for (var i = 0; i < hours.length; i++) {
      var pairs = finalPairs(hours[i], this.avgCookiesPerHour[i])
      this.locResult.push(pairs)
    }
    //console.log(this.locResult)
  },

  render: function () {
    var container = document.getElementById('list');
    var city = document.createElement('h2');
    container.appendChild(city);
    city.textContent = this.name;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var i = 0; i < this.locResult.length; i++) {
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.locResult[i]
    }
    var liE2 = document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent = ` total : ${this.totalCookiesNum}`
  }
}
// ------------------------------------------------------------
var lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  totalCookiesNum: 0,
  locResult: [],
  avgCookiesSales: 3.7,
  avgCookiesPerHour: [],
  custPerHour: [],
  getCustomerPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var randCustPerHour = perHour(this.min, this.max)
      this.custPerHour.push(randCustPerHour)
    }
    //console.log(this.custPerHour)
  },

  getAvgCookiesPerHour: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      var AvgAmountOfCookies = AvgCookiesPerHour(this.custPerHour[i], this.avgCookiesSales)
      this.avgCookiesPerHour.push(AvgAmountOfCookies)
      this.totalCookiesNum += this.avgCookiesPerHour[i];
    }
    //console.log(this.avgCookiesPerHour)
  },
  getLocResult: function () {
    for (var i = 0; i < hours.length; i++) {
      var pairs = finalPairs(hours[i], this.avgCookiesPerHour[i])
      this.locResult.push(pairs)
    }
    //console.log(this.locResult)
  },

  render: function () {
    var container = document.getElementById('list');
    var city = document.createElement('h2');
    container.appendChild(city);
    city.textContent = this.name;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var i = 0; i < this.locResult.length; i++) {
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.locResult[i]
    }
    var liE2 = document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent = ` total : ${this.totalCookiesNum}`
  }
}
// ------------------------------------------------------------


function perHour(min, max) {
  var res = Math.round(Math.random() * (max - min + 1)) + min
  //console.log(res)
  return res
}

function AvgCookiesPerHour(custPerHour, avgCookiesSales) {
  var cookesPerhours = Math.round(custPerHour * avgCookiesSales)
  return cookesPerhours
}

function finalPairs(hours, avgCookiesPerHour) {
  var pairs = `${hours}: ${avgCookiesPerHour}`
  return pairs
}

seattle.getCustomerPerHour()
seattle.getAvgCookiesPerHour()
seattle.getLocResult()
seattle.render()

tokyo.getCustomerPerHour()
tokyo.getAvgCookiesPerHour()
tokyo.getLocResult()
tokyo.render()

dubai.getCustomerPerHour()
dubai.getAvgCookiesPerHour()
dubai.getLocResult()
dubai.render()

paris.getCustomerPerHour()
paris.getAvgCookiesPerHour()
paris.getLocResult()
paris.render()

lima.getCustomerPerHour()
lima.getAvgCookiesPerHour()
lima.getLocResult()
lima.render()

// seattle.render();
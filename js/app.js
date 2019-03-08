var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];
console.log('hi');
var cookielist = document.getElementById('cookie-list');
console.log('hello');
var cookielist2 = document.getElementById('cookie-list2');
console.log('hi2');
var cookielist3 = document.getElementById('cookie-list3');
console.log('hi3');
var cookielist4 = document.getElementById('cookie-list4');
console.log('hi4');
var cookielist5 = document.getElementById('cookie-list5');
console.log('hi5');

var cookieStore = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomer: 65,
  avgCookiesold: 6.3,


  avgCustomersPerHour: function () {
    console.log('Customer');
    return Math.floor(Math.random() * (cookieStore.maxCustomer - cookieStore.minCustomers + 1)) + cookieStore.minCustomers ;
  },
  cookieePerHour: function () {
    console.log('Cookie');
    return this.avgCustomersPerHour() * Math.floor(this.avgCookiesold);
  },


  total: function getTotal() {
    var i;
    console.log('total');
    for (i = 0; i < hours.length; i++) {
      console.log('total1');
      var liEl = document.createElement('li');
      console.log('total2');
      liEl.textContent = `${hours[i]}  : ${(cookieStore.cookieePerHour())}`;
      console.log('total3');
      cookielist.appendChild(liEl);
      console.log('total4');
    }
  }
};
console.log('prefinal');
cookieStore.total();
console.log('final');


var cookieStore2 = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomer: 24,
  avgCookiesold: 1.2,


  avgCustomersPerHour: function () {
    console.log('Customer');
    return Math.floor(Math.random() * (cookieStore2.maxCustomer - cookieStore2.minCustomers + 1)) + cookieStore2.minCustomers;

  },
  cookieePerHour: function () {
    console.log('Cookie');

    return cookieStore2.avgCustomersPerHour() * Math.floor(cookieStore2.avgCookiesold);
  },


  total: function getTotal() {
    var i;
    console.log('total');
    for (i = 0; i < hours.length; i++) {
      console.log('total1');
      var liEl = document.createElement('li');
      console.log('total2');
      liEl.textContent = `${hours[i]}  : ${(cookieStore2.cookieePerHour())}`;
      console.log('total3');
      cookielist2.appendChild(liEl);
      console.log('total4');
    }
  }
};
cookieStore2.total();

var cookieStore3 = {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomer: 38,
  avgCookiesold: 3.7,


  avgCustomersPerHour: function () {
    console.log('Customerd');
    return Math.floor(Math.random() * (cookieStore3.maxCustomer - cookieStore3.minCustomers + 1)) + cookieStore3.minCustomers;
  },
  cookieePerHour: function () {
    console.log('Cookied');

    return cookieStore3.avgCustomersPerHour() * Math.floor(cookieStore3.avgCookiesold);
  },


  total: function getTotal() {
    var i;
    console.log('totald');
    for (i = 0; i < hours.length; i++) {
      console.log('total1d');
      var liEl = document.createElement('li');
      console.log('total2d');
      liEl.textContent = `${hours[i]}  : ${(cookieStore3.cookieePerHour())}`;
      console.log('total3d');
      cookielist3.appendChild(liEl);
      console.log('total4d');
    }
  }
};
cookieStore3.total();

var cookieStore4 = {
  name: 'Capitol Hill ',
  minCustomers: 20,
  maxCustomer: 38,
  avgCookiesold: 2.4,


  avgCustomersPerHour: function () {
    console.log('Customere');
    return Math.floor(Math.random() * (cookieStore4.maxCustomer - cookieStore4.minCustomers + 1)) + cookieStore4.minCustomers;
  },
  cookieePerHour: function () {
    console.log('Cookie-e');

    return cookieStore4.avgCustomersPerHour() * Math.floor(cookieStore4.avgCookiesold);

  },


  total: function getTotal() {
    var i;
    console.log('totale');
    for (i = 0; i < hours.length; i++) {
      console.log('total1e');
      var liEl = document.createElement('li');
      console.log('total2e');
      liEl.textContent = `${hours[i]}  : ${(cookieStore4.cookieePerHour())}`;
      console.log('total3e');
      cookielist4.appendChild(liEl);
      console.log('total4e');
    }
  }
};
cookieStore4.total();

var cookieStore5 = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomer: 16,
  avgCookiesold: 4.6,


  avgCustomersPerHour: function () {
    console.log('Customer f');
    return Math.floor(Math.random() * (cookieStore5.maxCustomer - cookieStore5.minCustomers + 1)) + cookieStore5.minCustomers;


  },
  cookieePerHour: function () {
    console.log('Cookief');

    return cookieStore5.avgCustomersPerHour() * Math.floor(cookieStore5.avgCookiesold);

  },


  total: function getTotal() {
    var i;
    console.log('totalf');
    for (i = 0; i < hours.length; i++) {
      console.log('total1f');
      var liEl = document.createElement('li');
      console.log('total2f');
      liEl.textContent = `${hours[i]}  : ${(cookieStore5.cookieePerHour())}`;
      console.log('total3f');
      cookielist5.appendChild(liEl);
      console.log('total4f');
    }
  }
};
cookieStore5.total();








'use strict';

var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm','8:00 pm'];

var salesTable = document.getElementById('salesTable');
var storeData = [];


function Store(name,minCustomers,maxCustomer,avgCookiesold){
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomer = maxCustomer;
    this.avgCookiesold = avgCookiesold;
    this.customerPerHour=[];
    this.cookiesPerHour=[];
    this.total=0;
    storeData.push(this);
}

var firstandpike = new Store('1st & Pike',23,65,6.3);
var seatac = new Store('SeaTac',3,24,1.2);
var seattlecenter = new Store('Seattle Center',11,38,3.7);
var capitolhill = new Store('Capitol Hill',20,38,2.3);
var alki = new Store('Alki',2,16,4.6);


Store.prototype.render = function(){
  var trRowName = document.createElement('tr');
  var tdStore = document.createElement('td');
  tdStore.textContent = this.name; //table row
  trRowName.appendChild(tdStore);
  console.log(cookiesPerHour.length);
  for (var i = 0; i<cookiesPerHour.length ; i++)
  {
    tdCell = document.createElement('td');
    tdCell.textContent = this.cookiesPerHour[i];
    trRowName.appendChild(tdCell);
    console.log(render)
  };
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.total;
  trRowName.appendChild(tdTotal);
  salesTable.appendChild(trRowName);
};

Store.prototype.avgCustomersPerHour = function (){
    // console.log('hello')
    for (var i = 0; i< hours.length;i++){
    var customerData =  Math.floor(Math.random() * (this.maxCustomer - this.minCustomers + 1)) + this.minCustomers ;
    return customerData;
    };
};
Store.prototype.cookieePerHour = function(){
    // console.log('hello2')
    for (var i = 0; i< hours.length;i++){
    var cookieeData  =  this.avgCustomersPerHour() * Math.floor(this.avgCookiesold);
    return cookieeData;
    }
    
};

function makeRow (){
  var tableRow = document.createElement('tr');
  var thEl = document.createElement('th')
  thEl.textContent = null;
  thEl.textContent = 'StoreName';
  tableRow.appendChild(thEl);
  // salesTable.appendChild(tableRow);
  // tableRow.appendChild('thEl');
  for (var i = 0; i< hours.length;i++){
    thEl = document.createElement('th')
    thEl.textContent=hours[i];
    tableRow.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Location Total';
  tableRow.appendChild(thEl);
  salesTable.appendChild(tableRow);
};

function renderStoreData(){

  // tdata.textContent = null;
  console.log('-------');
  for (var i = 0; i < storeData.length; i++){
    var rowdata = document.createElement('tr');
    var storeNameData = document.createElement('td');
    storeNameData.textContent = storeData[i].name;
    rowdata.appendChild(storeNameData);
    console.log(storeData[i].name);
    // salesTable.appendChild(rowdata);
    for (var j = 0 ; j<hours.length; j++){
      var tdata = document.createElement('td');
      // console.log(hours[j]);
      var data = storeData[i].cookieePerHour();
       tdata.textContent = data;
       console.log (data);
      // console.log(storeData[i].cookieePerHour());
      rowdata.appendChild(tdata);
      // salesTable.appendChild(rowdata);
    }
    console.log(rowdata);
    salesTable.appendChild(rowdata);
  };
  // 
};

function makeFooter(){
  var tableRow = document.createElement('tr');
  tableRow.textContent = 'Totals'
  salesTable.appendChild(tableRow);
  var finalTotal = 0;
  for (var i = 0;i< hours.length;i++){
   var  hourTotal = 0;
    for (var j = 0; j< storeData.length; j++){
      hourTotal = hourTotal + storeData[j].cookiesPerHour[i];
      finalTotal += storeData[j].cookiesPerHour[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = hourTotal;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = finalTotal;
  tableRow.appendChild(tdElement);
}
makeRow();
renderStoreData();
makeFooter();
// function makeRow(Store,totCookieStore) {
//     for (var i = 0; i <= hours.length; i++) {
//       totCookieStore = totCookieStore + Store.cookieePerHour();
//       rowData.push(
//         '<td>' + Store.cookieePerHour() + '</td>' 
//          ) 
//          if (isNaN(hours[i])) {
//               hours[i] = this.cookieePerHour() ;
//          }
//          else {
//             hours[i] = hours[i] + this.cookieePerHour() ;
//          }
//     }
//     return totCookieStore;
//     // console.log(rowData);    
//   };
 
//   function render(tableRow) {
//     for (var j=0; j < tableRow.length ; j++) {
//       var newRow = document.createElement('td');
//       newRow.innerHTML = tableRow[j];
//       salesTable.appendChild(newRow);
//     }
//   };

 
//   rowData.push(
//     '<td>' + 'Store'+ '</td>' 
//      )  
//   for (var i = 0; i <= hours.length -1; i++) {
//     rowData.push(
//       '<td>' + hours[i] + '<td>' 
//        )
//   }
//   rowData.push(
//     '<td>' + 'Daily Location Total'+ '<td>' 
//      )
//   render(rowData);
//   var newRow = document.createElement('tr');
//   newRow.innerHTML = ' ';      
//   salesTable.appendChild(newRow);


//   var storeCount = 0;
//   while (storeCount < storeData.length) {
//     var totCookies = 0;
//       var rowData = [];
//       rowData.push(
//         '<td>' + storeData[storeCount].name + '</td>' 
//          );    
//       var totRow = makeRow(storeData[storeCount]);

//       rowData.push(
//         '<td>' + totRow + '</td>' 
//          )
//       render(rowData);
//       var newRow = document.createElement('tr');
//       newRow.innerHTML = ' ';      
//       salesTable.appendChild(newRow);
//     storeCount = storeCount + 1;
// };
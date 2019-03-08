var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm','8:00 pm'];
console.log('hi');
var cookielist = document.getElementById('cookie-list');
console.log('hi2');

var cookieStore = {
    name: '1st and Pike',
    minCustomers: 23,
    maxCustomer: 65,
    avgCookiesold : 6.3,

 
    avgCustomersPerHour : function ()
    {
        console.log('Customer')
        return  Math.floor(Math.random() * (cookieStore.maxCustomer - cookieStore.minCustomers + 1)) + cookieStore.minCustomers;
        console.log('Customer-count')

    },
    cookieePerHour : function() 
    {
        console.log('Cookie')

        return this.avgCustomersPerHour () * Math.floor(this.avgCookiesold) ;
        console.log('cookie-count')
    },
    
   
    total: function getTotal()
    {
        var i ;
        console.log('total')
        for (i = 0 ; i < hours.length ; i++ ){
        console.log('total1')
        var liEl = document.createElement('li');
        console.log('total2')
        liEl.textContent = `${hours[i]}  : ${(cookieStore.cookieePerHour())}`;
        console.log('total3')
        cookielist.appendChild(liEl);
        console.log('total4')
        }
    }
}
console.log('prefinal')
cookieStore.total();
console.log('final')







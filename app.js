
"use strict"
let container = document.getElementById('content-area');
let table = document.createElement('table');
container.appendChild(table);

let hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
function Shops(location, min, max, avgCookieSale) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgCookieSale = avgCookieSale;
    this.dailySales = 0;
    this.hourlySales = [];
    this.randomCust();
    this.hourlyDailySales();
    // this.renderheaderrow(table);
    // this.rowDataRender();
}
//random number
Shops.prototype.randomCust = function () {
    let range = this.max - this.min;
    let randomCount = Math.random() * range + this.min;
    return Math.ceil(randomCount);

}

Shops.prototype.hourlyDailySales = function () {
    for (let i = 0; i < hours.length; i++) {
        let numOfCookies = Math.ceil(this.randomCust() * this.avgCookieSale);
        this.hourlySales.push(numOfCookies);
        this.dailySales += numOfCookies;
    }

}

let seattle = new Shops('Seattle', 23, 65, 6.3);
let tokyo = new Shops('Tokyo', 3, 24, 1.2);
let dobai = new Shops('Dubai', 11, 38, 3.7);
let paris = new Shops('Paris', 20, 38, 2.3);
let lima = new Shops('Lima', 2, 16, 4.6);

let shoplist = [seattle, tokyo, dobai, paris, lima];

var headerRow = document.createElement('tr');
table.appendChild(headerRow);
var th = document.createElement('th');
headerRow.appendChild(th);
th.textContent = '-----';
for (var i = 0; i < hours.length; i++) {
    var th = document.createElement('th');
    headerRow.appendChild(th);
    th.textContent = hours[i];
}
var th = document.createElement('th');
headerRow.appendChild(th);
th.textContent = 'Daily Total';




for (var shopindex = 0; shopindex < shoplist.length; shopindex++) {
    var currentShop = shoplist[shopindex];
    var shoprow = document.createElement('tr');
    table.appendChild(shoprow);
    var shopTd = document.createElement('td');
    shoprow.appendChild(shopTd);
    shopTd.textContent = currentShop.location;


   
    for (var cellIndex = 0; cellIndex < hours.length; cellIndex++) {
        var dataIn = document.createElement('td');
        shoprow.appendChild(dataIn);
        dataIn.textContent = currentShop.hourlySales[cellIndex];
    }


    
    shopTd = document.createElement('td');
    shoprow.appendChild(shopTd);
    shopTd.textContent = currentShop.dailySales;
}



var footerRow = document.createElement('tr');
table.appendChild(footerRow);
var th = document.createElement('th');
footerRow.appendChild(th);
th.textContent = 'Totals';

var megaTotalSalesCookies = 0;
for (var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
    var td = document.createElement('td');
    footerRow.appendChild(td);
    var sum = 0;
    for (var shopIndexCell = 0; shopIndexCell < shoplist.length; shopIndexCell++) {
        var currentShop = shoplist[shopIndexCell];

        sum += currentShop.hourlySales[hourIndex];
    }
 
    td.textContent = sum;
    megaTotalSalesCookies += sum;

}

function renderNewRow() {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    tr.appendChild(td);
    var currentShop =shoplist[shoplist.length-1];
    console.log(currentShop);
    td.textContent = currentShop.location;
    
    for (var cellIndex = 0; cellIndex < hours.length; cellIndex++) {
        var data = document.createElement('td');
        tr.appendChild(data);
        data.textContent = currentShop.hourlySales[cellIndex];

    }
      
     var td = document.createElement('td');
      tr.appendChild(td);
      td.textContent = currentShop.dailySales;
  }
var td = document.createElement('td');
footerRow.appendChild(td);
td.textContent = megaTotalSalesCookies;

function submitHandler(event) {
    event.preventDefault();

    var location = event.target.location.value;
    var min = parseInt(event.target.min.value);
    var max = parseInt(event.target.max.value);
    var avg = parseFloat(event.target.avg.value);

    var newShop = new Shops(location, min, max, avg);
    

    shoplist.push(newShop);

    table.removeChild(footerRow);

    renderNewRow();
    
    
   
table.appendChild(footerRow);
var th = document.createElement('th');
footerRow.appendChild(th);
th.textContent = 'Totals';

var megaTotalSalesCookies = 0;
for (var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
    var td = document.createElement('td');
    footerRow.appendChild(td);
    var sum = 0;
    for (var shopIndexCell = 0; shopIndexCell < shoplist.length; shopIndexCell++) {
        var currentShop = shoplist[shopIndexCell];

        sum += currentShop.hourlySales[hourIndex];
    }
 
    td.textContent = sum;
    megaTotalSalesCookies += sum;

}


}
    
  

    




var shopsForm = document.getElementById("Form"); 
shopsForm.addEventListener('submit', submitHandler);
'use strict';
//....... Global 
const hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let shop = [];

function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

function Location(site, minCustomers, maxCustomers, avgCookies) {
    this.site = site;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
   
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.totalCookiesPerDay= 0;

    shop.push(this);
    //console.log(this);
}


Location.prototype.calCustomersEachHour= function() {
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
    }
    //console.log(this.customersEachHour);
}

Location.prototype.calCookiesEachHour = function() {
    for (let i = 0; i < hours.length; i++) {
     this.cookiesEachHour.push(Math.floor(this.avgCookies * this.customersEachHour[i]));  

     // total cookies
     this.totalCookiesPerDay += this.cookiesEachHour[i]
    }
    //console.log(this.cookiesEachHour);

}

let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 2.3);
let lima = new Location('Lima', 2, 16, 4.6);

//seattle.calCustomersEachHour();
//seattle.calCookiesEachHour();

//Call all location without repeat above step
for (let i = 0; i < shop.length; i++) {
shop[i].calCustomersEachHour();
shop[i].calCookiesEachHour();    
}

console.log(shop);

// DOM
// get parent
let parent = document.getElementById('parent');
console.log(parent);

let table = document.createElement('table');
parent.appendChild(table);

// instruction from lab to seperated header and footer function

function header(){
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let firstTh = document.createElement('th');
    headerRow.appendChild(firstTh);
    firstTh.textContent = 'Shop';
    
    // to print hours in web
    for (let i = 0; i < hours.length; i++) {
    let thElement = document.createElement('th');
    headerRow.appendChild(thElement);
    // hours[0] ===> 6 AM
    thElement.textContent = hours[i];
    }
    let lastTh = document.createElement('th');
    headerRow.appendChild(lastTh);
    lastTh.textContent = 'Dialy Location Total';
}
header();

// Body data
Location.prototype.render= function(){
    let dataRow=document.createElement('tr');
    table.appendChild(dataRow);

    let nameData=document.createElement('td');
    dataRow.appendChild(nameData);
    nameData.textContent = this.site;

    // let totalDataForEachhop=document.createElement('td');
    // dataRow.aooendChild(totalDataForEachhop);
    //==========> it made one td only so we need to add for loop
    for (let i = 0; i < hours.length; i++) {
        let tdElement=document.createElement('td');
        dataRow.appendChild(tdElement);    //========> looping through hours array to create 14 td elements in table body
        
        tdElement.textContent = this.cookiesEachHour[i];
        
    }

    let totalDataForEachhop = document.createElement('td');
    dataRow.appendChild(totalDataForEachhop);
    totalDataForEachhop.textContent = this.totalCookiesPerDay;
    
}

for (let i = 0; i < shop.length; i++) {
    shop[i].calCustomersEachHour();
    shop[i].calCookiesEachHour(); 
    shop[i].render();   
    }

// separate function for table footer
function makeFooter(){
    let footerRaw=document.createElement('tr');
    table.appendChild(footerRaw);
    let footerTh=document.createElement('th');
    footerRaw.appendChild(footerTh);
    footerTh.textContent = 'total';

    for (let i = 0; i < hours.length; i++) {
        let totalEachHour =0;
        for (let j = 0; j < shop.length; j++) {              //=======> nest for loop i for hours and j for shops ////    total = shop[j].cookies[i]
            //console.log(shop[j].hours[i]); //===============================> undifined becuase no hours in shop so we need to find something connect hours with shop ====> cookieseachhour
        totalEachHour += shop[j].cookiesEachHour[i];
            // console.log(shop[j].cookiesEachHour[i]);
            // console.log(totalEachHour);

        }
        console.log(totalEachHour);     //========> out for loop to see only + output

        let footerThTotal=document.createElement('th');
        footerRaw.appendChild(footerThTotal);
        footerThTotal.textContent = totalEachHour;

    }

}
makeFooter();

//...................................FORM.........................
let shopform = document.getElementById('shopform');
shopform.addEventListener('submit', submitter);

function submitter(event) {
    event.preventDefault();
    // console.log('hi', event);
    table.deleteRow(table.rows.length - 1);

    let name = event.target.shopName.value;
    // console.log(name);
    let min = event.target.minCustomers.value;
    // console.log(min);
    let max = event.target.maxCustomers.value;
    // console.log(max);
    let avg = event.target.avgCookies.value;
    // console.log(avg);    
    let addShop = new Location(name, min, max, avg);
    addShop.calCustomersEachHour();
    addShop.calCookiesEachHour();
    addShop.render();
    makeFooter();
}










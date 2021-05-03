'use strict';
const hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle= {
    locationName:'Seatlle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
           
            //this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));        
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calCookiesEachHour:function(){
        //console.log(this.customersEachHour);
    for (let i = 0; i < hours.length; i++) {
        this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
        this.total+=this.cookiesEachHour[i];
    }
    },

    renderFunction: function () {
        let theParent = document.getElementById('parent');
        console.log(theParent);    
        let shopName=document.createElement('h2');
        theParent.appendChild(shopName);
        shopName.textContent=this.locationName;
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem=document.createElement('li')
            unorderedList.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

            
        }
        let totalItem=document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent=`Total: ${this.total} cookies.`
    }
}

console.log(seattle);
seattle.calCustomersEachHour();
seattle.calCookiesEachHour();
seattle.renderFunction();

const tokyo= {
    locationName:'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
           
            //this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));        
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calCookiesEachHour:function(){
        //console.log(this.customersEachHour);
    for (let i = 0; i < hours.length; i++) {
        this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
        this.total+=this.cookiesEachHour[i];
    }
    },

    renderFunction: function () {
        let theParent = document.getElementById('parent');
        console.log(theParent);    
        let shopName1=document.createElement('h2');
        theParent.appendChild(shopName1);
        shopName1.textContent=this.locationName;
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem=document.createElement('li')
            unorderedList.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

            
        }
        let totalItem=document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent=`Total: ${this.total} cookies.`
    }
}
console.log(tokyo);
tokyo.calCustomersEachHour();
tokyo.calCookiesEachHour();
tokyo.renderFunction();

const dubai= {
    locationName:'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
           
            //this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));        
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calCookiesEachHour:function(){
        //console.log(this.customersEachHour);
    for (let i = 0; i < hours.length; i++) {
        this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
        this.total+=this.cookiesEachHour[i];
    }
    },

    renderFunction: function () {
        let theParent = document.getElementById('parent');
        console.log(theParent);    
        let shopName2=document.createElement('h2');
        theParent.appendChild(shopName2);
        shopName2.textContent=this.locationName;
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem=document.createElement('li')
            unorderedList.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

            
        }
        let totalItem=document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent=`Total: ${this.total} cookies.`
    }
}
console.log(dubai);
dubai.calCustomersEachHour();
dubai.calCookiesEachHour();
dubai.renderFunction();

const paris= {
    locationName:'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
           
            //this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));        
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calCookiesEachHour:function(){
        //console.log(this.customersEachHour);
    for (let i = 0; i < hours.length; i++) {
        this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
        this.total+=this.cookiesEachHour[i];
    }
    },

    renderFunction: function () {
        let theParent = document.getElementById('parent');
        console.log(theParent);    
        let shopName3=document.createElement('h2');
        theParent.appendChild(shopName3);
        shopName3.textContent=this.locationName;
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem=document.createElement('li')
            unorderedList.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

            
        }
        let totalItem=document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent=`Total: ${this.total} cookies.`
    }
}
console.log(paris);
paris.calCustomersEachHour();
paris.calCookiesEachHour();
paris.renderFunction();

const lima= {
    locationName:'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
           
            //this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));        
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calCookiesEachHour:function(){
        //console.log(this.customersEachHour);
    for (let i = 0; i < hours.length; i++) {
        this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
        this.total+=this.cookiesEachHour[i];
    }
    },

    renderFunction: function () {
        let theParent = document.getElementById('parent');
        console.log(theParent);    
        let shopName4=document.createElement('h2');
        theParent.appendChild(shopName4);
        shopName4.textContent=this.locationName;
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem=document.createElement('li')
            unorderedList.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

            
        }
        let totalItem=document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent=`Total: ${this.total} cookies.`
    }
}
console.log(lima);
lima.calCustomersEachHour();
lima.calCookiesEachHour();
lima.renderFunction();





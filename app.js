'use strict';
let openHours =['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
console.log(openHours)
// seattle
let seattle={
    location:'Seattle',
    minCust:'23',
    maxCust:'65',
    AvgCookie:'6.3',
    Cust:'0',
    getCust: function(){
        this.Cust = randomCust(1, 4) + 'Customer per hour'
        console.log(this.Cust);
    }
}
for (let i = 0; i < 15; i++) {
function randomCust(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomCust(1,4));
console.log(seattle);

//tokyo
//dubai
//paris
//lima
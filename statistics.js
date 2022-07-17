'use strict'
var allTypes=[];
function Type(foodName, foodType, price) {
    this.foodName = foodName;
    this.foodType = foodType;
    this.price = price;
    allTypes.push(this);

}


Type.prototype.foodID = function () {
    let pointer = allTypes.indexOf(this).toString();
    while(pointer.length>4) pointer="0"+pointer;
    return pointer;
}


let submit = document.getElementById('form');
submit.addEventListener('submit',handleSubmit);






Type.prototype.displayType = function (){
let table=document.getElementById('main-table');
let tableRow = document.createElement('tr');

let tableId = document.createElement('td');
let tableName = document.createElement('td');
let tablePrice = document.createElement('td');
let tableType = document.createElement('td');

tableId.textContent=`${this.foodID()}`;
tableName.textContent=this.foodName;
tablePrice.textContent=this.price;
tableType.textContent=this.foodType;

table.appendChild(tableRow);
tableRow.appendChild(tableId);
tableRow.appendChild(tableName)
tableRow.appendChild(tablePrice)
tableRow.appendChild(tableType)
}



// saving form data:

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    let foodName = event.target.foodName.value;
    let price = event.target.foodType.value;
    let foodType = event.target.price.value;
    let newType = new Type(foodName, foodType, price);
    newType.displayType()
    saveData();
}


// save the data in the local storage:

function saveData(){
    let stringData = JSON.stringify(allTypes);
    localStorage.setItem("Types", stringData)
}

function getData(){
    let retrivedData = localStorage.getItem("Types");
    console.log(retrivedData);
    let parsedData = JSON.parse(retrivedData);
    console.log(parsedData);
    console.log(typeof parsedData)

    //re-instantiation:

    for(let i=0; i<parsedData.length; i++){
       
        new Type(parsedData[i].foodName, parsedData[i].foodType, parsedData[i].price)
        
    }

    for(let i=0;i<allTypes.length; i++){
        allTypes[i].displayType();
    }
}

getData();
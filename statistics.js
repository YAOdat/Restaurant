'use strict'

Swal.fire({
  title: '<strong> Welcome to Statistics </strong>',
  icon: 'info',
  html:
    'Are you excited?',
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Yes! ',
  confirmButtonAriaLabel: 'Thumbs up, Not really',
  cancelButtonText:
    '<i class="-thumbs-down">No!</i>',
  cancelButtonAriaLabel: 'Thumbs down'

});


console.log(Swal)




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

Type.prototype.displayType = function (){
  let table=document.getElementById('new-table');
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

var fruitVeetablesCounter;
var starchyFoodCounter;
var diaryCounter;
var proteinCounter;
var fatCounter;

  for(let i=0;i<allTypes.length; i++){
    if (this.foodType=="Fruit and vegetables"){
      fruitVeetablesCounter=fruitVeetablesCounter+1;
    } else if(this.foodType=="Starchy food"){
      starchyFoodCounter=starchyFoodCounter+1;
    } else if(this.foodType=="Starchy food"){
      diaryCounter=diaryCounter+1;
    } else if(this.foodType=="Starchy food"){
      proteinCounter=proteinCounter+1;
    } else if(this.foodType=="Starchy food"){
      fatCounter=fatCounter+1;
    }
}


console.log(fatCounter);


const ctx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Fruit and vegetables', 'Starchy food', 'Dairy', 'Protein', 'Fat'],
        datasets: [{
            label: 'Food Type Statistics',
            data: [4, 2, 2, 3, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});





const chartTwo = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(chartTwo, {
    type: 'bar',
    data: {
        labels: ['Fruit and vegetables', 'Starchy food', 'Dairy', 'Protein', 'Fat'],
        datasets: [{
            label: 'Food Prices',
            data: [4, 2, 2, 3, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0.5
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

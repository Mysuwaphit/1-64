const prompt = require('prompt-sync')();
let weight = prompt("Input your weight(kg) : ")
let height = prompt("Input your height(cm) : ")

function BMI(){
   let meter = height/100;
   const BMI = weight/meter**2;
   console.log(`your BMI is ${BMI}`);  
}
BMI();
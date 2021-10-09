//MUST "npm install prompt-sync" before RUN code
const prompt = require('prompt-sync')();

let num = [];

function Randoms(){
    for(i=0; i<3; i++){
        //  num[i] = Number(Math.floor(Math.random()*101)) //random 0-100
        num[i] = Number(Math.floor((Math.random()*100) + 1)) //random 1-100
    }
    return num;
}

function Sum(){
  var sumNum = 0;
  num.forEach(num => sumNum += num) // spread num array and bring each element += sumNum
  return sumNum;
}

function Min(){
    var minNum = Math.min(...num); // spread num array and find min element
    return minNum;
}

function Max(){
    var maxNum = Math.max(...num); // spread num array and find max element
    return maxNum;
}

function ReRun(){
    menu = 0;
    menu = prompt('CHOOSE 1(sum) or 2(min) or 3(max) or 4(end) :')
    return menu;
}

function Menu(){

  switch(Number(menu)){
    case 1 : 
        console.log("Sum : " + Sum());
        ReRun();
        Menu();
        break;
    case 2 :
        console.log("Min : " + Min());
        ReRun();
        Menu();
        break;
    case 3 :
        console.log("Max : " + Max());
        ReRun();
        Menu();
        break;
    case 4 :
        break;
    default :
        console.log("Oops,404 Not Found.");
        ReRun();
        Menu();
        break;
    }
}

Randoms();
console.log("Random Number:"+ num);
var menu = prompt('CHOOSE 1(sum) or 2(min) or 3(max):');
console.log(num);
Menu();
const prompt = require('prompt-sync')();
var year  = prompt("Input Year : ")
var n
switch(year%12){
    case 0 : 
        n = 'monkey';
        break;
    case 1 : 
        n = 'rooster';
        break;
    case 2 : 
        n = 'dog';
        break;
    case 3 : 
        n = 'pig';
        break;
    case 4 : 
        n = 'rat';
        break;
    case 5 : 
        n = 'ox';
        break;    
    case 6 : 
        n ='tiger';
        break;
    case 7 : 
        n ='rabbit';
        break;
    case 8 : 
        n='dragon';
        break;
    case 9 : 
        n ='snake';
        break;
    case 10 : 
        n ='horse';
        break;
    case 11 : 
        n ='sheep';
        break;
}
console.log(n)


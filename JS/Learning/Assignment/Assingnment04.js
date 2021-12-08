let test = [];
let std = {id: 63130500000, name: 'KMUTT'};

console.log(test); //[]

//push() = add new value to lastest index in array

//1.
test.push(10,'Hello'); 

//2.
test.push(std);

//3.
let a = test.push(1000); //assign total number of index to variable 'a'

console.log(a); //4 (array.length)
console.log(test); //[ 10, 'Hello', { id: 63130500000, name: 'KMUTT' }, 1000 ]
//console.log(test.length === a? 'y':'n');

//fliter()

//1.
let sort = value => value > 50;
let filtered1 = test.filter(sort); //filter array by calling variable that stored arrow function 
console.log('filtered1 = ' + filtered1); //[ 1000 ]

//2.
let filtered2 = test.filter(value => value === 'Hello');//filter array by arrow function
console.log('filtered2 = ' + filtered2); //[ 'Hello' ]

//3.
let filtered3 = test.filter(value => value <= 10); //filter array by arrow function
console.log('filtered3 = ' + filtered3); //[ 10 ]

//4.
let filtered4 = test.filter(obj => obj.name === 'KMUTT'); //find word 'KMUTT' in case of things you want to filter contain in obj.
console.log(filtered4); //[ { id: 63130500000, name: 'KMUTT' } ] 

//pop() = remove lastest index of array

//1.
test.pop() //remove last index in array that is 10000
console.log(test); //[10, 'Hello', { id: 63130500000, name: 'KMUTT' } ]

//2.
let x = test.pop() //bring the lastest index to assign in variable 'x' and remove value in array at the same time that is { id: 63130500000, name: 'KMUTT'}
console.log(x); //[ { id: 63130500000, name: 'KMUTT' } ] 

//3.
test.pop(); //remove 'Hello'
console.log(test); // [ 10 ]

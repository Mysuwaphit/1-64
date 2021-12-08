//1.
let getCourse = () => 'INT201 Client Side Programming I';
//2.
let echo = text => text;
//3.
let isKMUTTStudent = student => (student.id.length == 13)?true:false; // student => student.id.length == 13;
//4.
let sum = (num1,num2,num3) => num1 + num2 + num3;
//5.
let greetingSomeOne = (name) => {
    const greeting = ['hi', 'hello', 'hey'];
    return `${greeting[Math.floor(Math.random(3))]},
    ${name}`;

}

console.log(isKMUTTStudent({id : [1,2,3,4,5,6,7,8,9,10,11,12,13]}));


let a = [];
let b = a;
b[0] = 1;
let c =[1]; 
console.log(a === b);
console.log(b == c);
console.log(b === c);

x =  0.3 - 0.2;
let xx = x.toFixed(1); //toFixed(n): n = number of decimal
console.log(typeof(xx));
console.log(xx);

let obj1 = {1: 'my'}
let obj2 = {1: 'package',}
function shallowEquality(object1, object2){
    const keys1=Object.keys(object1);
    const keys2=Object.keys(object2);
    if(keys1.length !== keys2.length){
        return false;
    }
    for(let key of keys1){
        if(object1[key] !== object2[key] ){
        return false;
        }
    }
    return true;
    // console.log(shallowEquality.keys1);
    }
console.log(shallowEquality(obj1,obj2)); 

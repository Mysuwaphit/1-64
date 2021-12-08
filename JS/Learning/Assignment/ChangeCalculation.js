function comeIn(price,recieve){
    change = recieve - price;
    change!=0 ? Change() : 'No changed';
}

function Change(){ 
    for (let i = change; i <= change; i--){
        if(change > 500){
            for (let j = change; j < 500; j--) {
                change -= 500;
                bill.push(500);
            } 
        }else if(change < 500 && change > 100 ){
            for (let j = change; j > 100; j--) {
                change -= 100;
                bill.push(100);
            } 
        }else if(change < 100 && change > 50 ){
            for (let j = change; j > 50; j--) {
                change -= 50;
                bill.push(50);
            } 
        }else if(change < 50 && change > 20 ){
            for (let j = change; j > 20; j--) {
                change -= 20;
                bill.push(20);
            } 
        }else if(change < 20 && change > 10 ){
            for (let j = change; j > 10; j--) {
                change -= 10;
                bill.push(10);
            } 
        }else if(change < 10 && change > 5 ){
            for (let j = change; j > 5; j--) {
                change -= 5;
                bill.push(5);
            } 
        }else if(change < 5 && change > 2 ){
            for (let j = change; j > 2; j--) {
                change -= 2;
                bill.push(2);
            } 
        }else if(change < 2 && change > 1 ){
            for (let j = change; j > 1; j--) {
                change -= 1;
                bill.push(1);
            } 
        }else{
            console.log('ไม่ทอนแล้วนะ');
        }
        return change,bill
    }
}

function totalChange(total,num){
    return total+num;
}
let change = 0;
let bill = [];
// bill.push(500);
// console.log(bill.reduce(totalChange));

comeIn(1463,2000); //537 [500,100*3,5,2]
console.log(change);
console.log(bill);


function changeCalculator(order, pay) {
    if (pay <= order) return -1;
    change = pay - order;
    let changeResult = {};
    changeResult.B500 = Math.floor(change / 500);
    changeResult.B100 = Math.floor((change % 500) / 100);
    changeResult.B50 = Math.floor(((change % 500) % 100) / 50);
    changeResult.B20 = Math.floor((((change % 500) % 100) % 50) / 20);
    changeResult.B5 = Math.floor(((((change % 500) % 100) % 50) % 20) / 5);
    changeResult.B2 = Math.floor((((((change % 500) % 100) % 50) % 20) % 5) / 2);
    changeResult.B1 = Math.floor((((((change % 500) % 100) % 50) % 20) % 5) % 2);
    return changeResult;
  }
  console.log(changeCalculator(222, 1000));
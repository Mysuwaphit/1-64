export const prompt = require('prompt-sync')();
export function message(msg1){
    function show(msg2 = " there."){
        return msg1 + msg2;
    }
     return show;
}
export let say = prompt("What do you want to say : ")
export let name = prompt("Input your Name : ");
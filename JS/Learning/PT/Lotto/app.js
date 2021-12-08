// console.log("Hello World")
// var name = "my"
// console.log(name)
// name = "Suwaphit"
// console.log(name)
// var Lastname = "Chotsawad"
// console.log(name + " " + Lastname)
// /*alert(name + " " + Lastname)
// var num = (4+2*2/2*2+4+1-5+19)+91
// alert(num)*/
// var x =20
// {
//     var x = 120
//     let y = 10
//     console.log(y)
// }
// console.log(x)

// var name2 = prompt("Name")
// console.log(typeof name2)
// console.log("Hello" + name2) 

var yourLotto = prompt("กรอกเลขที่ต้องการซื้อ :")
var realLotto = Math.floor(Math.random() * 100)
// console.log(yourLotto)
// console.log(realLotto)
// console.log("เลขที่ซื้อ :"+yourLotto+","+"เลขที่ออก :"+realLotto)
document.getElementById("result").innerHTML = realLotto
document.getElementById("yourNumber").innerHTML = yourLotto
if(realLotto == yourLotto)
    alert("ยินดีด้วย คุณแม่งโคตรดวงดี!!")
else
    alert("คุณถูก!!...แดก เสียใจจริงๆครับ")

//2.1 63130500126 suwaphit chotsawad
const prompt = require('prompt-sync')(); //เรียกใช้งานprompt
 let subject = {};
 let allSubject = [];
 function allSubjectRegistered(subjectId,subjectName,unit,grade){
        subject.subjectId = subjectId;
        subject.subjectName = subjectName;
        subject.unit = unit;
        subject.grade = grade;
        allSubject.push(subject); //เอาข้อมูลไปเก็บในช่องสุดท้ายของarray
        subject = {};
 } //เอาข้อมูลข้อsubject เก็บใน subject แล้วเอาsubject เก็บในarray

function addSubject(n){ //add subjectRegistered
    for (let index = 0; index < n; index++) {
        subjectId = prompt('subjectId : ')
        subjectName = prompt('Name :')
        unit = prompt('Unit : ')
        grade = prompt('Your grade : ')
        allSubjectRegistered(subjectId,subjectName,unit,grade);
    }
}
//2.2
let totalUnit = 0;
function UnitRegistered(){
    for (let index = 0; index < allSubject.length; index++) {
        let unit = 0;
        unit = allSubject[index].unit;
        totalUnit += unit;
        
    }
    return totalUnit;
}

//2.3
let score
let realScore = 0;
function UnitCalculated(){
    score = [];
    for (let index = 0; index < allSubject.length; index++) {
        
        switch(allSubject[index].grade){
        case 'A' :
            return realScore = 4;
            break;
        case 'B+':
            return realScore = 3.5;
            break;
        case 'B' :
            return realScore = 3;
            break;
        case 'C+' :
            return realScore =2.5;
            break;
        case 'C' :
            return realScore = 2;
            break;
        case 'D+' :
            return realScore = 1.5;
            break;
        case 'D' :
            return realScore = 1;
            break;
        default :
            return realScore = 0;
            break;
        }  
        
    }
    score.push(realScore);
}





addSubject(2);
let student = {id:63130500126,firstname : 'Suwaphit',
            lastName : 'Chotsawad',
            allSubjectRegistered: allSubject}
            // gpa : calculateGPA,
            // gpax : calculateGPAX,
            // status : statusStudent};//เป็นสถานภาพการศึกษาจาก stillเป็นstatusเพราะเข้ากันกว่า
console.log(student);
// UnitRegistered();
// console.log(totalUnit);
UnitCalculated();
console.log(score);
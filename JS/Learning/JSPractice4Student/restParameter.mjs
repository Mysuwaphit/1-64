// array destructuring with rest

export const users = [

    'pch', 'spp', 20,
    
    { weight: 22, height: 132, dob: '30-12-21' }
    
    ] ;
    
    const [firstname, lastname, age, ...other] = users ;
    
    console.log("firstname : " + firstname) ; // firstname : pch
    
    console.log("lastname : " + lastname) ; // lastname : spp
    
    console.log("name : " + firstname + " " + lastname) ; // name : pch spp
    
    console.log("age : " + age + " years old") ; // age : 20 years old
    
    console.log(other); // [ { weight: 22, height: 132, dob: '30-12-21' } ]
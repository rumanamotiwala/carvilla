// changeText();

// function changeText(){
//     setInterval(function(){
//         console.log("Hi");
//     }, 2000)
//     setTimeout(function(){
//         var myElement = document.getElementById('test');
//         myElement.innerText = "New Text test";
//     }, 3000);
// }

// var button = document.getElementById('contactBtn');
// button.addEventListener('click', function(){
//     myElement.innerText = "New Text";
// })

// var fButton = document.getElementById('floating-btn');
// fButton.addEventListener('click', function(){
//     // Scroll to the top of the page
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth' // Adds smooth scrolling effect
//     });
// })

// var sButton = document.getElementById('services');
// sButton.addEventListener('click', function(){
//     // Scroll to the top of the page
//     window.scrollTo({
//         top: 500,
//         behavior: 'smooth' // Adds smooth scrolling effect
//     });
// })


// console.log("Normal log: Hi There!")
// console.warn("Warning log: Hi There!")
// console.error("Error log: Hi There!")

// data types
// 1. number/integer
// 2. string => "john"
// 3. boolean => true/false OR 0/1 
// 4. object => {}
// 5. array => []

    // var age = 20;
    // var => 20 username = "Amaan";
    // var indian = true;
    // console.log(age, username, indian)

// operators and statements
// eg: =, +, -, *, /, % and var result = x+y
    // var x = 10
    // var y = 5
    // var result1 = x + y
    // var result2 = x - y
    // var result3 = x * y
    // var result4 = x / y
    // var result5 = x % y

    // console.log(result1)
    // console.log(result2)
    // console.log(result3)
    // console.log(result4)
    // console.log(result5)

// conditional operators
    // var age1 = 20
    // var age2 = 10
    // var username1 = "test"
    // var indian1 = true

    // ==
        // var result6 = (age1 == age2)
        // var result6 = age2 == 10
        // var result6 = username1 == "test1"
        // var result6 = indian1 == false
        // console.log(result6);

    // == and || / OR
    // var age1 = 20
    // var age2 = 10
    // var username1 = "test"
    // var indian1 = true

    // var result6 = (age1 == 20 || indian1 == false)
    // var result7 = (age1 == 10 || indian1 == true)
    // var result8 = (age1 == 10 || indian1 == false)
    // console.log(result6,result7,result8);

    // == and && / AND
    // var age1 = 20
    // var age2 = 10
    // var username1 = "test"
    // var indian1 = true

    // var result6 = (age1 == 20 && indian1 == true || indian1 == true)
    // var result7 = (age1 == 10 && indian1 == true)
    // var result8 = (age1 == 20 && indian1 == false)
    // console.log(result6,result7,result8);

    // syntax
    // if(condition){
    //     // statement 1
    // }else{
    //     // statement 2
    // }
    // var age1 = 20
    // var age2 = 10
    // var username1 = "test"
    // var indian1 = true

    // less than or equal to
    // if( age1 <= 20 ){
    //     console.log("age 1 is less than or equal to 20");
    // }else{
    //     console.log("age 1 is not less than 20");
    // }

    // geater than or equal to
    // if( age1 >= 20 ){
    //     console.log("age 1 is greater than or equal to 20");
    // }else{
    //     console.log("age 1 is not greater than 20");
    // }

    // var username = 'test'
    // var password = 'test@123'
    // if( username == 'test' && password == 'test@123'){
    //     console.log("Login successful.");
    // }else{
    //     console.log("Incorrect username or password.");
    // }

    // without for loop
    // console.log("1");
    // console.log("2");
    // console.log("3");
    // console.log("4");
    // console.log("5");

    // for loop
    // syntax
    // for( initialize ; condition ; increment/decrement){
    //     statement
    // }
    // for( var i=1 ; i <= 5 ; i = i+1){
    // for( var i=1 ; i <= 5 ; i += 1){
    

    // to print from 1 to 5
    // for( var i=1 ; i <= 10 ; i++){
    //     console.log(i);
    //     if(i == 6){
    //         break
    //     }
    // }

    // iteration 1
    // i = 1 then compare as per condition and print 1 then i++ => i = 2
    // compare as per condition and print 2 then i++ => i = 3
    // compare as per condition and print 3 then i++ => i = 4
    // compare as per condition and print 4 then i++ => i = 5
    // compare as per condition and print 5 then i++ => i = 6
    // compare as per condition and break the loop

    // to print from 5 to 1
    // for( var i=5 ; i < 0 ; i++){
    //     console.log(i);
    // }

    // objects {}

    // var user = {
    //     username: "Amaan",
    //     age: 20,
    //     indian: true,
    //     surname: "khan",
    //     textContent: "Original Text"
    // }
    
    // console.log(user.age);
    // console.log(user.username);
    // console.log(user.indian);
    // console.log(user);

    // array []
    // var users = [
    //     {
    //         username: "Amaan",
    //         age: 5,
    //         indian: true
    //     },
    //     "test",
    //     45,
    //     {
    //         username: "Umair",
    //         age: 10,
    //         indian: false
    //     },
    //     {
    //         username: "Shaibaaz",
    //         age: 15,
    //         indian: false
    //     },
    //     {
    //         username: "test",
    //         age: 19,
    //         indian: true
    //     }
    // ]
    // console.log(users[0].age);
    // console.log(users[1].age);
    // console.log(users[2].age);

    // for(var i=0 ; i < users.length ; i++){
        // if( users[i].age < 10 && users[i].username == "Amaan" ){
        //     console.log(users[i].age);
        // }
        // if( users[i].username != 'Amaan'){
        //     console.log(users[i].username);
        // }
    // }

    // patterns

    /*

    *
    **
    ***
    ****
    *****

    */
    // for(var i=1; i <= 5; i++){   // rows
    //     for( var n=1; n<=i; n++ ){ // colomns
    //         document.write("*")
    //     }
    //     document.write("<br>")
    // }

    /*

    *****
    ****
    ***
    **
    *

    */
    // for(var i=5; i >= 1; i--){   // rows
    //     for( var n=1; n<=i; n++ ){ // colomns
    //         document.write("*")
    //     }
    //     document.write("<br>")
    // }

    /*

    1
    12
    123
    1234
    12345

    */
    // for(var i=1; i <= 5; i++){   // rows
    //     for( var n=1; n<=i; n++ ){ // colomns
    //         document.write(n)
    //     }
    //     document.write("<br>")
    // }

    /*

    
    *
    **
    ***
    ****
    *****
    ****
    ***
    **
    *

    */

    // solution 1
    // for(var i=1; i <= 9; i++){   // rows
    //     if( i <= 5 ){
    //         for( var y=1; y<=i; y++){
    //             document.write("*")
    //         }
    //     }else{
    //         for( var n=1; n<=10-i; n++ ){ // colomns
    //             document.write("*")
    //         }
    //     }
    //     document.write("<br>")
    // }

    // solution 2
    // for(var i=1; i <= 5; i++){   // rows
    //     for( var n=1; n<=i; n++ ){ // colomns
    //         document.write("*")
    //     }
    //     document.write("<br>")
    // }
    // for(var i=4; i >= 1; i--){   // rows
    //     for( var n=1; n<=i; n++ ){ // colomns
    //         document.write("*")
    //     }
    //     document.write("<br>")
    // }

    /*

        *
       **
      ***
     ****
    *****
    */

    // for(var i=1; i <= 5; i++){   // rows
    //     for( var n=1; n<=5-i; n++){ // colomns
    //         document.write("&nbsp;")
    //     }
    //     for( var y=2; y<=i*2; y++){
    //         document.write("*")
    //     }
    //     document.write("<br>")
    // }
    
    var users = [
        {
            username: "Amaan",
            age: 5,
            indian: true
        },
        {
            username: "Umair",
            age: 10,
            indian: false
        },
        {
            username: "Shaibaaz",
            age: 15,
            indian: false
        },
        {
            username: "test",
            age: 19,
            indian: true
        }
    ]

    // for(var i=0 ; i < users.length ; i++){
    //     console.log(users[i].username,users[i].age);
    // }
    
    
    // users.map((i, index) => {
    //     console.log(i.username);
    // });

    // users.map((i) => {
    //     console.log(i.username, i.age);
    // })

    // filter
    
    // const filteredUser = users.filter((user)=>{
    //     return user.age < 15
    // })
    // console.log(filteredUser);

    // find
    // const findUser = users.find((user)=>{
    //     return user.username == 'Shaibaaz'
    // })
    // console.log(findUser);

    //find index
    // const userIndex = users.findIndex((user)=>{
    //     return user.username == 'Amaan'
    // })
    // console.log(userIndex);

    // function printUserName(){
    //     console.log("Amaan");
    // }
    // printUserName()


    // type 2
    // function sub(num1,num2){
    //     if( num1 < num2){
    //         console.log(num2 - num1);
    //     }else{
    //         console.log(num1 - num2);
    //     }
    // }
    // sub(10,5)
    
    // type 3
    // function getName(){
    //     return "Amaan";
    // }
    // var name = getName()
    // console.log(name);

    // type 4
    // function subRet(num1,num2){
    //     if( num1 < num2){
    //         return num2 - num1;
    //     }else{
    //         return num1 - num2;
    //     }
    // }
    // var result = subRet(5,10)
    // console.log(result);

    
    // const printUserName = () => {
    //     console.log("Amaan");
    // }
    // printUserName()
    
    // function function_name(){
    // statement
    // }

    // // syntax
    // const function_name = () => {

    // }
    
    // () => {
        
    // }
    
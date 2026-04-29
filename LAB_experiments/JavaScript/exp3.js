// Function : block of code that performs specific task and can be reused 
    function addTwoNum(a,b){
        console.log(a+b);
        
    }
    addTwoNum(29,37);

   function add(n1,n2){
    let result = n1+n2 
    return result
    console.log(result);//after return function =>  code does not executed
    
   } 
   let sum =add(45,67);
   console.log(sum);



   function loginUser(user_name){
    return `${user_name}just loged in`
   }
   console.log(loginUser("Pratiksha " ));// when string is empty then undefined is returned
   

   //====spread operator====
   function f1(...n1){//spread operator => used to bundle multiple values and return in one varible in array format
    return n1
   }
  let fun =f1(10,60,70);
   console.log(fun);
   

   //object passing to function 
   const obj={
    name :"Pratiksha",
    age :20
   }

   function handdleObj(anyobj){
    console.log(`My Name is ${anyobj.name}`);
    }
   handdleObj(obj);

   // with array
   let arr=[20,30,40]
   function handdlearr(anyarr){
    console.log(`${anyarr[0]}`);
    return anyarr[2]
    }
   handdlearr(arr);



   //arrow function ,use ,this why not used , diff bet arrow and simple function
//    addTwoNo=(n1,n2)=>{
//     return n1+n2
//    }

function chai(){
    let username = "Pratiksha"
    console.log(this);
    
}
chai();


const arrfun = ()=>{
     let username = "Pratiksha"
    console.log(this); // empty object is returned
}
 arrfun();


 // 1 : what is arrow function 
 // 2 :what is this keyword
 // 3 :diff bet arrow and simple function
 //4 :why do not use this in arrow function

 //5 : write a code for arrow fun with 2 example
    let sumfun =(n1,n2)=>{
        return n1+n2
    } 
    let myarrow =sumfun(90,90);
    console.log(myarrow);
    

 // 6:write code for switch case 
 console.log("switch case examples :");
 
    let ch =3
    switch(ch){
        case 1:console.log(`First choice`);
        break
        case 2:console.log(`second choice`);
        break
        default:console.log(`Wrong choice`);
        
    }
console.log();

 //7:how to use truthy and falsy in javascript with examples 

  let falsyName="";//falsy value
  if(falsyName){
    console.log(`Hello ! ${falsyName}`);//because of not defined name it will not be executed
    }else{
        console.log(`please enter name`);
        
    }

   
 //8:how to use ternery operators in javascript
 console.log(" ternery operators");
 let age = 18;

let result = (age >= 18) ? "Adult" : "Minor";

console.log(result);
 // 9:write code for how to use  loops in array 
 //10:while,do-while,foreach,forin,
 console.log("while loop");
 let i = 0;

while (i < 3) {
    console.log(i);
    i++;
}
console.log("Do-While loop")
let j = 0;

do {
    console.log(j);
    j++;
} while (j < 3);


console.log("forEach loop")
let arr2 = [1, 2, 3];

arr.forEach(function(x) {
    console.log(x);
});
console.log("for..in loop");
let arr3 = [10, 20, 30];

for (let i in arr) {
    console.log(i);        // index
    console.log(arr[i]);   // value
}
 //11 :diff bet for-each and for-off loop
 //12: how to use map and filter function in js
 console.log("map function");
 let arr4 = [1, 2, 3];

let result1 = arr.map(x => x * 2);

console.log(result1); // [2, 4, 6]

console.log("filter function");

let arr5 = [10, 20, 30, 40];

let result2 = arr.filter(x => x > 20);

console.log(result2); // [30, 40]
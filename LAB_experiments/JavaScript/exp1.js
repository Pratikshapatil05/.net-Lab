const accountid = 102
//accountid=104
// constant value cannot  be changed it remains same once declared 
console.log(accountid);
document.writeln("accountid :",accountid ,'<br>')


document.writeln('let/const')
let a=10
var b=20
{
    let a= 100
    var b =200
    console.log(a,b) 
document.writeln('a :',a,'b:',b ,'<br>')

}
console.log(a,b);
document.writeln('a :',a,'b:',b  ,'<br>')

//variable declaration 

console.log('varibles declaration ');

let account_id =20 
console.log(typeof(accountid),  accountid);
document.writeln('account_id :',account_id,'<br>')

let c_name ="Yash" 
document.writeln('c_name:',c_name,'<br>')
console.log(typeof(c_name), c_name);

let isactive  =true 
console.log(typeof(isactive),   isactive);
document.writeln('isactive:',isactive,'<br>')


let acc_number =20354n 
console.log(typeof(acc_number), acc_number);


let emi =null 
console.log(typeof(emi),    emi);

let loan_no ;
console.log(typeof(loan_no),    loan_no);

let user_id =Symbol('user_id')
console.log(typeof(user_id),    user_id);

console.log();


// activity1 : display student information 
console.log('activity 1');

let s_name="Shreya"
console.log(typeof(s_name));

let s_age =20 
console.log(typeof(s_age),s_age);

let s_id =23109
console.log(typeof(s_id),s_id);

let email= 'shreya@gmail.com'
console.log(typeof(email),email);
document.writeln('email:',email,'<br>')
console.log();

//activity2 : check odd even
console.log();

let number =34
if(number%2 == 0){
    console.log("number is even ");
    
}else{
    console.log("number is odd");
    
}
console.log();

//activity3 : check pass/ fail
console.log();

let marks =50

if(marks >=35){
    console.log("student is passed");
    
}else{
    console.log("failed");
    
}
console.log();

//activity4 : display numbers
console.log();

let num =1
while(num <=10){
    console.log(num);
    document.writeln(num,'<br>')
    num ++ 
    
}
console.log();


// activity5
let x =10
y=x
console.log(y);
{
 x=200
 console.log(x,y);
 
}




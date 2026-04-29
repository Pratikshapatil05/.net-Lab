//=====activity 1 : declare array,function,object =======
console.log("Activity 1");
        let CarArray =["volvo","ferrari","TATA"];
        let jsArray=["tree",[1,2,3],4,true];// js array can hold mixed datatypes
        console.log(`My Array is ${CarArray}`);
        console.log(`JS Array is ${jsArray}`);


//function declaration 
        function sum(a,b){
            return a+b;
        }console.log();

//object declaration
    let obj= {
        fname :"Pratiksha",
        age :21
    }
console.log();

//=======activity 2 :reverse a number math.floor()=======
console.log("Activity 2");
        let num = 1234;
        let rev = 0;

        while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
        }

        console.log(rev); 
        console.log();



// activity 3 :check palindrome
//4: fibonnacci series 
console.log("Activity 3");
console.log("fibonnacci series : ");
        let n1 = 10;
        let a = 0, b = 1;

        console.log(a);
        console.log(b);

        for (let i = 2; i < n1; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
        }
console.log();
//5 : find larges number in array
console.log("Activity 5");
console.log("Largest Number");
        let arr = [10, 25, 5, 40, 30];
        let max = arr[0];

        for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        }

        console.log("Largest number:", max);
        console.log();

//  remove duplicate in array
console.log("Activity 6");
let arr1 = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

for (let i = 0; i < arr1.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < unique.length; j++) {
    if (arr1[i] == unique[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    unique.push(arr1[i]);
  }
}

console.log("Array without duplicates:", unique);
console.log();
// find missing number in array
let arr2 = [1, 2, 4, 5];
let n = 5;
let expectedSum = n * (n + 1) / 2;
let actualSum = 0;

for (let i = 0; i < arr2.length; i++) {
  actualSum = actualSum + arr2[i];
}

console.log("Missing number:", expectedSum - actualSum);
console.log();

// find sum of array 
let arr3 = [1, 2, 3, 4, 5];
let arrSum = 0;

for (let i = 0; i < arr3.length; i++) {
  arrSum = arrSum + arr[i];
}

console.log("Sum of array:", arrSum);
console.log();




// =========string ==============
console.log("Activity 7");
// 1 :vowel  
    let str1 = "hello";
    let count = 0;

    for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];

    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
        count++;
    }
    }

console.log("Number of vowels:", count);
console.log();

// check palindrome in string
console.log("Activity 8");
    let str = "Patil";
    let reve = "";

    for (let i = str.length - 1; i >= 0; i--) {
    reve = reve + str[i];
    }

    if (str === rev) {
    console.log("Palindrome");
    } else {
    console.log("Not Palindrome");
    }
console.log();



//========number==========
// check prime number
console.log("Activity 9");
let num1 = 7;
let isPrime = true;

if (num1 <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num1; i++) {
    if (num1 % i == 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime number");
} else {
  console.log("Not a prime number");
}
console.log();
// factorial number

// function
// function to find even or odd 
console.log("Activity 10");
        function checkEvenOdd(num) {
        if (num % 2 == 0) {
            console.log("Even");
        } else {
            console.log("Odd");
        }
        }

        checkEvenOdd(10); // Even
        checkEvenOdd(7);  // Odd
        console.log();

// function to dfind sum of array
console.log("Activity 11");
        function sumArray(arr) {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }

        return sum;
        }

        let numbers = [1, 2, 3, 4, 5];
        console.log(sumArray(numbers)); 
        console.log();

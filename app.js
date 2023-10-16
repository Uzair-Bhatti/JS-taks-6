// chapter 35 to 38

//! Q1
// var date = new Date();

// document.write(date);

// Q2
// function greetUser(firstName, lastName) {
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     var fullName = firstName + ' ' + lastName;
//     var greeting = 'Hello, ' + fullName + '!';
//     console.log(greeting)
//     return greeting;
// }
// greetUser()

// Q3
// function sum(a, b) {
//     var a = +prompt("enter first number");
//     var b = +prompt("enter second number")
//     var result = a + b;
//     console.log(result);
// }
// sum()

// Q4
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var operator = +prompt("enter operator")
// function add(num1, num2) {
//     return num1 + num2;
//   }

//   function subtract(num1, num2) {
//     return num1 - num2;
//   }

//   function multiply(num1, num2) {
//     return num1 * num2;
//   }

//   function divide(num1, num2) {
//     if (num2 !== 0) {
//       return num1 / num2;
//     } else {
//       return "Division by zero is not allowed";
//     }
//   }

//   function calculateAndDisplay(num1, num2, operator) {
//     var result;

//     if (operator === '+') {
//       result = add(num1, num2);
//     } else if (operator === '-') {
//       result = subtract(num1, num2);
//     } else if (operator === '*') {
//       result = multiply(num1, num2);
//     } else if (operator === '/') {
//       result = divide(num1, num2);
//     } else {
//       result = "Invalid operator";
//     }

//     document.write("Result: " + result);
//   }
// calculateAndDisplay()  

// Q5
// function square(a, a){
//     var a = +prompt("Enter number");
//     var result = a * a;
//     console.log(result);
// }
// square()

// Q6
// function factorial(n) {
//     var n = +prompt("Enter number");
//     var answer = 1;

//     if (n === 0 || n === 1) {
//         return answer
//     } else if(n > 1){
//         for (var i = n; i > 1; i--) {
//             answer = answer * i
//         }
//         return answer
//     } else{
//         alert("Please enter positive number");
//     }
//     console.log(answer);
// }
// factorial()
// console.log("Factorial of " + n + " : " + answer)
// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }
//     else if(n > 1){
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }
//     else{
//       return "number has to be positive."
//     }
//   }
//   var n = +prompt("Enter number");
//   answer = factorial(n)
//   console.log("Factorial of " + n + " : " + answer);

// Q7
// function counting(start, end) {
//     var start = +prompt("Enter starting number");
//     var end = +prompt("Enter end number")

//     if (start <= end) {
//         for (var i = start; i <= end; i++) {
//           document.write(i + "<br>");
//         }
//       } else {
//         for (var i = start; i >= end; i--) {
//           document.write(i + "<br>");
//         }
//       }
// }
// counting()

// Q8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//       return num * num;
//     }

//     const baseSquare = calculateSquare(base);
//     const perpendicularSquare = calculateSquare(perpendicular);
//     const hypotenuseSquare = baseSquare + perpendicularSquare;
//     const hypotenuse = Math.round(hypotenuseSquare);

//     return hypotenuse;
//   }

//   // Example usage:
//   const baseLength = +prompt("Enter base");
//   const perpendicularLength = +prompt("Enter perpendicular");
//   const hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
//   console.log(`The hypotenuse is ${hypotenuse}`);

// Q9
// i
// function calculateRectangleAreaByValues(width, height) {
//     var width = +prompt("Enter width of rectangle");
//     var height = +prompt("Enter height of rectangle");
//     return width * height;
// }
// var area1 = calculateRectangleAreaByValues()
// console.log("Area of rectangle is " + area1)

// ii
// function calculateRectangleAreaByVariables() {
//     var width = arguments[0];
//     var height = arguments[1];
//     return width * height;
// }
// var w = +prompt("Enter width of rectangle");
// var h = +prompt("Enter height of rectangle");
// var area2 = calculateRectangleAreaByVariables(w, h);
// console.log("Area of rectangle is " + area2)

// Q10
// function isPalindrome(str) {
//     // Remove spaces and convert to lowercase for case-insensitive comparison
//     str = str.replace(/ /g, "").toLowerCase();

//     const length = str.length;

//     for (let i = 0; i < Math.floor(length / 2); i++) {
//         if (str[i] !== str[length - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }

// const inputString = "madam";
// const result = isPalindrome(inputString);

// if (result) {
//     console.log(`"${inputString}" is a palindrome.`);
// } else {
//     console.log(`"${inputString}" is not a palindrome.`);
// }

// Q11
// function capitalizeFirstLetterOfEachWord(inputString) {
//     const words = inputString.split(' ');
  
//     const capitalizedWords = words.map(word => {

//       if (word.length > 0) {
//         return word[0].toUpperCase() + word.slice(1);
//       }
//       return word;
//     });
  
//     const resultString = capitalizedWords.join(' ');
  
//     return resultString;
//   }
  
//   const inputString = "this is a sample string";
//   const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
//   console.log(capitalizedString); // "This Is A Sample String"

// Q12
// function findLongestWord(inputString) {
//     const words = inputString.split(' ');
  
//     let longestWord = '';
  
//     for (const word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
  
//     return longestWord;
//   }
  
//   const inputString = "Web Development Tutorial";
//   const longestWord = findLongestWord(inputString);
//   console.log(`The longest word is: ${longestWord}`);

// Q13
// function countOccurrencesOfLetter(inputString, letter) {

//     let count = 0;
  
//     inputString = inputString.toLowerCase();
//     letter = letter.toLowerCase();
  
//     for (let i = 0; i < inputString.length; i++) {
//       if (inputString[i] === letter) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   const inputString = 'JSResourceS.com';
//   const letterToCount = 's';
//   const result = countOccurrencesOfLetter(inputString, letterToCount);
//   console.log(`The letter "${letterToCount}" appears ${result} times in the string.`);

// Q14
// i
// function calcCircumference(){
//    var radius = +prompt("Enter radius of circle");
//    return radius * 6.284;
//}
// var area1 = calcCircumference();
// console.log("Area of circle is " + area1);

// ii
// function calcArea(){
//     var radius = +prompt("Enter radius of circle");
//     return radius * radius * 3.142;
// }
// var area2 = calcArea();
// console.log("Area of circle is " + area2);
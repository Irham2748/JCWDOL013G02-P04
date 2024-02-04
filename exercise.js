// ====================================================================================================================================
// Soal No. 1
// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// Parameters : height → triangle height

// // cara 1
// function triangelPattern(height) {
//   let counter = 1;
//   // looping jumlah baris
//   for (let i = 1; i <= height; i++) {
//     // menampung item per baris
//     let row = '';
//     // looping jumlah item based on baris keberapa
//     for (let j = 1; j <= i; j++) {
//       row += (counter < 10 ? '0' : '') + counter + " ";
//       counter++;
//     }
//     console.log(row);
//   }
// }
// // fungsi menampilkan memasukkan nilai triangelPattern
// triangelPattern(5);

// cara 2
// function segitigaSiku(input) {
//   var value = 1;
//   for (var i = 1; i <= input; i++) {
//     var s = '';
//     for (var j = 1; j <= i; j++) {
//       s += value++ + ' ';
//     }
//     console.log(s);
//   }
// }
// segitigaSiku(5);
// ====================================================================================================================================

// ====================================================================================================================================
// Soal No. 2
// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

// function myFunctionLoop1(input) {
//   var status;
//   for (var i = 1; i <= input; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       status = 'FIZZBUZZ';
//       console.log(`${i} adalah ${status}`);
//     } else if (i % 3 == 0) {
//       status = 'FIZZ';
//       console.log(`${i} adalah ${status}`);
//     } else if (i % 5 == 0) {
//       status = 'BUZZ';
//       console.log(`${i} adalah ${status}`);
//     } else {
//       console.log(`Angka tidak valid`);
//     }
//   }
// }
// myFunctionLoop1(20);
// ====================================================================================================================================

// ====================================================================================================================================
// Soal No. 3
// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”

// function myFunction3(weight, height) {
//     var input = weight / Math.pow((height/100), 2); 
//   if (input < 18.5) {
//     return "less weight";
//   } else if (input >= 18.5 && input <= 24.9) {
//     return "ideal";
//   } else if (input >= 25.0 && input <= 29.9) {
//     return "overweight";
//   } else if (input >= 30.0 && input <= 39.9) {
//     return "very overweight";
//   } else {
//     return "obesity";
//   }
// }
// console.log(myFunction3(20, 174));
// ====================================================================================================================================

// ====================================================================================================================================
// Soal No. 4
// Write a function to remove all odd numbers in an array and return a new array that contains even 
// numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

// function filterEvenNumbers(arr) {
//   const evenNumbers = [];
//   for (let i = 1; i <= arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNumbers.push(arr[i]);
//     }
//   }
//   return evenNumbers;
// }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbersArray = filterEvenNumbers(arr);

// console.log(evenNumbersArray);
// ====================================================================================================================================

// ====================================================================================================================================
// Soal No. 5
// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

// function myFunctionArrSplit(str) {
//     const words = str.split(' ')
//     return words;
// }
// const str = "Hello World";
// const wordsArr = myFunctionArrSplit(str);

// console.log(wordsArr);
// ====================================================================================================================================

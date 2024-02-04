// // For … of loop
// let fruits = ['Apple', 'Orange', 'Plum'];
// for (let fruit of fruits) {
//     console.log(fruit);
// }
// /* Jawaban
// Apple
// Orange
// Plum
// */

// // Function Declaration 
// function retangle(angka) {
//     return angka * angka;
// }
// const x = retangle(8);
// console.log(x);
// /*
// 64
// */

// // Function Expression 
// const luas = function(angka) {
//     return angka * angka;
// }
// const x = luas(9);
// console.log(x);
// /* 
// 81
// */

// // Calling Function 
// const x = luas(7);
// function luas(angka) {
//     return angka * angka;
// }
// console.log(x)
// /*
// 49
// */

// // Function Scope
// // Can not access variable "nama" here
// function perkenalan() {
//     const nama = "Muhammad Irham";
//     // "Muhammad Irham" only accessible within this scope 
//     return nama; 
// }
// // Can not access variable "nama" here

// // Parameter & Argument
// function greeting(nama) {
//     const ucapan = "Selamat";
//     return `${ucapan}, saudara ${nama} dinyatakan lulus`
// }
// console.log(greeting("Muhammad Irham"));

// // Default Parameter 
// function sum(a , b =2) {
//     return a + b;
// }
// console.log(sum(6,8));
// console.log(sum(6));

// // Rest Parameters
// function myDaftar(a,b,c,d,e,f,g,h) {
//     console.log("a", a);
//     console.log("b", b);
//     console.log("c", c);
//     console.log("d", d);
//     console.log("e", e);
//     console.log("f", f);
//     console.log("g", g);
//     console.log("h", h);
// }
// myDaftar("Muhammad Irham", "Aml Latifah", "Lundu Holong Pandjaitan", "Farhan Hazim", "Frensis Owen", "Riau Sahbani", "Rika Putriana", "Aulia Ikrar");

// // Nested Function 
// const angka = getNilai(98);
// function getNilai(angka) {
//     function state1() {
//         return "Skor saudara adalah " + angka;
//     }
//     function state2() {
//         return "Grade saudara sangat memuaskan"
//     }
//     return state1() + " dan" + state2()
// }
// console.log(angka);

// // Closure
// const greetingIrham = greeting("Muhammad Irham");
// function greeting(name) {
//     const defaultMessage = "Hellooooo";
//     return function() {
//         return defaultMessage +" "+ name;
//     };
// }
// console.log(greetingIrham());

// Curriyng 1
function multiplier (factor, number) {
    return factor * number;
}
console.log(multiplier(9, 5));
console.log(multiplier(6, 5));

// // Curriyng 2
// function multiplier (factor) {
//     return function (number) {
//         return factor * number;
//     }
// }
// const mul1 = multiplier(4);
// const mul2 = multiplier(5);
// console.log(mul1(6));
// console.log(mul1(9));

// // Recursive 
// let hasil = countDown(5);
// function countDown(fromNumber) {
//     console.log(fromNumber);
//     let nextNumber =  fromNumber -1;
//     if(nextNumber >= 0) {
//         countDown(nextNumber);
//     }
// }

// // Arrow Function 
// const square = (number) => number * number;
// const hasil = square(10)
// console.log(hasil);

// const hobbies = ["badminton", "football"];
// hobbies [0] = "PB";
// console.log(hobbies);
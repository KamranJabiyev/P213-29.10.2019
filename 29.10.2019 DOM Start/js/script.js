//Homework
// let text = "Kamran Jabiyev";

// function FindLetter(text) {
//     let result = {};
//     for (let char of text) {
//         if (result[char] === undefined) {
//             result[char] = 1;
//         } else {
//             result[char] += 1;
//         }
//     }
//     return result;
// }

//Custom array class
// let arr = new Array(1, 2, true, "Kamran");
// console.log(arr.find(n => n === 1));

// class MyArray {
//     constructor() {
//         this.classArr = [];
//         for (let elm of arguments) {
//             this.classArr.push(elm)
//         }
//     }
//     customFind(func) {
//         let result = undefined;
//         for (let elm of this.classArr) {
//             if (func(elm))
//                 result = elm;
//         }
//         return result;
//     }
// }

// let arr = new MyArray(1, 2, true, "Kamran");
// console.log(arr.customFind(n => n === 15))
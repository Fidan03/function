//Task 3
// let isEven = (num) => num % 2 === 0 ? true : false
// let num = 7
// console.log(isEven(num))




//Task 4
// function findLargest(num) {
//     let max = num[0];
//     for (i = 1; i < num.length; i++) {
//         if (num[i] > max) {
//             max = num[i];
//         }
//     }
//     return max
// }

// let num = [10, 20, 15,5]
// console.log(findLargest(num))




//Task 5
// let word = ("dodifosfo")

// function vowelsCount (word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i ++) {
//         let letter = word[i];
//         if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//             count ++
//         }
//     }
//     return count
// }
// console.log(vowelsCount(word))




//Task 6
// let string = "hello"

// function reverseString (string) {
//     let reversed = '';
//     for ( let i = string.length - 1; i >= 0; i --) {
//         reversed += string [i];
//     }
//     return reversed;
// }

// console.log(reverseString(string))




//Task 7 
// let num = 4;

// function table (num) {
//     for (let i=1; i <= 10; i ++ ) {
//         let result = num * i; 
//         console.log(`${num} * ${i} = ${result}`);
//     }
// }

// table(num);





//Task 8
let num = 2

function factorial (num) {
    let result = 1;

    for (i = 1; i <= num; i ++) {
        result *= i;
    }
    return result;
}

console.log(factorial(num))






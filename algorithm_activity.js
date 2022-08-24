// ALGO 1:

let n1 = parseInt(prompt("Please input a number"))

function oddEven(n1){
    if (n1 % 2 == 0){
        return true
    }else {
        return false
    }
}

if(oddEven(n1)){
    console.log("n1 is even")
} else {
    console.log("n1 is odd")
}


// ALGO 2:

// let n1 = parseInt(prompt("Please insert a number"))

// let sum = 0

// for (let i = n1 ; i > 0; i--){
//     sum = sum + i
// }

// console.log(sum)







// Other solutions
// if(Number.isInteger(option)){
//     if(option == 1){
//         let value = parseInt(prompt("Input integer: "))

//         if(Number.isInteger(value)){
//             check(value);
//         }
//         else{
//             console.log("Invalid input")
//         }

//         function check(val){
//             if(val % 2 == 0){
//                 document.getElementById("msg").innerHTML = `<h1>${val} is an even number</h1>`
//                 return 
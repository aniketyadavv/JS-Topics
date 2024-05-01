// const let and var 

const accountId = 143222 //it will be constant throughout the code.

let email = "xyz@gmail.com"
var password = "12345"
accountName = "PNB"

/*
Prefer not to use var because of it's issues in functional scope 
*/

// accountId = 67676
// console.log('accountId:', accountId)
// console.log(accountName)
// console.log(email)

console.table([accountId,email,password,accountName])
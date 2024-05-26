const name = "Aniket"
const myAge = 21

console.log(name + myAge) // outdated method 

console.log(`My name is ${name} and my age is ${myAge}`)


const gameName = new String('aniket-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const anotherName= "      aniket    "
console.log("String without trim",anotherName);
console.log("String wiht trim",anotherName.trim());

const url = "https://aniketyadav.com/aniket%20yadav/"
console.log(url.replace('%20','-'));
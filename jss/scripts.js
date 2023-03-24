// variables to be used
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var gender = ["Male", "Female"] Try if else to resolve this before asking for date
//day 0 is Sunday

// Get day script. Return the weekday 

const d = new Date("2023-02-22");
let day = days[d.getDay()];
console.log(day);


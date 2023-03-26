let form = document.querySelector('form');
let submitButton = document.querySelector('#submit-button');
console.log(submitButton);
form.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event);

  let gstatus = form.querySelector
  ('#birth-info').value;
})

// document.addEventListener('DOMContentLoaded') ...d.
// variables to be used
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//default variable values
var gender = "Female"
akanName = "Null"
var nameError = "Name is in error. Recheck gender and day of birth"

//Get gender info from DOM ..... still failing for review
// let gender = document.getElementById("gender-info").addEventListener("click", functiion() {
//   alert("Hello World!");
// })
// console.log(gender)
// Get day of the week using getDay function
const bday = new Date("2023-03-22");
let day = weekday[bday.getDay()];
console.log(day)
document.getElementById("dayOfBirth").innerHTML = day;


// Get gender value from gender buttons using DOM
switch (gender) {
  case "Male":
    gender = "Male";
    // Males names checker
    if (day == "Sunday") {
      akanName = maleNames[0];
    } else if (day == "Monday") {
      akanName = maleNames[1];
    } else if (day == "Tuesday") {
      akanName = maleNames[2];
    } else if (day == "Wednesday") {
      akanName = maleNames[3];
    } else if (day == "Thursday") {
      akanName = maleNames[4];
    } else if (day == "Friday") {
      akanName = maleNames[5];
    } else if (day == "Saturday") {
      akanName = maleNames[6];
    } else {
      (console.log(nameError));
    }
    console.log(akanName);
    document.getElementById("aName").innerHTML = akanName;
    break;
  case "Female":
    gender = "Female";

    // Female names checker
    if (day == "Sunday") {
      akanName = femaleNames[0];
    } else if (day == "Monday") {
      akanName = femaleNames[1];
    } else if (day == "Tuesday") {
      akanName = femaleNames[2];
    } else if (day == "Wednesday") {
      akanName = femaleNames[3];
    } else if (day == "Thursday") {
      akanName = femaleNames[4];
    } else if (day == "Friday") {
      akanName = femaleNames[5];
    } else if (day == "Saturday") {
      akanName = femaleNames[6];
    } else {
      (console.log(nameError));
    }
    console.log(akanName);
    document.getElementById("aName").innerHTML = akanName;
    break;
}
// let testing = document.querySelectorAll('form')
// console.log(testing);

//let form = document.querySelector('form');
//let submitButton = document.querySelector('#submit-button');
//console.log(submitButton);
//form.addEventListener('submit', function(event){
//  event.preventDefault();
//  console.log(event);

//  let gender = form.querySelector
//  (gender).value;
// let dateOfBirth = document.querySelector('bday');
// console.log(bday.value)
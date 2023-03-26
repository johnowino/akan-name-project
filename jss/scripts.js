// variables to be used
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
//default variabl values
var gender = "Male"
var day = "Wednesday"
akanName = "Null"
var nameError = "Name is in error. Recheck gender and day of birth"

// Need to introduce switch to select either male or female array

// Males names checker
if (day == "Sunday") {
akanName = maleNames[0];
} else if 
(day == "Monday") {
akanName = maleNames[1];
} else if
(day == "Tuesday") {
akanName = maleNames[2];
} else if
(day == "Wednesday") {
akanName = maleNames[3];
} else if
(day == "Thursday") {
akanName = maleNames[4];
} else if
(day == "Friday") {
akanName = maleNames[5];
} else if
(day == "Saturday") {
akanName = maleNames[6];
} else {
(console.log(nameError));
}
console.log(akanName);

// Fenale names checker
if (day == "Sunday") {
akanName = femalemaleNames[0];
} else if 
(day == "Monday") {
akanName = femaleNames[1];
} else if
(day == "Tuesday") {
akanName = femaleNames[2];
} else if
(day == "Wednesday") {
akanName = femaleNames[3];
} else if
(day == "Thursday") {
akanName = femaleNames[4];
} else if
(day == "Friday") {
akanName = femaleNames[5];
} else if
(day == "Saturday") {
akanName = femaleNames[6];
} else {
(console.log(nameError));
}
console.log(akanName);
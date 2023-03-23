var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var gender = ["Male", "Female"]
var date = 01
var month = 01
var year = 1900

// Date error control flow
if (date > 31) {
  console.log("Enter a valid date between 1 and 31 for Jan, Mar, May,July, Aug, Oct, Dec; and between 1 and 30 for Apr, Jun, Sep and Nov; and for Feb between 1 & 29 for a leap year and 1 & 28 for a non-leap year");
} else if (date <= 0) {
  console.log("Enter a valid date between 1 and 31 for Jan, Mar, May,July, Aug, Oct, Dec; and between 1 and 30 for Apr, Jun, Sep and Nov; and for Feb between 1 & 29 for a leap year and 1 & 28 for a non-leap year");
} else {
  console.log("Proceed and enter month of birth as MM");
}

// Month error control flow
if (month > 12) {
  console.log("Enter a valid month between 1 and 12");
} else if (month <= 0) {
  console.log("Enter a valid month between 1 and 12");
} else {
  console.log("Proceed and enter year of birth as YYYY");
}

// Year error control flow
if (year < 1900) {
  console.log("Enter a valid year between 1900 and today");
} else {
  console.log("Proceed and select your gender");
}
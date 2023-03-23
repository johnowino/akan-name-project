var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var gender = ["Male", "Female"]
var date = 01
var month = 01
var year = 1900

if (date > 31) {
  console.log("Enter a valid date between 1 and 31 for Jan, Mar, May,July, Aug, Oct, Dec; and between 1 and 30 for Apr, Jun, Sep and Nov; and for Feb between 1 & 29 for a leap year and 1 & 28 for a non-leap year");
} else if (date <= 0) {
  console.log("Enter a valid date between 1 and 31 for Jan, Mar, May,July, Aug, Oct, Dec; and between 1 and 30 for Apr, Jun, Sep and Nov; and for Feb between 1 & 29 for a leap year and 1 & 28 for a non-leap year");
} else {
  console.log("Proceed and select gender")
}

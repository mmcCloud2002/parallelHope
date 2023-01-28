//get elements

let day = document.querySelector('.days');
let hour = document.querySelector('.hours');
let minute = document.querySelector('.minutes');
let second = document.querySelector('.seconds');

function setCountDown(){
//set countdown date
// Need to find out release date
let countDownDate = new Date('Jan 01, 2024 16:40:25').getTime();

//update countdown every second
let updateCount = setInterval(function(){


 //get todays date and time
let todayDate = new Date().getTime;


//get distance between now and countdown date
let distance = countDownDate - todayDate

let days = Math.floor(distance / (1000 * 60 * 60 * 24));

let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))

let seconds = Math.floor(distance % (1000 * 60) /1000);


//display values
day.textContent = days;
hour.textContent = hours;
minute.textContent = minutes;
second.textContent = seconds;


},1000)
}

setCountDown()
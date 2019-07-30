
var submit = $('.submit');
// var nextPeriod = $('.nextPeriod');

submit.on('click', constantCountdown);





function startCountdown() {
  var countdownDate = new Date("August 3, 2019 15:37:25").getTime();

  var currentDate = new Date().getTime();

  var distance = countdownDate - currentDate;



  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var countdown = $('.countdown');
  countdown.empty();
  countdown.append(`<h2>${days} d ${hours} hr ${minutes} min ${seconds} s</h2>`);
}

function constantCountdown() {
  setInterval(startCountdown, 1000);
}




// var timeInterval = setInterval(function() {
//
//
// }, 1000);

// countdown.append(`<h2>${distance}</h2>`);



// function inputPeriod() {
//
//   countdown.append(`<h2>${nextPeriod}</h2>`);
// }

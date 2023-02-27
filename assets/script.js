// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


var dateDisplay = $('#currentDay');

// The document.ready function tells the webpage to start the jQuery after the HTML has been rendered.
$(document).ready(function () {

  var currentTime = dayjs().format('dddd, MMMM D');
  dateDisplay.text(currentTime);
// Retrieves current time using Dayjs

  var today = dayjs();
  var currentHour = today.format('H');
  console.log(currentHour);

  for (var i = 0; i < $('.time-block').length; i++) {
    console.log($('.time-block')[i]);
    var timeblockDiv = $('.time-block')[i];
    var timeblockHour = $('.time-block')[i].getAttribute('id').split('-')[1];
    console.log(timeblockDiv);
    console.log(timeblockHour);
    // Write a conditional statement in order to compare the time block's hour to the current hour
    if (timeblockHour > currentHour) {
      // Future
      $(`#${timeblockDiv}`).removeClass('past present').addClass('future');
    }
     if (timeblockHour < currentHour) {
      // Past
      $(`#${timeblockDiv}`).removeClass('future present').addClass('past');
    }
    if (timeblockHour === currentHour) {
        // Present
         $(`#${timeblockDiv}`).removeClass('future past').addClass('present');
    }
  };

  // console.log($('.saveBtn'));
  // $('.saveBtn').on('click', function() {
  //   console.log(this.previousSibling.previousSibling.value);
  // })
});

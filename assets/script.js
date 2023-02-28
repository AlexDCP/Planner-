var dateDisplay = $('#currentDay');

// The document.ready function tells the webpage to start the jQuery after the HTML has been rendered.
$(document).ready(function () {

  var currentTime = dayjs().format('dddd, MMMM D');
  dateDisplay.text(currentTime);
// Retrieves current time using Dayjs

  var today = dayjs();
  var currentHour = parseInt(today.format('H'));
  console.log(currentHour);

  for (var i = 0; i < $('.time-block').length; i++) {
    console.log($('.time-block')[i]);
    var timeblockDiv = $('.time-block')[i];
    var timeblockHour = parseInt($('.time-block')[i].getAttribute('id').split('-')[1]);
    console.log(timeblockDiv);
    console.log(timeblockHour);
    //Write a conditional statement in order to compare the time block's hour to the current hour
    if (timeblockHour > currentHour) {
      // Future
      $(timeblockDiv).removeClass('past').removeClass('present').addClass('future');
    }
     if (timeblockHour < currentHour) {
      // Past
      $(timeblockDiv).removeClass('future').removeClass('present').addClass('past');
    }
    if (timeblockHour === currentHour) {
        // Present
         $(timeblockDiv).removeClass('past').removeClass('future').addClass('present');
    }
  };

  console.log($('.saveBtn'));
  $('button').on('click', function() {
    var text = this.previousSibling.previousSibling.value;
    var hour = this.previousSibling.parentElement.getAttribute('id').split('-')[1];
    localStorage.setItem(hour, text)

  })

  
    for (var i = 0; i < $('.time-block').length; i++) {
      var timeblockHour = parseInt($('.time-block')[i].getAttribute('id').split('-')[1]);
      var text = localStorage.getItem(timeblockHour);
      console.log(text);
      $('.time-block').eq(i).children('textarea').val(text);
    }
  });


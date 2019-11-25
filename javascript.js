$(document).ready(function() {
 
  // near the top of the calender display the current day:
  var currentDay = moment().format("dddd, MMMM Do YYYY");
  console.log(currentDay);
  $("#currentDay").text(currentDay);

  var saveBtn = $(".saveBtn");
  // Create an "on-click" event attached to the "saveBtn" class.
  //   when save button is clicked:
  $(saveBtn).on("click", function() {
    event.preventDefault();
    console.log(this);
    var mytext = $(this)
      .siblings(".description")
      .val();
      var hour = $(this)
      .parent()
      .attr("id");
      console.log(mytext);
      console.log(hour);
      localStorage.setItem(hour, mytext);
      //  Create a variable called "newEvent"
      //   set the variable equal to the user input.
      
      // save time to local storage
      // save user input to local storage
    });
    
    // when you open the page you need to find all the info from localstorage and show it
    
    //localStorage.getItem
    for (var i = 9; i < 18; i++) {
      var time = `#hour-${i} .description`;
      console.log(time);
      $(time).val(localStorage.getItem("hour-" + i));
      
    }
    
    // each time slot should display past, present, future
    // if past then add attr "past",
    // if present then add attr "present",
    // if future then add attr "future"
 
  function updateBlocks() {
    var currentHour = moment().hours();
    console.log(currentHour);

    $(".time-block").each(function() {
      // id hour-number

      var hourBlock = $(this).attr("id");
      console.log(hourBlock);

      var hourStringify = hourBlock.split("-")[1];
      console.log(hourStringify);
      // ["hour", "number"]

      var hourParse = parseInt(hourStringify);
      console.log(hourParse);

      //   compare time in block to currenthour
      // if hour is less than current hour add class past
      if (hourParse < currentHour) {
        $(this).removeClass("present");
        $(this).addClass("past");
        // if hour is same then remove previous class and add new class present
      } else if (hourParse === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
        // if hour is more than current hour remove previous class & add class future
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  //   create a timer to verify time & update colors
  //create timer that updates every minute and call function updateBlocks

  var timer = window.setInterval(startTimer, 60000);

  function startTimer() {
      updateBlocks();
  };
   startTimer();
  });
  



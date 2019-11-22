
$(document).ready(function() {
    
    // near the top of the calender display the current day:
    var currentDay = moment().format('dddd', 'MMMM Do YYYY');
    $("#currentDay").text(currentDay);

    // each time slot should display past, present, future
    // set moment js to display an attribute?
    // if past then add attr "past",
    // if present then add attr "present",
    // if future then add attr "future"
    // ??
    
    var saveBtn = $("#saveBtn");
    // Create an "on-click" event attached to the "saveBtn" class.
    //   when save button is clicked: 
    $(saveBtn).on("click", function(event) {
        event.preventDefault();
        var mytext = $(".textarea").val;
        console.log(mytext);

        //  Create a variable called "newEvent"
        //   set the variable equal to the user input. 
        
        // save time to local storage
        // save user input to local storage

        });


});

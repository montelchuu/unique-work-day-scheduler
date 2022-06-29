//current day, month, year.
//Added hour and minutes
$("#currentDay").text(moment().format('llll'));

$(document).ready(function () {
    // button click listener for save button
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".activity").val();
        var time = $(this).siblings(".hour").text();

        localStorage.setItem(time, text);
    })

    $(".time-block").each(function () {
        // Color coded time block function
        var timeNow = moment().hour();
        var currentHour = parseInt($(this).attr("id").split("hour")[1]);

        // console.log(this);
        // console.log(timeNow);
        // console.log(currentHour);

        if (currentHour > timeNow) {
            $(this).addClass("future");
        } else if (currentHour === timeNow) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })

    // Time block event persists though page refresh
    $("#hour8 .activity").val(localStorage.getItem("8AM"));
    $("#hour9 .activity").val(localStorage.getItem("9AM"));
    $("#hour10 .activity").val(localStorage.getItem("10AM"));
    $("#hour11 .activity").val(localStorage.getItem("11AM"));
    $("#hour12 .activity").val(localStorage.getItem("12PM"));
    $("#hour13 .activity").val(localStorage.getItem("1PM"));
    $("#hour14 .activity").val(localStorage.getItem("2PM"));
    $("#hour15 .activity").val(localStorage.getItem("3PM"));
    $("#hour16 .activity").val(localStorage.getItem("4PM"));
    $("#hour17 .activity").val(localStorage.getItem("5PM"));
})


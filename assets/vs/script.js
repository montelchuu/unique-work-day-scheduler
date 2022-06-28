//current day, month, year.
$("#currentDay").text(moment().format('MMMM Do YYYY'));

$(document).ready(function () {
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".activity").val();
        var time = $(this).siblings(".hour").text();

        localStorage.setItem(time, text);
    })

    function timeColorBlocks() {
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var currentHour = parseInt($(this).attr("id").split("hour")[1]);

            console.log(this);
            console.log(timeNow);
            console.log(currentHour);

            if (currentHour > timeNow) {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            } else if (currentHour === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
        })
    }
    timeColorBlocks();
})
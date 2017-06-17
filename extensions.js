var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

function formatDate(date)
{
    var day = date.getDate();

    while(day > 10)
    {
        day -= 10;
    }

    dayString = date.getDate().toString();

    console.log(day);

    switch(day) {
        case 1:
            dayString += "st";
            break;
        case 2:
            dayString += "nd";
            break;
        case 3: 
            dayString += "rd";
            break;
        default:
            dayString += "th";
    }

    return dayString + " of " + monthNames[date.getMonth()] + " " + date.getFullYear();
}


exports.formatDate = formatDate;
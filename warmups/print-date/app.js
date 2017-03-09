function formatDate(date) {
    var monthNames = ["January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
    
    var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                      
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var yearY = date.getFullYear();
    var dayIndex = date.getDay();
    
    return "Today is " + dayNames[dayIndex] + " the " + day + " of " + monthNames[monthIndex] + " in the year " + yearY + ".";
}

function formatTime(date) {
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hour < 12){
        return "The current time is " + hour + ":" + minutes + ":" + seconds + " AM ";
    } else {
        return "The current time is " + hour + ":" + minutes + ":" + seconds + " PM ";
    }
}

console.log(formatDate(new Date()))
console.log(formatTime(new Date()))
var hour = document.getElementById('hour');
var calendar = document.getElementById('date');
var format = '0'
function verifyDay(day) {
    if (day == 0) {
        return 'Sunday'
    }
    if (day == 1) {
        return 'Monday'
    }
    if (day == 2) {
        return 'Tuesday'
    }
    if (day == 3) {
        return 'Wednesday'
    }
    if (day == 4) {
        return 'Thursday'
    }
    if (day == 5) {
        return 'Friday'
    }
    if (day == 6) {
        return 'Saturday'
    }
}

function verifyMonth(month) {
    if (month == 0) {
        return 'January';
    }
    if (month == 1) {
        return 'February';
    }
    if (month == 2) {
        return 'March';
    }
    if (month == 3) {
        return 'April';
    }
    if (month == 4) {
        return 'May';
    }
    if (month == 5) {
        return 'June';
    }
    if (month == 6) {
        return 'July';
    }
    if (month == 7) {
        return 'August';
    }
    if (month == 8) {
        return 'September';
    }
    if (month == 9) {
        return 'October';
    }
    if (month == 10) {
        return 'November';
    }
    if (month == 11) {
        return 'December';
    }
}

setInterval(function () {
    const date = new Date();
    var h = date.getHours()
    
    var m = date.getMinutes()
    var s = date.getSeconds()
    if (format == 0) {
        if (h > 12) {
            h -= 12
        }
        hour.innerHTML = h + ':' + m + ':' + s + ' PM';
    } else {
        hour.innerHTML = h + ':' + m + ':' + s;

    }

    var day = date.getDay();
    var month = date.getMonth();
    var day2 = date.getDate();
    var year = date.getFullYear();
    if (format == 0) { 
        calendar.innerHTML = verifyDay(day) + ', ' + verifyMonth(month) + ' ' + day2 + 'th ' + year;
    } else {
        calendar.innerHTML = verifyDay(day) + ', ' + day2 + '/' + verifyMonth(month) + '/' + year;
        
    }
}, 100) 

function change() {
    if (format == 0) {
        format = 1;
    } else {
        format = 0;
    }
    console.log(format)
}
function checkTime(m) {
    if (m < 10)
        m = "0" + m
    return m
}

function twelvehour(h) {
    if (h > 12) {
        var f = h - 12
        return f;
        //console.log("h>12")
    }
    if (h == 0) {
        return 12
            //console.log("h==12")
    } else
        return h
}
//return post or ante depending on time of day
function get_ampm(h) {
    if (h < 12)
        return "AM"
    if (h >= 12)
        return "PM"
}
var mode = 'normal'
timeout('normal')
var t

function timeout(mode) {
    if (mode === 'normal') {
        t = setTimeout(normal, 2 * 1000)
    } else {
        t = setTimeout(ampm, 2 * 1000) //every 2 seconds
    }
}

function changeto() {
    if (mode === 'normal') {
        ampm()
    } else {
        normal()
    }
}

function normal() {
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
        //console.log("h: "+h)
        //var ampm = get_ampm(h)

    //clean both sources
    m = checkTime(m) //add leading 0 for minutes > 10
        //h = twelvehour(h) //changes to 12hr format

    //write time to screen
    document.getElementById('time').innerHTML = h + ":" + m + " "
    clearTimeout(t)
    mode = 'normal'
    timeout(mode)
}

function ampm() {
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var ampm = get_ampm(h)
    m = checkTime(m) //add leading 0 for minutes > 10
    h = twelvehour(h) //changes to 12hr format
    document.getElementById('time').innerHTML = h + ":" + m + " " + ampm
    clearTimeout(t)
    mode = 'ampm'
    timeout(mode)
}

var _hide_details = false
var count = 0
<<<<<<< HEAD
function showTime() {


    var date = new Date()

    // document.write(date)

    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var session = "AM"


    if (h == 0) {
        h = 12
    }
    if (h > 12) {
        h = h - 12
        session = "PM"
    }

    h = (h < 10 ? "0" + h : h)
    m = (m < 10 ? "0" + m : m)
    s = (s < 10 ? "0" + s : s)

    var time = h + ":" + m + ":" + s


    
     document.getElementById("value").
    innerText =time
    document.getElementById("value").textContent = time;

    // document.write(" \n minutes", m)

setTimeout(showTime , 1000)

}

showTime()
=======
function showTime (){

    
}

var date = new Date

document.write(date)
>>>>>>> 1baa5f82928b25d0d79cbd02723dfa3410f19666

function initialfunction () {
var currentDate = new Date();
var hour = currentDate.getHours();
var month = currentDate.getMinutes();
var sec = currentDate.getSeconds();
var duration = "PM"
 
if(hour > 12 ){
    hour = hour - 12
}
if(hour == 0 ){
    hour = 12
}
if(hour > 12 ){
    duration = "AM"
}

document.getElementById("one").innerText = hour;
document.getElementById("two").innerText = month;
document.getElementById("three").innerText = sec;
document.getElementById("four").innerText = duration;

}
setInterval( initialfunction, 1000);
// var interval;
// var count = 0;
// function timer(){
//     count++;
//     console.log(count);

// } 
// interval = setInterval(timer,1000);
// setTimeout(function)(){
//     clearInterval(interval)
// },5000)
var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;
function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if( msec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }else if(sec >= 60){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}
function start(){
    start="disabled";
    interval = setInterval(timer,10);
}
function stop(){
    clearInterval(interval);
}
function reset(){
    min=0;
    minHeading.innerHTML = min;
    sec=0;
    secHeading.innerHTML = sec;
    msec=0;
    msecHeading.innerHTML = msec;
    stop();

}

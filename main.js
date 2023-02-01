const start=document.querySelector("#play");
const pause=document.querySelector("#pause");
const reset=document.querySelector("#reset");
const timer =document.getElementById("timer");

//variables for time values
let seconds=0;
let minutes=0;
let hours=0;


//variables for set intervals and timer-status
let timeInterval= null;
let timerStatus= "stopped";

//adding extra zeros to the timer
let leadingSeconds=0;
let leadingMinutes=0;
let leadingHours=0;



function stopwatch(){
        seconds++;
        if (seconds/60 ===1){
            seconds = 0;
            minutes ++;

            if(minutes/60 === 1){
            minutes= 0;
            hours ++;
        }}
    

        if (seconds <10){
            leadingSeconds ="0"+ seconds.toString();
        }
        else {
            leadingSeconds = seconds;
        }
        
        if (minutes <10){
            leadingMinutes ="0"+ minutes.toString();
        }
        else {
            leadingMinutes = minutes;
        }
        
        
        if (hours <10){
            leadingHours ="0"+ hours.toString();
        }
        else {
            leadingHours = hours;
        }
        timer.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

//window.setInterval(stopwatch, 1000);

start.addEventListener("click",()=>{
    console.log("start");

    if (timerStatus === "stopped" ){
        timeInterval= window.setInterval(stopwatch, 1000);
        console.log(timeInterval)
        timerStatus = "started";
    }})

    pause.addEventListener("click",()=>{
    console.log("paused");

    if (timerStatus === "started" ){
        clearInterval(timeInterval)
        timerStatus = "stopped";
    }})

    reset.addEventListener("click",()=>{
        
        clearInterval(timeInterval);
         timerStatus = "stopped";
         seconds=0;
         minutes=0;
         hours=0;
        timer.innerText="00:00:00";
        console.log("timer stopped")


    })





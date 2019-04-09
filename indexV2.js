// Create a class called StopWatch.
class StopWatch
{
    /*
        Add a constructor.  In the body of the constructor
        -   Create instance variables for these 3 variables as well
            as all of the elements on the page that you're going to
            refer to in code
        -   All of the functionality of init will happen in the constructor.
        -   Add the event handlers for the start, stop and reset buttons.
            You'll have to bind(this) to each function because the keyword
            this will refer to the button (not the class) when the 
            event fires
            -- this.startButton.onclick = this.startTimer.bind(this);
    */
    constructor (){
        this.isRunning = false;
        this.timer = null;
        this.timerTime = 0;

        let startBtn = document.getElementById("start");
        let stopBtn = document.getElementById("stop");
        let resetBtn = document.getElementById("reset");
        
        startBtn.onclick = this.startTimer.bind(this);//bind method 'this' refers to the class
        stopBtn.onclick = this.stopTimer.bind(this);
        resetBtn.onclick = this.resetTimer.bind(this);
    }
    /*
        Convert each function to a method.  
        -   Move it inside the class.
        -   Remove the keyword function
        -   Add this. in front of every variable and method
    */
    startTimer() {
   
    if(!this.isRunning){
        this.isRunning = true;
        this.timer = setInterval(this.incrementTimer.bind(this), 1000);
    }
}
    incrementTimer(){
        // increment the timerTime
        // calculate the number of minutes and seconds
        this.timerTime++;
        const mins = Math.floor(this.timerTime / 60);
        const secs = this.timerTime % 60;
    
        // write the minutes and seconds to the elements on the page
        // use the function pad to make sure there's a leading 0 if necessary
        document.getElementById("minutes").innerHTML = this.pad(mins);
        document.getElementById("seconds").innerHTML = this.pad(secs);
    }
    
   pad(number) {
        // add a leading 0 if the number is < 10
        if(number < 10){
            number = "0" + number;             
        }
        return number;
   }
  stopTimer() {
    // if the timer is running, stop it
    if(this.isRunning = true){
        this.isRunning = false;
        clearInterval(this.timer);
    }
}

 resetTimer() {
        // stop the timer
        this.stopTimer();
        
        // set the timerTime back to 0
        this.timerTime = 0;
        
        // write 00 to the elements on the page for minutes and seconds
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

    }
}

// Create a variable called stopWatch
let stopWatch;

// Add an event handler to the load event of the window. 
// Use an anonymous function or an arrow function to
// set the stopWatch variable to an instance of StopWatch
window.onload = () => {stopWatch = new StopWatch();};//semicolons not necessary
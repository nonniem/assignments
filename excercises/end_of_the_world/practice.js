var timeleft = document.getElementById("time");

var time = 20


myVar = setInterval(changetime, 1000)

function changetime() {
    time--;
    timeleft.innerHTML = time;
    if (time === 0) {
        clearInterval(myVar);
    }
}


setTimeout(function(){
    document.getElementById("countdown").innerHTML = "Boooom!!";
    document.getElementById("box").style.backgroundImage = "url(850.jpg)";
    document.getElementById("countdown").style.color = "white";
}, 20000);


////Eric Jones [11:16 AM] 
//So, a couple of components for the countdown timer are:
//an interval that will count down
//selecting something in the DOM so that we can change the background
//selecting something in the DOM that we can display the countdown
//
//
//[11:16] 
//a video tag for the video 
//and a tag to play sound
//
//
//[11:17] 
//I would break these things up. I would first try to get a count down in my console working. https://www.w3schools.com/jsref/met_win_setinterval.asp
//w3schools.com
//Window setInterval() Method
//Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, and XML.
//
//
//[11:17] 
//Then I would try to display that in on the page.
//
//
//[11:18] 
//Then I would try to console.log something when that time went to zero.
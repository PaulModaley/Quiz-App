// function startTimer() {
//   var tobj = document.getElementById("timespent");
//   var t = "0:00";
//   var s = 00;
//   var d = new Date();
//   var timeint = setInterval(function () {
//     s += 1;
//     d.setMinutes("0");
//     d.setSeconds(s);
//     min = d.getMinutes();
//     sec = d.getSeconds();
//     if (sec < 10) sec = "0" + sec;
//     document.getElementById("timespent").value = min + ":" + sec;
//   }, 1000);
//   // tobj.value = t;
//   sessionStorage.setItem("timeSpentMin", min);
//   sessionStorage.setItem("timeSpentSec", sec);  
//   var nextButton = document.getElementById("next-button");
//   nextButton.addAttribute("onclick", "storeTimer(min, sec)");
// }

// if (window.addEventListener) {
//   window.addEventListener("load", startTimer);
// } else if (window.attachEvent) {
//   window.attachEvent("onload", startTimer);
// }


// // Function written for the Next button
// function resumeTimer(){
//   var mins = sessionStorage.getItem("timeSpentMin");
//   var secs = sessionStorage.getItem("timeSpentSec");
//   min = d.getMinutes() + mins;
//   sec = d.getSeconds() + secs;
// }

// if(window.addEventListener){
//   window.addEventListener("load", resumeTimer)
// }
// else if (window.attachEvent){
//   window.attachEvent("onload", resumeTimer)
// }






var startTimer = document.getElementById("start-btn");
if(startTimer){
  startTimer.addEventListener("click", function () {
    var startTimer = new Date();
    localStorage.setItem("start", startTimer);
    console.log('starting time ', startTimer)
  });
}

var total_time = document.getElementById('quizTime')
var endTimer = document.getElementById("finish-btn");
if(endTimer){
  endTimer.addEventListener("click", function () {
    var endTimer = new Date();
    localStorage.getItem("start")
    localStorage.setItem("end", endTimer);
    let total = endTimer - startTimer
    localStorage.setItem("total", total)
    // quizTime.innerHTML = `
    // <b>Total Quiz Time: ${total}</b>
    // `;
    console.log('starting time ', startTimer)
    console.log('ending time ', endTimer)
    console.log('Total time ', total);
    // endTimer.disabled = true;
  });
}




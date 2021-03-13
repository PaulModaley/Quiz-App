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
//   tobj.value = t;
// }

// if (window.addEventListener) {
//   window.addEventListener("load", startTimer);
// } 
// else if (window.attachEvent) {
//   window.attachEvent("onload", startTimer);
// }


// function startQuizTime(){
//     var sd = new Date();
//     var st = sd.getTime();
//     document.getElementById("start_time_result").innerHTML = `
//     <div class="h5 mb-3"><b>Start Time: ${st} </b></div>
//     `;
//     console.log(st)
//   }
  
//   function endQuizTime(){
//     var ed = new Date();
//     var et = ed.getTime();
//     document.getElementById("end_time_result").innerHTML = `
//     <div class="h5 mb-3"><b>End Time: ${et} </b></div>
//     `;
//     console.log('end time',et)
// }
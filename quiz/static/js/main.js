console.log("Hello world");

// window.onload= function(){
//     var answerLabel = document.getElementById("answerLabel");
//     var checkBtn = document.getElementById('check')
//     var radioOne = document.getElementById('option_one')
//     var radioTwo = document.getElementById('option_two')
//     var radioThree = document.getElementById('option_three')
//     var radioFour = document.getElementById('option_four')

// }

// window.confirm();

// var answerLabel = document.getElementById("answerLabel")
// var checkBtn = document.getElementById('check');
var nextBtn = document.getElementById("next-btn");
var finishBtn = document.getElementById("finish-btn");

if (nextBtn.length > 0) {
  finishBtn.setAttribute("hidden", true);
} else {
  finishBtn.setAttribute("hidden", false);
}























// setInterval(function displayRadioValue() {
//   var ele = document.getElementsByName("option");
//   for (i = 0; i < ele.length; i++) {
//     if (ele[i].checked) {
//         console.log("Correct");
//         // document.getElementById("check").disabled = true;
//         document.getElementById("option_one").disabled = true;
//         document.getElementById("option_two").disabled = true;
//         document.getElementById("option_three").disabled = true;
//         document.getElementById("option_four").disabled = true;
//     }}
// },3000)



// function displayRadioValue() {
//   var ele = document.getElementsByName("option");
//   for (i = 0; i < ele.length; i++) {
//     if (ele[i].checked) {
//       checked_val = ele[i].value;
//       if (checked_val == answerLabel.value) {
//         console.log("Correct");
//         document.getElementById("check").disabled = true;
//         document.getElementById("option_one").disabled = true;
//         document.getElementById("option_two").disabled = true;
//         document.getElementById("option_three").disabled = true;
//         document.getElementById("option_four").disabled = true;
//         result_div.innerHTML = `
// 				<div class="h5 mb-3"><b>Correct</b></div>
// 				`;
//       } else {
//         console.log("Wrong");
//         document.getElementById("check").disabled = true;
//         document.getElementById("option_one").disabled = true;
//         document.getElementById("option_two").disabled = true;
//         document.getElementById("option_three").disabled = true;
//         document.getElementById("option_four").disabled = true;
//         result_div.innerHTML = `
// 				<div class="h5 mb-3"><b>Wrong, Correct answer is ${answerLabel.value}</b></div>
// 				`;
//       }

//     }
//   }
// }


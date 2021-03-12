console.log("Hello world");

// window.onload= function(){
//     var answerLabel = document.getElementById("answerLabel");
//     var checkBtn = document.getElementById('check')
//     var radioOne = document.getElementById('option_one')
//     var radioTwo = document.getElementById('option_two')
//     var radioThree = document.getElementById('option_three')
//     var radioFour = document.getElementById('option_four')

// }

var answerLabel = document.getElementById("answerLabel").value;
var result_div = document.getElementById("result_div");

function displayRadioValue() {
  var ele = document.getElementsByName("option");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      checked_val = ele[i].value;
      if (checked_val == answerLabel) {
        console.log("Correct");
        result_div.innerHTML = `
				<div class="h5 mb-3"><b>Correct</b></div>
				`;
      } else {
        console.log("Wrong");
        result_div.innerHTML = `
				<div class="h5 mb-3"><b>Wrong, Correct answer is ${answerLabel}</b></div>
				`;
      }
    }
  }
}

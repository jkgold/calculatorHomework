'use strict'
// $(document).ready(init);
// function init(){
//   console.log("hello world");
// }
$(document).ready(function(){
  var clickedNumbers = [];
$(".button").click(function(){
  var buttonValue = this.id;
  clickedNumbers.push(buttonValue);
    console.log(clickedNumbers);
$("#display").text(clickedNumbers);
$()

  })
})
//

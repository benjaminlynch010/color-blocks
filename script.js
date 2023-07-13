console.log('🟥 🟦 🟩 🟨');

$(document).ready(onReady);

function onReady() {
// hey jquery, select button with id "red-btn"
// when it's clicked, execute make[color]Block function  
$('#red-btn').on('click', makeRedBlock)
$('#blue-btn').on('click', makeBlueBlock)
$('#green-btn').on('click', makeGreenBlock)
$('#yellow-btn').on('click', makeYellowBlock)

$('')
}

// create 4 functions
  // selector = blocks
  // modifier = .append (push)
  // class = block [color]-fill
function makeRedBlock() {
    console.log('🟥');
  $('#blocks').append(`<div class="block red-fill"></div>`)
} // end red

function makeBlueBlock() {
    console.log('🟦');
  $('#blocks').append(`<div class="block blue-fill"></div>`)
} // end blue

function makeGreenBlock() {
    console.log('🟩');
  $('#blocks').append(`<div class="block green-fill"></div>`)  
} // end green

function makeYellowBlock() {
    console.log('🟨');
  $('#blocks').append(`<div class="block yellow-fill"></div>`)
} // end yellow





// You are provided with 4 buttons:
  // red      <button id="red-btn">Red</button>
  // blue     <button id="blue-btn">Blue</button>
  // green    <button id="green-btn">Green</button>
  // yellow   <button id="yellow-btn">Yellow</button>

// when you click on a button:
//   add a color block of that color to the DOM.

// 4 color blocks:
  // red     <div class="block red-fill"></div>
  // blue    <div class="block blue-fill"></div>
  // green   <div class="block green-fill"></div>
  // yellow  <div class="block yellow-fill"></div>

// when you click on a color block:
//   remove that block from the DOM


// document onReady
// onReady function
// function to make all blocks?
    // or specific function for specific button

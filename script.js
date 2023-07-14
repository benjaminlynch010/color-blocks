console.log('🟥 🟦 🟩 🟨');

$(document).ready(onReady);

// *** Remember ***
// $('selector').modifier(class, data, function)

function onReady() {
// hey jquery, select button with id "[color]-btn"
// when it's clicked, execute make[color]Block function  
$('#red-btn').on('click', makeRedBlock)
$('#blue-btn').on('click', makeBlueBlock)
$('#green-btn').on('click', makeGreenBlock)
$('#yellow-btn').on('click', makeYellowBlock)

$('#red-btn').on('click', redIncrementor)
$('#blue-btn').on('click', blueIncrementor)
$('#green-btn').on('click', greenIncrementor)
$('#yellow-btn').on('click', yellowIncrementor)

// hey jquery, select document  
  // narrow down to block class
  // when it's clicked, execute [removeBlock]

// [removeBlock] function commented out for part 2
// $(document).on('click', '.block', removeBlock)

} // end onReady

// having trouble getting count variables to increment when
// declared in the function
let redCount = 2
let blueCount = 2
let greenCount = 2
let yellowCount = 2

function redIncrementor() {
  $('#red-count').replaceWith(`<span id="red-count">${redCount}</span>`)
  redCount++
}
function blueIncrementor() {
    $('#blue-count').replaceWith(`<span id="blue-count">${blueCount}</span>`)
    blueCount++
  }
  function greenIncrementor() {
    $('#green-count').replaceWith(`<span id="green-count">${greenCount}</span>`)
    greenCount++
  }
  function yellowIncrementor() {
    $('#yellow-count').replaceWith(`<span id="yellow-count">${yellowCount}</span>`)
    yellowCount++
  }
// create 4 functions to add blocks to DOM
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


// create 4 functions to remove blocks from DOM when clicked
  // *** or one more efficient function - thank you Matt! ***
function removeBlock () {
    console.log($(this))
    $(this).remove()
}





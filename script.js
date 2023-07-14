console.log("🟥 🟦 🟩 🟨");

$(document).ready(onReady);

// *** Remember ***
// $('selector').modifier(class, data, function)

function onReady() {
  // hey jquery, select button with id "[color]-btn"
  // when it's clicked, execute make[color]Block function
  $("#red-btn").on("click", makeRedBlock);
  $("#blue-btn").on("click", makeBlueBlock);
  $("#green-btn").on("click", makeGreenBlock);
  $("#yellow-btn").on("click", makeYellowBlock);

  // hey jquery, select document
  // narrow down to block class
  // when it's clicked, execute [removeBlock]
  $(document).on("click", ".block", removeBlock);
} // end onReady

// having trouble getting count variables to
// increment when declared in the function
let redCount = 2;
let blueCount = 2;
let greenCount = 2;
let yellowCount = 2;

// create 4 functions to add blocks to DOM
// selector = blocks
// modifier = .append (push)
// class = block [color]-fill
function makeRedBlock() {
  console.log("🟥");
  $("#blocks").append(`<div class="block red-fill"></div>`);
  $("#red-count").replaceWith(`<span id="red-count">${redCount}</span>`);
  redCount++;
} // end red
function makeBlueBlock() {
  console.log("🟦");
  $("#blocks").append(`<div class="block blue-fill"></div>`);
  $("#blue-count").replaceWith(`<span id="blue-count">${blueCount}</span>`);
  blueCount++;
} // end blue
function makeGreenBlock() {
  console.log("🟩");
  $("#blocks").append(`<div class="block green-fill"></div>`);
  $("#green-count").replaceWith(`<span id="green-count">${greenCount}</span>`);
  greenCount++;
} // end green
function makeYellowBlock() {
  console.log("🟨");
  $("#blocks").append(`<div class="block yellow-fill"></div>`);
  $("#yellow-count").replaceWith(
    `<span id="yellow-count">${yellowCount}</span>`
  );
  yellowCount++;
} // end yellow

// create 4 functions to remove blocks from DOM when clicked
// *** or one efficient function - thank you Aaron! ***
function removeBlock() {
  console.log($(this));
  $(this).remove();
}

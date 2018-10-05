var colors = generateRandomColors(6);
var numSquares = 6;

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  h1.style.backgroundColor = "steelblue";
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function(){
  // generate new colors
  colors = generateRandomColors(numSquares);
  //pick a new random number from array
  pickedColor = pickColor();
  // change display color to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
  };
  //reset the reset button
  this.textContent = "New Colors";
  //reset the title div color
  h1.style.backgroundColor = "steelblue";
  //reset the win message
  messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listener to squares
  squares[i].addEventListener("click", function(){
    //get color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare to the answer
    if (clickedColor === pickedColor){
      win()
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
};



function win(color){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = pickedColor;
    squares[i].classList.remove("invisible");
    messageDisplay.textContent = "Correct!";
    h1.style.backgroundColor = pickedColor;
    resetButton.textContent = "Play again?";
  };
};

function pickColor(){
  //pick a random number and return it
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
};

function generateRandomColors(num){
  // make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return array
  return arr;
};

function randomColor(){
  //pick a red
    var red = Math.floor(Math.random() * 256)
  //pick a green
    var green = Math.floor(Math.random() * 256)
  //pick a blue
    var blue = Math.floor(Math.random() * 256)
  //return color
  return "rgb(" + red + ", " + green + ", " + blue +")";
};


//

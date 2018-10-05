var colors = [];
var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var game = {};

game.init = function(){
  setModeButtons()
  setSquares()
  setResetButton()
  reset();
}

game.init();

function setModeButtons(){
  for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset()
    });
  };
}

function setSquares(){
  for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor){
        win()
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  };
}

function setResetButton(){
  resetButton.addEventListener("click", function(){
    reset();
  });
}

function win(color){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = pickedColor;
    messageDisplay.textContent = "Correct!";
    h1.style.backgroundColor = pickedColor;
    resetButton.textContent = "Play again?";
  };
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];
  for (var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var red = Math.floor(Math.random() * 256)
  var green = Math.floor(Math.random() * 256)
  var blue = Math.floor(Math.random() * 256)
  return "rgb(" + red + ", " + green + ", " + blue +")";
}

function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    };
  };
}

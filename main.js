// hearts:
var purpleHeart = document.querySelector('.purple-heart');
var blueHeart = document.querySelector('.blue-heart');
var greenHeart = document.querySelector('.green-heart');
var redHeart = document.querySelector('.red-heart');
// speech bubbles:
  var purpleBubble = document.querySelector('.purple-bubble');
  var blueBubble = document.querySelector('.blue-bubble');
  var greenBubble = document.querySelector('.green-bubble');
  var redBubble = document.querySelector('.red-bubble');
// buttons (start and buttons in speech bubbles):
  var startBtn = document.querySelector('.start-btn');
  var purpleBtn = document.querySelector('.purple-btn');
  var blueBtn = document.querySelector('.blue-btn');
  var greenBtn = document.querySelector('.green-btn');
  var redBtn = document.querySelector('.red-btn');
// Things to blur/unblur when some step is active/inactive:
  var container = document.querySelector('.container');      //every heart and bubble
  var allExceptPurple = document.querySelectorAll(".container :not(.active-purple)");
  var allExceptBlue = document.querySelectorAll(".container :not(.active-blue)");
  var allExceptGreen = document.querySelectorAll(".container :not(.active-green)");
  var allExceptRed = document.querySelectorAll(".container :not(.active-red)");

// this will blur and darken the elements defined in brackets (e.g. everything except the active step):
function backgroundBlur(allExcept) {
    allExcept.forEach(
      element => element.style.filter = "blur(0.6vmin) brightness(40%)"
    );
}
// this function will RESET the previously added blur in elements defined in brackets
// this is done in every step (except start) so that the blur in next steps would work and not stay blurred:
function removeBlur(allExcept) {
    allExcept.forEach(
      element => element.style.filter = "blur(0vmin) brightness(100%)"
    );
}

// click on the START BUTTON = activates the purple step //
startBtn.onclick = () => {
   purpleBubble.style.display = "unset";   //show the purple speech bubble, by removing its display:none defined in css
   startBtn.style.display = "none";      //lose the start button
   backgroundBlur(allExceptPurple);      //blur everything except purple stuff
   purpleHeart.style.animation = "pulse 500ms ease-in-out infinite alternate"; //animate the purple heart
}
// click on the PURPLE button = reset the purple step and activate the BLUE step  //
purpleBtn.onclick = () => {
   purpleHeart.style.animation = "none";
   blueHeart.style.animation = "pulse 500ms ease-in-out infinite alternate";
   purpleBubble.style.display = "none";
   blueBubble.style.display = "inline";
   removeBlur(allExceptPurple);       //reset the previously added purple blur
   backgroundBlur(allExceptBlue);    //blur everything except blue stuff
}
// click on the BLUE button = reset the blue step and activate the GREEN step //
blueBtn.onclick = () => {
   blueHeart.style.animation = "none";
   greenHeart.style.animation = "pulse 500ms ease-in-out infinite alternate";
   blueBubble.style.display = "none";
   greenBubble.style.display = "inline";
   removeBlur(allExceptBlue);
   backgroundBlur(allExceptGreen);
}
// click on the GREEN button = reset the GREEN step and activate the RED step //
greenBtn.onclick = () => {
   greenHeart.style.animation = "none";
   redHeart.style.animation = "pulse 500ms ease-in-out infinite alternate";
   greenBubble.style.display = "none";
   redBubble.style.display = "inline";
   removeBlur(allExceptGreen);
   backgroundBlur(allExceptRed);
}
// click on the RED button = reset the RED step, show again the Start button and unblur everything//
redBtn.onclick = () => {
   redHeart.style.animation = "none";
   redBubble.style.display = "none";
   startBtn.style.display = "block";
   startBtn.innerHTML = "Start again!";
   removeBlur(allExceptRed);
   removeBlur(container);
}

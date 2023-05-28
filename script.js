//Play the project video on mouse hover.
const clip = document.querySelectorAll('.clip');
for (let i = 0;i < clip.length;i++) {
  clip[i].addEventListener('mouseenter', function(e){
    clip[i].play();
  })
  clip[i].addEventListener('mouseout', function(e){
    clip[i].pause();
  })
}

// Change the background color, text, and buttons when switching projects
let background = document.querySelector('#projects');
var cardBackground = document.querySelector('.cards');
var radios = document.querySelectorAll('input[name="slider"]');
var colors = ['#c394f8', '#428aa6', '#6fa86f'];
var titleElement = document.getElementById("title");
var textElement = document.getElementById("text");
titleElement.innerHTML = "Crowd Control";
textElement.innerHTML = "CROW";

radios.forEach(function(radio, index) {
  radio.addEventListener('change', function() {
    if (this.checked) {
      background.style.backgroundColor = colors[index];
      cardBackground.style.backgroundColor = colors[index];

      // Change the title of the project
      let text = "";
      let content = "";
      if (colors[index] === '#c394f8') {
        text = "Crowd Control";
        content = "CROW";
      } else if (colors[index] === '#428aa6') {
        text = "EduFarm";
        content = "EDU.";
      } else if (colors[index] === '#6fa86f') {
        text = "Fred the Frog";
        content = "FRED.";
      }
      
      titleElement.innerHTML = text;
      textElement.innerHTML = content;
      console.log(text,content);
    }
  });
});

const readBtn = document.getElementById("readbtn");
const codeBtn = document.getElementById("codebtn");

readBtn.addEventListener('click', function() {
  if (titleElement.innerHTML === "Crowd Control") {
    // Perform action for Crowd Control project
    console.log("Read More: Crowd Control");
  } else if (titleElement.innerHTML === "EduFarm") {
    // Perform action for EduFarm project
    console.log("Read More: EduFarm");
  } else if (titleElement.innerHTML === "Fred the Frog") {
    // Perform action for Fred the Frog project
    console.log("Read More: Fred the Frog");
  }
});

codeBtn.addEventListener('click', function() {
  if (titleElement.innerHTML === "Crowd Control") {
    // Perform action for Crowd Control project
    console.log("View Code: Crowd Control");
  } else if (titleElement.innerHTML === "EduFarm") {
    // Perform action for EduFarm project
    console.log("View Code: EduFarm");
  } else if (titleElement.innerHTML === "Fred the Frog") {
    // Perform action for Fred the Frog project
    console.log("View Code: Fred the Frog");
  }
});
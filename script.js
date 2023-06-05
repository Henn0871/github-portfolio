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

const readBtn = document.getElementById("readbtn");
const codeBtn = document.getElementById("codebtn");

radios.forEach(function(radio, index) {
  radio.addEventListener('change', function() {
    if (this.checked) {
      background.style.backgroundColor = colors[index];
      cardBackground.style.backgroundColor = colors[index];

      const buttonColors = getButtonBackgroundColor(colors[index]);

      applyButtonStyle(readBtn, buttonColors);
      applyButtonStyle(codeBtn, buttonColors);

      // Change the title of the project
      let text = "";
      let content = "";
      if (colors[index] === '#c394f8') {
        text = "Crowd Control";
        content = "Crowd Control is a collaborative music-playing system - an interactive web app where users can connect to a music session and control the playlist by expressing their preferences through likes and dislikes. As users show appreciation for the songs you suggest, your DJ Level increases, and your influence over the playlist expands. Crowd Control is the ultimate platform to prove your exceptional taste in music.";
      } else if (colors[index] === '#428aa6') {
        text = "EduFarm";
        content = "Edufarm is an educational toy that makes learning about agriculture fun for kids. The toy features a tractor with multiple attachments, including a plough, seeder, manure spreader, and combine harvester, along with a set of colorful tiles. With these tools, children can unleash their creativity and design their own fields and landscapes. Let them explore the wonders of the agricultural cycle and cultivate their imagination with EduFarm.";
      } else if (colors[index] === '#6fa86f') {
        text = "Fred the Frog";
        content = "Fred the Frog is a local co-op game developed in Unity, drawing inspiration from the flash game, Bubble Struggle. The game was made from scratch, serving as the final project of my Game Design Course at Askov Højskole. Embark on a thrilling journey through the mysterious jungle, where you can level up your characters and unlock hidden abilities. Get ready to leap into an exciting adventure with Fred the Frog.";
      }
      
      titleElement.innerHTML = text;
      textElement.innerHTML = content;
      console.log(text,content);
    }
  });
});

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

//Get background color for buttons
function getButtonBackgroundColor(color) {
  switch (color) {
    case '#c394f8':
      return {
        background: '#9933ff',
        hover: '#6600cc'
      };
    case '#428aa6':
      return {
        background: '#00b4e1',
        hover: '#0087b3'
      };
    case '#6fa86f':
      return {
        background: '#388e3c',
        hover: '#1b5e20' 
      };
    default:
      return {
        background: '#9933ff', 
        hover: '#6600cc'
      };
  }
}

//Get hover colors for buttons
function applyButtonStyle(button, colors) {
  button.style.backgroundColor = colors.background;
  button.addEventListener('mouseover', function() {
    button.style.backgroundColor = colors.hover;
  });
  button.addEventListener('mouseout', function() {
    button.style.backgroundColor = colors.background;
  });
}

radios[0].dispatchEvent(new Event('change'));

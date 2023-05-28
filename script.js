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

//Change the background color when switching projects.
let background = document.querySelector('#projects');
var cardBackground = document.querySelector('.cards');
var radios = document.querySelectorAll('input[name="slider"]');
var colors = ['#c394f8', '#428aa6', '#6fa86f'];

radios.forEach(function(radio, index) {
  radio.addEventListener('change', function() {
    if (this.checked) {
      background.style.backgroundColor = colors[index];
      cardBackground.style.backgroundColor = colors[index];
    }
  });
});
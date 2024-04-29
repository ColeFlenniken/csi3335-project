// script.js
var pet = document.getElementById('pet');
var currentScale = 1.0; // Initial scale value

document.addEventListener('mousemove', function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  pet.style.left = mouseX - pet.offsetWidth / 2 + 'px';
  pet.style.top = mouseY + pet.offsetHeight / 2 - 50 + 'px';
});

document.addEventListener('keydown', function(event) {
  var key = event.key.toLowerCase();

  if (key === 'p') {
    playWithPet();
  } else if (key === 'f') {
    feedPet();
  } else if (key === 'r' ) {
    resetPetSize();
  }
});

function feedPet() {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  currentScale += 0.2;
  // pet.style.transformOrigin = '50% 50%';
  pet.style.transform = 'scale(' + currentScale + ')';

  pet.style.left = mouseX - pet.offsetWidth / 2 + 'px';
  pet.style.top = mouseY + pet.offsetHeight / 2 - 50 + 'px';
}

function playWithPet() {
  var currLeft = pet.style.left;
  var currTop = pet.style.top;
  var currTransform = pet.style.transform;

  // pet.style.transformOrigin = '50% 50%';
  pet.style.transform = currTransform + 'rotate(360deg)';
  setTimeout(function() {
    pet.style.transform = currTransform;
    pet.style.left = currLeft;
    pet.style.top = currTop;
  }, 1000);
}

function resetPetSize() {
  currentScale = 1.0;
  pet.style.transform = 'scale(' + currentScale + ')';
}
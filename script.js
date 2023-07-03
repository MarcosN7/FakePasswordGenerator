var welcomeButton = document.getElementById('welcome-button');
var moveCount = 0;

welcomeButton.addEventListener('mouseover', moveButton);
welcomeButton.addEventListener('click', redirectToPasswordPage);

// Create audio element and set the sound source
var audio = new Audio('effect.mp3');

function moveButton() {
  if (moveCount < 10) {
    var xPos = Math.random() * window.innerWidth;
    var yPos = Math.random() * window.innerHeight;
    welcomeButton.style.left = xPos + 'px';
    welcomeButton.style.top = yPos + 'px';
    moveCount++;

    // Play the sound effect immediately after updating the button's position
    audio.currentTime = 0; // Reset the audio playback
    audio.play();
  } else {
    welcomeButton.style.left = '50%';
    welcomeButton.style.top = '50%';
    moveCount = 0;
    welcomeButton.removeEventListener('mouseover', moveButton);
  }
}

function redirectToPasswordPage() {
  window.location.href = 'password.html';
}

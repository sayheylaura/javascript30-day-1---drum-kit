'use strict';

function handleKeyDown(event) {
  const keyCode = event.keyCode;
  
  const audioEl = document.querySelector(`audio[data-key="${keyCode}"]`);

  playSound(audioEl);
}

function playSound(audio) {
  if(audio) {
    audio.load();
    audio.play();
  }
}

window.addEventListener('keydown', handleKeyDown);
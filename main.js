'use strict';

function handleKeyDown(event) {
  const keyCode = event.keyCode;

  const audioEl = document.querySelector(`audio[data-key="${keyCode}"]`);
  const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);

  playSound(audioEl);

  addTransition(keyElement);

  removeTransition();
}

function playSound(audio) {
  if (audio) {
    audio.load();
    audio.play();
  }
}

function addTransition(key) {
  if (key) {
    key.classList.add('playing');
  }
}

function removeTransition() {
  const keyElements = document.querySelectorAll('.key');

  keyElements.forEach(keyEl => {
    keyEl.addEventListener('transitionend', handleTransitionEnd);
  })
}

function handleTransitionEnd(event) {
  const propertyName = event.propertyName;
  if (propertyName === 'transform') {
    this.classList.remove('playing');
  }
}

window.addEventListener('keydown', handleKeyDown);
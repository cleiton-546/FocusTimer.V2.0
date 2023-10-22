import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}


export function add() {
  if ( state.minutes <=55) {
    state.minutes += 5;
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
  }
}

export function subtract(){
  if ( state.minutes >=5) {
    state.minutes -= 5;
    timer.updateDisplay();
    sounds.buttonPressAudio.play();
  }
}

/* cards  */

export function flower() {
  if (sounds.forest.paused) {
    sounds.rain.pause();
    sounds.coffee.pause();
    sounds.firePlace.pause();

    sounds.forest.play();
  } else {
    sounds.forest.pause();
  }
}

export function rain() {
  if(sounds.rain.paused) {
     sounds.forest.pause();
     sounds.coffee.pause();
     sounds.firePlace.pause();

     sounds.rain.play();
  }else{
    sounds.rain.pause(); 
  }
}

export function coffee() {

  if (sounds.coffee.paused) {
    sounds.rain.pause();
    sounds.forest.pause();
    sounds.firePlace.pause();

    sounds.coffee.play();
  } else {
    sounds.coffee.pause();
  }
}
  
 


export function fire() {

  if (sounds.firePlace.paused) {
    sounds.rain.pause();
    sounds.forest.pause();
    sounds.coffee.pause();

    sounds.firePlace.play();
  } else {
    sounds.firePlace.pause();
  }
}
 
  





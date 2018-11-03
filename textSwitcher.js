"use strict";

(function(){

  window.onload = init;

  /** Setup the button presses */
  function init() {
    document.querySelector('#getMemeButton').onclick = generateMeme;
  }

  function isEven(n) {
    return n % 2 == 0;
  }

  function isOdd(n) {
    return Math.abs(n % 2) == 1;
  }

  /** Take the input from the user form and mem-fy it */
  function generateMeme() {
      // Get the words from the input field
      var words = document.querySelector('#wordsToMeme').value.toLowerCase();
      var newWords = "";

      // Loop through and set as upercase appropriately
      for ( var i = 0; i < words.length; ++i ) {
        // Make a double space in between words
        if( words[i] === ' ' ) {
          newWords += ' ';
        }

        if ( isOdd(i) ) {
          newWords += words[i];
        } else {
          newWords += words[i].toUpperCase();
        }

        newWords += ' ';
      }


      var outDiv = document.querySelector('#memeOut');

      clearDiv( outDiv );
      addParToDiv( outDiv, newWords );
  }

  /** Remove all elements from the given div */
  function clearDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
  }

  /** Add a <p> to the given div with the provided text */
  function addParToDiv(div, text) {
    var p1 = document.createElement('p');

    p1.textContent = text;
    fadeIn(p1);
    div.appendChild(p1);
  }

  /** Fade an elemnt in */
  function fadeIn(el) {
    el.style.opacity = 0;

    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
      last = +new Date();

      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };

    tick();
  } // End fadeIn

}());

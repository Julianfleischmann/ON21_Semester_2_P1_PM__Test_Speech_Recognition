// Using the API see: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

let recognition = new SpeechRecognition();

recognition.onresult = function(event) {
    console.log(event.results[0][0].transcript);
}

function startRec () {
    recognition.start();
}

function stopRec () {
    recognition.stop();
}

// recognition.onspeechend = function() {
//     recognition.stop();
//   }  
  
// document.body.onclick = function() {
//     recognition.start();
// }
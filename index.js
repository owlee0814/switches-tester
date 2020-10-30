var x = document.querySelector("#pressed");

window.addEventListener("keydown", playNote);

function playNote(e) {
  	if(e.repeat) return;

	playAudio('sounds/' + `${e.code}` + '.mp3');

}
function playAudio(url) {
  new Audio(url).play();
}
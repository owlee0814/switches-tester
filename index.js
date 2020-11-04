var x = document.querySelector("#pressed");

window.addEventListener("keydown", playNote);

var i = 0;
var arr = ["tea", "community", "awareness", "economics", "nation", "throat", "dirt", "farmer", "recipe", "currency", "disk", "marketing", "woman", "effort", "moment"];
var description = "Find your favorite switches before building one. Recommended to wear a headset";

typeWriter();

function playNote(e) {
  	if(e.repeat) return;

	playAudio('sounds/' + `${e.code}` + '.mp3');

}

function playAudio(url) {
  new Audio(url).play();
}

function typeWriter() {
	if(i < description.length) {
		document.getElementById("description").innerHTML += description.charAt(i);
		i++;
		setTimeout(typeWriter, 50);
	}
}
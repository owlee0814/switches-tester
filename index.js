var x = document.querySelector("#pressed");

window.addEventListener("keydown", playNote);

var i = 0;
var arr = ["tea", "community", "awareness", "economics", "nation", "throat", "dirt", "farmer", "recipe", "currency", "disk", "marketing", "woman", "effort", "moment"];
var description = "Find your favorite switches before building one. Recommended to wear a headset";
var volumeBar = document.getElementById("volumeBar");
var currentVolume = 0.5;

typeWriter();

function playNote(e) {
  	if(e.repeat) return;
	playAudio('sounds/' + `${e.code}` + '.mp3');
}

volumeBar.oninput = function() {
  setVolume(this.value);
}

 function setVolume(newVolume) {
 	newVolume = newVolume / 100
    currentVolume = parseFloat(newVolume);
}

function playAudio(url) {
	var audio = new Audio(url);
	audio.volume = currentVolume;
  	audio.play();
}

function typeWriter() {
	if(i < description.length) {
		document.getElementById("description").innerHTML += description.charAt(i);
		i++;
		setTimeout(typeWriter, 50);
	}
}
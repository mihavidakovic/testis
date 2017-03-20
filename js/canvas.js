//elementi kanvasa
var canvas = document.getElementById('meme');
const predogled = document.getElementById('predogled');

//lastnosti kanvasa
var ctx=canvas.getContext("2d");
ctx.font="20px Georgia";
//funkcije kanvasa
function memePreview() {
	var zgornjiTekst = document.getElementById('zgornji').value;
	var spodnjiTekst = document.getElementById('spodnji').value;
	if (zgornjiTekst == null || spodnjiTekst == null) {
		console.log(zgornjiTekst, spodnjiTekst);
	} else {
	ctx.clearRect(0, 0, canvas.width, canvas.height);	
	ctx.fillText(zgornjiTekst, 10,50);
	ctx.fillText(spodnjiTekst, 10, 250);
}
}

//eventlistenerji
predogled.addEventListener('click', memePreview)
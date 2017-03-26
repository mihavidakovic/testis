//elementi kanvasa
var canvas = document.getElementById('meme');
const predogled = document.getElementById('predogled');

//lastnosti kanvasa
var ctx=canvas.getContext("2d");

//funkcije kanvasa
function memePreview() {	
	var zgornjiTekst = document.getElementById('zgornji').value;
	var spodnjiTekst = document.getElementById('spodnji').value;
	if (zgornjiTekst == null || spodnjiTekst == null ) {
		console.log(zgornjiTekst, spodnjiTekst);
	} else {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "white";
	ctx.strokeStyle = "black";
	ctx.font="100px impact";	
	ctx.fillText(zgornjiTekst, 10,50);
	ctx.fillText(spodnjiTekst, 10,150);
	ctx.lineWidth = 2;
	ctx.strokeText(zgornjiTekst, 10,50);
	ctx.strokeText(spodnjiTekst, 10,150);
}
}

function dodajUrl() {
	var urlSlike = document.getElementById('url').value;
	canvas.style.backgroundImage = "url('"+ urlSlike + "')";
}

//eventlistenerji
predogled.addEventListener('click', memePreview);
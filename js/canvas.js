//elementi kanvasa
var canvas = document.getElementById('meme');
const shrani = document.getElementById('shrani');
const dodajSliko = document.getElementById('dodaj');
const reset = document.getElementById('reset');

//lastnosti kanvasa
var ctx = canvas.getContext("2d");

//FUNKCIJE KANVASA
//Preview funkcija
function memePreview() {	
	var zgornjiTekst = document.getElementById('zgornji').value;
	var spodnjiTekst = document.getElementById('spodnji').value;
	if (zgornjiTekst == null || spodnjiTekst == null ) {
		console.log(zgornjiTekst, spodnjiTekst);
	} else {
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

//potreben element za kasnejšo manipulacijo
img = document.createElement('img');

//funkcija, ki doda vnešeni url v kanvas
function dodajUrl() {
	var urlSlike = document.getElementById('url').value;
	canvas.style.backgroundImage = "url('"+ urlSlike + "')";
	img.src = urlSlike;
	ctx.drawImage(img, 0, 0, 500, 500);
}

//funkcija, ki pretvori canvas v url
function shraniMeme() {
	var dataURL = canvas.toDataURL;	
	console.log(dataURL);
}

function ponastaviMeme() {
	ctx.clearRect(0, 0, 500, 500);
}

//eventlistenerji
shrani.addEventListener('click', shraniMeme);
dodajSliko.addEventListener('click', dodajUrl);
reset.addEventListener('click', ponastaviMeme);
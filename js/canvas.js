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
	tekst = document.getElementById('tekst').value;
	if (tekst == null) {
		console.log(tekst);
	} else {
	ctx.fillStyle = "white";
	ctx.strokeStyle = "black";
	ctx.font="100px impact";	
	ctx.fillText(tekst, 10,50);
	ctx.lineWidth = 2;
	ctx.strokeText(tekst, 10,50);
}
}

//funkcija, ki doda vnešeni url v kanvas
function dodajUrl() {
	var urlSlike = document.getElementById('url').value;
	canvas.style.backgroundImage = "url('"+ urlSlike + "')";
	//potreben element za kasnejšo manipulacijo
	img = new Image();
	img.setAttribute('crossOrigin', 'anonymous');
	img.src = urlSlike;
	ctx.drawImage(img, 0, 0, 500, 500);
}

//funkcija, ki pretvori canvas v url
function shraniMeme() {
	var dataURL = canvas.toDataURL("image/jpeg");	
	console.log(dataURL);
}

function ponastaviMeme() {
	ctx.clearRect(0, 0, 500, 500);
	document.getElementById('tekst').value = "";
}

//eventlistenerji
shrani.addEventListener('click', shraniMeme);
dodajSliko.addEventListener('click', dodajUrl);
reset.addEventListener('click', ponastaviMeme);

// var e = {}, // A container for DOM elements
//     reader = new FileReader(),
//     image = new Image(),
//     ctxt = null, // For canvas' 2d context
//     renderMeme = null, // For a function to render memes
//     get = function (id) {
//         // Short for document.getElementById()
//         return document.getElementById(id);
//     };
// // Get elements (by id):
// e.box1 = get("box1");
// e.ifile = get("ifile");
// e.box2 = get("box2");
// e.topline = get("topline");
// e.bottomline = get("bottomline");
// e.c = get("c"); // canvas;
// e.downloadLink = get("downloadLink");
// // Get canvas context:
// ctxt = e.c.getContext("2d");

// renderMeme = function () {
//     var writeText = function (text, x, y) {
//         var f = 36; // Font size (in pt)
//         for (; f >= 0; f -=1) {
//             ctxt.font = "bold " + f + "pt Impact, Charcoal, sans-serif";
//             if (ctxt.measureText(text).width < e.c.width - 10) {
//                 ctxt.fillText(text, x, y);
//                 ctxt.strokeText(text, x, y);
//                 break;
//             }
//         }
//     };
//     e.c.width = image.width;
//     e.c.height = image.height;
//     ctxt.drawImage(image, 0, 0, e.c.width, e.c.height);
//     ctxt.textAlign = "center";
//     ctxt.fillStyle = "white";
//     ctxt.strokeStyle = "black";
//     ctxt.lineWidth = 2;
//     writeText(e.topline.value, e.c.width / 2, 50);
//     writeText(e.bottomline.value, e.c.width / 2, e.c.height - 20);
//     e.downloadLink.href = e.c.toDataURL("image/jpeg");
// };

// e.ifile.onchange = function () {
//     reader.readAsDataURL(e.ifile.files[0]);
//     reader.onload = function () {
//         image.src = reader.result;
//         image.onload = function () {
//             renderMeme();
//             e.box1.style.display = "none";
//             e.box2.style.display = "";
//         };
//     };
// };
// e.topline.onkeyup = renderMeme;
// e.bottomline.onkeyup = renderMeme;
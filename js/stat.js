//Elementi
const naslov = document.getElementById('naslov');
const ustvarjeno = document.getElementById('ustvarjeno');
const slika = document.getElementById('slika');
const downvote = document.getElementById('downvote');
const upvote = document.getElementById('upvote');

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.open('GET', 'posti.json', true);
xobj.onreadystatechange = function () {
if (xobj.readyState == 4 && xobj.status == "200") {

// .open will NOT return a value but simply returns undefined in async mode so use a callback
callback(xobj.responseText);

}
}
xobj.send(null);

}
//začetna pozicija v json zbirki, ki je naključna vrednost v našem primeru 0->20
var indeks = Math.floor(Math.random() * 21);

// Call to function with anonymous callback
loadJSON(function(response) {
//Deklaracija json responsa v spremenljivko, ki deluje kot zbirka (globalno dostopna)
zbirka = JSON.parse(response);

//Začetna pozicija indeksa in prikaz slike (stvar spremembe)
naslov.innerHTML = naslov.innerHTML + zbirka[indeks].title;
ustvarjeno.innerHTML = ustvarjeno.innerHTML + zbirka[indeks].created_at;
slika.src = zbirka[indeks].url;



});

//Funkcije
//funkcija za prestavljanje
function naprej() {
	if(indeks >= zbirka.length - 1 || indeks < 0) {
		indeks = Math.floor(Math.random() * 21);
		naslov.innerHTML = "";
		ustvarjeno.innerHTML = "";
		naslov.innerHTML = naslov.innerHTML + zbirka[indeks].title;
		ustvarjeno.innerHTML = "Ustvarjeno: " + zbirka[indeks].created_at;
		slika.src = zbirka[indeks].url;
	} else {
		indeks = Math.floor(Math.random() * 21);
		naslov.innerHTML = "";
		ustvarjeno.innerHTML = "";
		naslov.innerHTML = naslov.innerHTML + zbirka[indeks].title;
		ustvarjeno.innerHTML = "Ustvarjeno: " + zbirka[indeks].created_at;
		slika.src = zbirka[indeks].url;
	}

}


upvote.addEventListener('click', naprej);
downvote.addEventListener('click', naprej);
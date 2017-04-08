//Elementi
const naslov = document.getElementById('naslov');
const ustvarjeno = document.getElementById('ustvarjeno');
const slika = document.getElementById('slika');
const downvote = document.getElementById('downvote');
const upvote = document.getElementById('upvote');

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

getJSON('http://slomemes.si/posti',
function(err, data) {
  if (err != null) {
    alert('Something went wrong: ' + err);
  } else {
    alert('Your query count: ' + data.query.count);
  }
});


//JSON load funkcija (nevem kaj se tukaj dogaja, skopirano z neta)
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

var zbirkaPregledanih = [];
//FUNKCIJE
//funkcija za prestavljanje
function naprej() {
	if(indeks >= zbirka.length - 1 || indeks < 0) { //tukaj omejimo delovanje funkcije na velikost jsona v našem primeru 20
		indeks = Math.floor(Math.random() * zbirka.length); //random 0->velikost zbirke
		naslov.innerHTML = ""; //ponastavimo tekst na prazen string, če ne nam jih sešteva
		ustvarjeno.innerHTML = "";
		naslov.innerHTML = naslov.innerHTML + zbirka[indeks].title; //nastavimo tekst na vrednost polja v json zbirki z trenutnim indeksom
		ustvarjeno.innerHTML = "Ustvarjeno: " + zbirka[indeks].created_at + " " + zbirka[indeks].id;
		slika.src = zbirka[indeks].url;
		zbirka.splice(indeks, 1);
		zbirkaPregledanih.push(indeks);
		console.log(zbirkaPregledanih.length);
	} else {
		indeks = Math.floor(Math.random() * zbirka.length); //random 0->velikost zbirke
		naslov.innerHTML = "";
		ustvarjeno.innerHTML = "";
		naslov.innerHTML = naslov.innerHTML + zbirka[indeks].title;
		ustvarjeno.innerHTML = "Ustvarjeno: " + zbirka[indeks].created_at + " " + zbirka[indeks].id;
		slika.src = zbirka[indeks].url;
		zbirka.splice(indeks, 1);
		zbirkaPregledanih.push(indeks);
		console.log(zbirkaPregledanih.length);
	}

}

//Event listenerji
upvote.addEventListener('click', naprej);
downvote.addEventListener('click', naprej);
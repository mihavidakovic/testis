const slika = document.getElementsByClassName('testna');

function resize() {
	slika.className = "testna_spremenjena";
}

slika.addEventListener('onclick', resize);
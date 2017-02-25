console.log('dasd');
const slika = document.getElementById('#testna');

function resize() {
	console.log('drek');
	slika.style.width = '50px';
}

slika.addEventListener('click', resize);
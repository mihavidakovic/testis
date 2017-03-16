var nazaj = document.getElementsByClassName('nazaj')[0];
var naprej = document.getElementsByClassName('naprej')[0];

var picturesArray = []; //creating array of pictures

//populating array by getting ids
for (var i = 0; i < 5; i++) {
	picturesArray[i] = document.getElementById(i);
	}

//če indeks ne obstaja ga nastavimo
var test = localStorage.getItem("indeks");
if (test == null) {
	localStorage.setItem("indeks", 0);
}

//setting the first picture
var index = localStorage.getItem("indeks");
var firstPicture = document.getElementById(localStorage.getItem("indeks"));
var class2 = firstPicture.className;
if(class2 == class2) {
	firstPicture.className += " active";
} else {
	firstPicture.className -= " active";
}

//spremenljivka ki določa status auto slide funkcije
var activeAutoSlide = true;
//function that executes on click of next button
function indexPlus() {
	var inactivePictures = [];
	var notIndex = [0,1,2,3,4];
	var notIndex1 = notIndex.splice(index, 1);

	for (var i = 0; i < picturesArray.length; i++) {
	inactivePictures[i] = document.getElementById(notIndex1);
} 
	if (index >= picturesArray.length - 1) { //this resets the index
		index = 0; //this resets the index
		var activePicture = document.getElementById(index);
		var class1 = activePicture.className;
			if(class1 == "slika active") { //this checks class of the active picture
				activePicture.classList.remove("active"); //this removes active class
			} else {
				activePicture.className += " active"; //this adds active class
			}
	} else {
		index++;
		var activePicture = document.getElementById(index);
		var class1 = activePicture.className;		
			if(class1 == "slika active") {
				activePicture.classList.remove("active");
			} else {
				activePicture.className += " active";
			}
	}
	for (var i = 0; i < picturesArray.length; i++) {
		if(activePicture.className == inactivePictures[i].className) {//inactivePictures[i].className
			inactivePictures[i].classList.remove("active");
		} 
	}
	//shranimo indeks v localstorage
	localStorage.setItem("indeks", index);
	activeAutoSlide = false;
}

//function that executes on click of back button
function indexMinus() { 
	var inactivePictures = [];
	var notIndex = [0,1,2,3,4];
	var notIndex1 = notIndex.splice(index, 1);

	for (var i = 0; i < picturesArray.length; i++) {
	inactivePictures[i] = document.getElementById(notIndex1);
	}
	if (index <= 0) {
		index = picturesArray.length - 1;
		var activePicture = document.getElementById(index);
		var class1 = activePicture.className;
		if(class1 == "slika active") { //this checks class of the active picture
			activePicture.classList.remove("active"); //this removes active class
		} else {
			activePicture.className += " active"; //this adds active class
		}
	} else {
		index--;
		var activePicture = document.getElementById(index);
		var class1 = activePicture.className;		
		if(class1 == "slika active") {
			activePicture.classList.remove("active");
		} else {
			activePicture.className += " active";
		}
	}
	//preverjanje če je klasa neaktivnih slik enaka aktivni sliki
	for (var i = 0; i < picturesArray.length; i++) {
		if(activePicture.className == inactivePictures[i].className) {
			inactivePictures[i].classList.remove("active");
		} 
	}
	//shranimo indeks v localstorage
	localStorage.setItem("indeks", index);
	activeAutoSlide = false;
}

//na ta način omejimo sprožanje funkcije prevečkrat kar lahko ogrozi stabilnost brskalnika
function debounce(func, wait = 1, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//dobivanje navbara na classname "navbar"
var navbar = document.getElementsByClassName('navbar')[0];

//funkcija ki preverja kje se nahajamo na strani
function checkForScroll(e) {
	if (window.scrollY >= 600) {
		navbar.classList.add("bg", "fixed");
	} else {
		navbar.classList.remove("bg", "fixed");
	}
}

function checkForScrollHidden(e) {
	if (window.scrollY > 100 && window.scrollY < 600) {
		navbar.classList.add("skrito");
	} else {
		navbar.classList.remove("skrito");
	}
}



//interval za sprožanje funkcije autoSlide, čas je v milisekundah
var timerZaSlide = setInterval(autoSlide, 5000);
//autoSlide funkcija poskrbi za avtomatsko prestavljanje slajdov
function autoSlide() {
	if (activeAutoSlide == true) {
		test = test - 1;
		indexPlus();
	} else {
		activeAutoSlide = true;
	}
}

//slide in
const slikeZaSlide = document.querySelectorAll('.slide-in');
function slikeSlide(e) {
	slikeZaSlide.forEach(function(img) {
	const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
	const imageBottom = img.offsetTop + img.height;
       const isHalfShown = slideInAt > img.offsetTop;
       const isNotScrolledPast = window.scrollY < imageBottom;
       if (isHalfShown && isNotScrolledPast) {
         img.style.transform = "translateX(-100%)";
       } else {
         img.style.transform = "translateX(0%)";
       }
});
}
//ORIGINALNA FUNKCIJA
// function slikeSlide(e) {
// 	slikeZaSlide.forEach(slikaZaSlide => {
// 		const slideInAt = (window.scrollY + window.innerHeight) - slikaZaSlide.height / 2;
// 		const imageBottom = slikaZaSlide.offsetTop + slikaZaSlide.height;
//         const isHalfShown = slideInAt > slikaZaSlide.offsetTop;
//         const isNotScrolledPast = window.scrollY < imageBottom;
//         if (isHalfShown && isNotScrolledPast) {
//           slikaZaSlide.style.transform = "translateX(-100%)";
//         } else {
//           slikaZaSlide.style.transform = "translateX(0%)";
//         }

// 	});
// }


//event listeners
nazaj.addEventListener('click', indexMinus);
naprej.addEventListener('click', indexPlus);
window.addEventListener('scroll', debounce(checkForScroll));
window.addEventListener('scroll', debounce(checkForScrollHidden));
window.addEventListener('scroll', debounce(slikeSlide));



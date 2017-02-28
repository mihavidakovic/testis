var nazaj = document.getElementsByClassName('nazaj')[0];
var naprej = document.getElementsByClassName('naprej')[0];


var picturesArray = []; //creating array of pictures


//populating array by getting ids
for (var i = 0; i < 5; i++) {
	picturesArray[i] = document.getElementById(i);
	}

//setting the first picture
var index = 0;
var firstPicture = document.getElementById(index);
var class2 = firstPicture.className;
if(class2 == class2) {
	firstPicture.className += " active";
} else {
	firstPicture.className -= " active";
}

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



	for (var i = 0; i < picturesArray.length; i++) {
		if(activePicture.className == inactivePictures[i].className) {
			inactivePictures[i].classList.remove("active");
		} 
	}

	
}

//event listeners
nazaj.addEventListener('click', indexMinus);
naprej.addEventListener('click', indexPlus);

// function indexMinus() {
// 	if (index <= 0) {
// 		index = slike.length - 1;
// //		slika1.style.backgroundImage = "url("+ slike[index] +")";
// 	} else {
// 		index--;
// //		slika1.style.backgroundImage = "url("+ slike[index] +")";
// 	}
	
// }


// var slika = document.getElementsByClassName('this1')[0];
// var slika1 = document.getElementsByClassName('slika')[0];
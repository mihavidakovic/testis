var nazaj = document.getElementsByClassName('this')[0];
var naprej = document.getElementsByClassName('this1')[0];
var slika = document.getElementsByClassName('this1')[0];
var slika1 = document.getElementById('slika1');


var slike = ["http://cdn.bmwblog.com/wp-content/uploads/2016/10/BMW-G30-5-Series-M-Sport-exterior-42-750x500.jpg",
			 "http://s2.paultan.org/image/2016/10/G30-BMW-5-Series-6-630x289.jpg", 
			 "http://gtspirit.com/wp-content/uploads/2016/10/2017-BMW-G30-530d-6-e1476354520936.jpg", 
			 "http://www.bmw.si/content/dam/bmw/common/cs/teaserpool/home/small-teaser/request_test_drive_486x273.jpg/jcr:content/renditions/cq5dam.resized.img.485.low.time1448891403342.jpg", 
			 "http://www.bmwhk.com/content/dam/bmw/common/all-models/1-series/5-door/2015/images-and-videos/bmw-1-series-wallpaper-1920x1200-03-R.jpg/jcr:content/renditions/cq5dam.resized.img.485.low.time1448014414633.jpg"];

var index = 0;

function indeksPlus() {
	if (index >= slike.length) {
		index = 0;
		slika1.src=slike[index];
	} else {
		index++;
		slika1.src=slike[index];
	}
}

function indeksMinus() {
	if (index <= 0) {
		index = slike.length;
		slika1.src=slike[index];
	} else {
		index--;
		slika1.src=slike[index];
	}
	
}

nazaj.addEventListener('click', indeksMinus);
naprej.addEventListener('click', indeksPlus);
//elementi playerja
const player = document.querySelector('.video');
const video = player.querySelector('.viewer');
const playPause = player.querySelector('.video-play');
const tipkaPP = playPause.querySelector('.ion-ios-play');
const fullScreen = player.querySelector('.ion-android-expand');
const progressBar = player.querySelector('.progress-current');

const statusCircle =  player.querySelector('.state');
const statusCirclePrikaz = statusCircle.querySelector('.ion-ios-play');

const cas = player.querySelector('.video-time');
const casPrikaz = cas.querySelector('.time');

const progress = player.querySelector('.progress');

const volume = player.querySelector('.volume-progress');
const volumeBar = player.querySelector('.volume-progress-current');

//status krog na sredini
var showStatusCircle = false;
//funckcija, ki spreminja vrednost spremenljivke showStatusCircle
function statusCircleUpdate() {
	if (showStatusCircle == true) {
		showStatusCircle = false;
		statusCircle.classList.remove('visible');
	}
}

video.volume = 1;

//funkcije playerja
//play/pause
function playPauseVideo() {
	if (video.paused == true) {
		tipkaPP.className = "ion-ios-pause";
		showStatusCircle = true;
		statusCircle.classList.add('visible');
		statusCirclePrikaz.className = "ion-ios-play";
		video.play();
	} else {
		tipkaPP.className = "ion-ios-play";
		showStatusCircle = true;
		statusCircle.classList.add('visible');
		statusCirclePrikaz.className = "ion-ios-pause";
		video.pause();
	}
	//funkcija statusCircleUpdate naj se sproži po x ms
	setTimeout(statusCircleUpdate, 400);
}


//OBVEZNO POPRAVI
var stevec = 0;

//funkcija za izhod iz fullscreena
function exitFS() {
	if(document.exitFullscreen) {
    	document.exitFullscreen();
  	} else if(document.mozCancelFullScreen) {
    	document.mozCancelFullScreen();
  	} else if(document.webkitExitFullscreen) {
    	document.webkitExitFullscreen();
  	}
}

//funkcija za vstop v fullscreen
function fullScreenExpand() {
	if(stevec == 0) {
		if (video.requestFullscreen) {
  			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
  			video.mozRequestFullScreen();
		} else if (video.webkitRequestFullscreen) {
  			video.webkitRequestFullscreen();
		}
		stevec++;
	} else {
		stevec = 0;
		exitFS();
	}
}
function test() {
	console.log('drek');
}

//določa širino progressbara
function handleProgressBar() {
	const procent = (video.currentTime / video.duration) * 100;
	progressBar.style = "width: " + procent + "%";
}

//čas
function trenutniKoncniCas() {
	var sekundeT = parseInt(video.currentTime % 60);
	var minuteT = parseInt((video.currentTime / 60) % 60);
	//po kmečko popravljamo format
	if (sekundeT < 10) {
		sekundeT = "0" + sekundeT;
	}
	if (minuteT < 10) {
		minuteT = "0" + minuteT;
	}
	
	var sekundeK = parseInt(video.duration % 60);
	var minuteK = parseInt((video.duration / 60) % 60);
	//po kmečko popravljamo format
	if (sekundeK < 10) {
		sekundeK = "0" + sekundeK;
	}
	if (minuteK < 10) {
		minuteK = "0" + minuteK;
	}
	casPrikaz.innerHTML = minuteT + ":" + sekundeT + " / " + minuteK + ":" + sekundeK;
	//če je videa konc, zamenjamo ikonco
	if (video.currentTime == video.duration) {
		video.pause();
		tipkaPP.className = "ion-ios-refresh";
	}
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleVolumeBar() {
	const procentVolume = video.volume * 100;
	progressBar.style = "width: " + procentVolume + "%";
}

// function handleVolume(e) {
	
// }

window.SetVolume = function(val)
{
    console.log('Before: ' + video.volume);
    video.volume = val / 100;
    console.log('After: ' + video.volume);
}
	// const procentVolume = video.volume * 100;
	// volumeBar.style = "width: " + procentVolume + "%";


//event listenerji za player
video.addEventListener('click', playPauseVideo);
video.addEventListener('dblclick', fullScreenExpand);
statusCircle.addEventListener('dblclick', fullScreenExpand);
playPause.addEventListener('click', playPauseVideo);
statusCircle.addEventListener('click', playPauseVideo);
fullScreen.addEventListener('click', fullScreenExpand);
video.addEventListener('timeupdate', handleProgressBar);
video.addEventListener('timeupdate', trenutniKoncniCas);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

//var volumeLevel = e.offsetX / volume.offsetWidth;

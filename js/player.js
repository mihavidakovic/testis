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

//status krog na sredini
var showStatusCircle = false;

function statusCircleUpdate() {
	if (showStatusCircle == true) {
		showStatusCircle = false;
		statusCircle.classList.remove('visible');
	}
}


//funkcije playerja
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
	setTimeout(statusCircleUpdate, 400);
}



function fullScreenExpand() {
	if (video.requestFullscreen) {
  		video.requestFullscreen();
	} else if (video.mozRequestFullScreen) {
  		video.mozRequestFullScreen();
	} else if (video.webkitRequestFullscreen) {
  		video.webkitRequestFullscreen();
	}
}

function handleProgressBar() {
	const procent = (video.currentTime / video.duration) * 100;
	progressBar.style = "width: " + procent + "%";
}

function trenutniKoncniCas() {
	var sekundeT = parseInt(video.currentTime % 60);
	var minuteT = parseInt((video.currentTime / 60) % 60);

	var sekundeK = parseInt(video.duration % 60);
	var minuteK = parseInt((video.duration / 60) % 60);
	casPrikaz.innerHTML = minuteT + ":" + sekundeT + " / " + minuteK + ":" + sekundeK;

	if (video.currentTime == video.duration) {
		video.pause();
		tipkaPP.className = "ion-ios-refresh";
	}
}

//event listenerji za player
video.addEventListener('click', playPauseVideo);
playPause.addEventListener('click', playPauseVideo);
statusCircle.addEventListener('click', playPauseVideo);
fullScreen.addEventListener('click', fullScreenExpand);
video.addEventListener('timeupdate', handleProgressBar);
video.addEventListener('timeupdate', trenutniKoncniCas);
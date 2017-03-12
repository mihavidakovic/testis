//elementi playerja
const player = document.querySelector('.video');
const video = player.querySelector('.viewer');
const playPause = player.querySelector('.video-play');
const tipkaPP = playPause.querySelector('.ion-ios-play');
const fullScreen = player.querySelector('.ion-android-expand');
const progressBar = player.querySelector('.progress-current');
const statusCircle =  player.querySelector('.state');

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
		video.play();
	} else {
		tipkaPP.className = "ion-ios-play";
		showStatusCircle = true;
		statusCircle.classList.add('visible');
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


//event listenerji za player
video.addEventListener('click', playPauseVideo);
playPause.addEventListener('click', playPauseVideo);
statusCircle.addEventListener('click', playPauseVideo);
fullScreen.addEventListener('click', fullScreenExpand);
video.addEventListener('timeupdate', handleProgressBar);
//elementi playerja
const player = document.querySelector('.video');
const video = player.querySelector('.viewer');
const playPause = player.querySelector('.video-play');
const tipkaPP = player.querySelector('.ion-ios-play');

//funkcije playerja
function playVideo() {
	if (video.paused == true) {
		tipkaPP.className = "ion-ios-play";
		video.play();
	} else {
		tipkaPP.className = "ion-ios-pause";
		video.pause();
	}
}

//event listenerji za player
video.addEventListener('click', playVideo);
playPause.addEventListener('click', playVideo);
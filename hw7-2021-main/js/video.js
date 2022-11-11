var video = document.querySelector("#player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false;
	console.log('autoplay is off')
	console.log('looping is off')

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log('Play Video');
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video"); 
});

document.querySelector('#slower').addEventListener('click', function(){
	video.playbackRate =  video.playbackRate - .1
	console.log('Playback Speed is now', video.playbackRate)

});

document.querySelector('#faster').addEventListener('click', function(){
	video.playbackRate = video.playbackRate + .1
	console.log('Playback Speed is now', video.playbackRate)
});

document.querySelector('#skip').addEventListener('click', function(){
	if (video.currentTime < video.duration){
		video.currentTime = video.currentTime + 10
		console.log(video.currentTime);}

	else{
		video.currentTime = 0
		console.log(video.currentTime);
	}

});


document.querySelector('#mute').addEventListener('click', function(){
	if (video.muted == false){
		document.querySelector('#mute').innerHTML = 'Unmute'
		video.muted = true;
	}
	else{
		document.querySelector('#mute').innerHTML = 'Mute'
		video.muted = false
	}
});

document.querySelector('#slider').addEventListener('click', function(){
	video.volume = this.value/100;
	console.log("the current value is", video.volume);
	document.querySelector('#volume').innerHTML = video.volume*100+'%'
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
});
document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
});



const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
	navigator.mediaDevices.getUserMedia({video:true, audio:false})
	.then(localMediaStream => {
		video.srcObject = localMediaStream;
		video.play();
	}).catch(err => {
		console.log("OHH Shit ", err);
	});
}

function paintCanvas(){
	const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

	return setInterval(() => {
		ctx.drawImage(video,0,0,width,height);
	}, 16);
}

function takePhoto(){
	snap.currentTime = 0;
	snap.play();
	let shotData = canvas.toDataURL("image/jpeg");
	let link = document.createElement('a');
	link.href = shotData;
	link.setAttribute('download', 'screenshot');
	link.innerHTML = `<image src=${shotData} alt="screenshot" />`;
	strip.insertBefore(link, strip.firstChild);
}

getVideo();
video.addEventListener('canplay', paintCanvas);



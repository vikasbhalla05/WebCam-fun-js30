# Building the Intuition

1. Video streaming need a server.
2. The video is gonna come of the webcam and being dumped on the canvas element.
3. Create a function to get the video of the webcam
	```navigator.mediaDevices.getUserMedia({ video:true, audio:false })``` which returns a promise as ```localMediaStream```
4. Set the video src to localMediaStream as ```video.srcObject = localMediaSteam``` and them play the video.
5. Create a new function to paint subsequent images from the video element  using ```return setInterval``` & ```ctx.drawImage``` of 16ms after setting the width and height of canvas to video parameters.
6. run paintToCanvas function at video event listener ``canplay``.
7. Create a funtion for takePhoto - 
	- Play the snap sound
	- Take canvas data to `canvas.toDataURL('image.jpeg')`
	- create a link element with `href = data`, `setAtribute('download', 'name')`, `innerHTML = thumbnail image`.
	- insert before the first Child of strip element.


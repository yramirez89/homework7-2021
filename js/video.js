var video;  

window.addEventListener("load", function() {
	console.log("Good job opening the window")
video = document.querySelector("#player1")
volume = document.querySelector("#volume")

});



document.querySelector("#play").addEventListener("click", function() {
  console.log("Play Video");
  video.play()
  document.querySelector("#volume").innerHTML=video.volume *100 + "%"
  //.document.getElementById("myVideo").volume = 0.2; do by 100%
  
});



document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
	
});

document.querySelector("#slower").addEventListener("click", function() {
  console.log("Slow Down Video")
  video.playbackRate *=.95;
  console.log(video.playbackRate);
    
 });

 document.querySelector("#faster").addEventListener("click", function() {
  video.playbackRate /=.95;
  console.log("New Speed is "+video.playbackRate);
    
 });

 document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
  console.log(video.currentTime)
  video.currentTime += 15
  if (video.currentTime >= video.duration) {
    video.currentTime=0
    video.play()
  }
  console.log(video.currentTime)
	
});

document.querySelector("#mute").addEventListener("click", function() {
  
if (video.muted == false){
  console.log("Mute Video")
  video.muted = true
  document.querySelector("#mute").innerHTML = "Unmute"
  this.innerHTML="Unmute"
}
else {
  console.log("Unmute Video")
  video.muted = false
  document.querySelector("#mute").innerHTML = "Mute"

}

    
 });

 document.querySelector("#slider").addEventListener("click", function() {
  console.log("Changing volume")
  console.log(this.value)
  video.volume = this.value /100
  document.querySelector("#volume").innerHTML=video.volume *100 + "%"
    
 });

document.querySelector("#vintage").addEventListener("click", function() {
  console.log("Changing CSS")
  video.classList.add("oldSchool");
  
   });

document.querySelector("#orig").addEventListener("click", function() {
  console.log("Removing CSS")
  video.classList.remove("oldSchool");
  
   });

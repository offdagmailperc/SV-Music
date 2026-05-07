setInterval(getTime, 1000);
function getTime(){
  const audioElement = document.getElementById("audioElement");
  audioElement.addEventListener("loadedmetadata", () => {
    const duration = audioElement.duration;
    let v = Math.floor((audio.currentTime / 60));
    let w = (audio.currentTime % 60).toFixed(0);
    let x = Math.floor((duration / 60));
    let y = (duration % 60).toFixed(0);
    document.getElementById("duration").textContent = `${v}:${w}/${x}:${y}`;
  
  
  
  });
}
var audio = document.getElementById("audioElement");
var toggleBtn = document.getElementById("toggleBtn");
function togglePlay() {
  if (audio.paused) {
    audio.play();
    toggleBtn.textContent = "Pause";
  } else {
    audio.pause();
    toggleBtn.textContent = "Play";
  }
}
        
function checkPlayingStatus() {
  var statusElement = document.getElementById("playStatus");
  if (!audio.paused) {
    statusElement.textContent = "Audio is currently playing.";
    statusElement.style.color = "green";
  } else if (audio.currentTime > 0) {
    statusElement.textContent = "Audio is paused.";
    statusElement.style.color = "orange";
  } else {
    statusElement.textContent = "Audio is ready to play.";
    statusElement.style.color = "blue";
  }
}
        
// Update button text when audio ends
audio.addEventListener('ended', function() {
  toggleBtn.textContent = "Play";
});

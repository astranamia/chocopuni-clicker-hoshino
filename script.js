const fumo = document.querySelector('.uheee');
const musicToggle = document.getElementById('bgmbutton');
const backgroundMusic = document.getElementById('bgm');
const musicIcon = document.querySelector('#musictoggle')

function getVoice() {
    fetch('audio_data.json')
        .then(response => response.json())
        .then(data => {
    const audioArray = data.audio_files;
    
    const minId = 1;
    const maxId = data.length;
    const randomId = Math.floor(Math.random() * 61) + 1;

    const matchedAudio = audioArray.find(item => item.id === randomId);

    if (matchedAudio) {
      const audio = new Audio(matchedAudio.filepath);
      audio.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    } else {
      console.log("No matching ID found in JSON.");
    }
  })
  .catch(error => console.error("Error loading the JSON file:", error));
}

function activateMusic(){
  if(backgroundMusic.paused){
    backgroundMusic.play();
    musicIcon.src = 'assets/volume-off-solid.png';
  }else{
    backgroundMusic.pause();
    musicIcon.src = 'assets/volume-xmark-solid.png';
  }
}


fumo.addEventListener("click", ()=> getVoice());

musicToggle.addEventListener('click', (e) =>{
  e.stopPropagation();
  activateMusic();
})





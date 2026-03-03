const audio = document.querySelector('audio');

if(audio.readyState > 0){
    displayDuration();
    currentTime.innerHTML = calculateTime(audio.currentTime);
};

// Audio controls 
const playPause = document.getElementById('PlayPause');
//  plus10 = document.getElementById('Plus10'),
//  back10 = document.getElementById('Back10');

playPause.addEventListener('click', ()=>{
    if(audio.paused){
        playPause.src = 'public/media/pause.svg';
        audio.play();
    }else{
        playPause.src = 'public/media/play.svg';
        audio.pause();
    }
});
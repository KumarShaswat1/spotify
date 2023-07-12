console.log('Welcome to spotify');
let index=0;
let masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('adjustBar');

let audioElement= new Audio('Freedom.mp3');
let songItems=Array.from(document.getElementsByClassName('Name'));
let songs=[
    {songName:"Freedom",locatioN:"Freedom.mp3"},
    {songName:"courage",locatioN:"CourageReprise_Master.wav"},
    {songName:"chilled",locatioN:"Chilled Acoustic Indie Folk Instrumental No Copyright.wav"},
    {songName:"Courage Reprise",locatioN:"CourageReprise_Master.wav"},
    {songName:"01 Chill",locatioN:"01 Chill Lofi Track Master 01.wav"}
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].locatioN;
    element.getElementsByClassName("SongName")[0].innerText=songs[i].songName;
});
masterPlay.addEventListener('click',()=>{
if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
}
});
audioElement.addEventListener('timeupdate',()=>{

progress=parseInt((audioElement.currentTime/audioElement.duration)*100);

myProgressbar.value=progress;
});
audioElement.addEventListener('change',
()=>{
    audioElement.currentTime=myProgressbar.value*audioElement.duration/100;
});

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
          
//     })
// })
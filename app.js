const music=new Audio('ibiraro.mp3')

const songs= [

    {
        id:'1',
        songName:'15 <br> <div class="subtitles">kenny k shot</div>',
        poster:"amafoto/intare.jpg", 
    },
    {
        id:'2',
        songName:'INTARE <br> <div class="subtitles">kenny k shot</div>',
        poster:"amafoto/intare.jpg",
    }

]
Array.from(document.getElementsByClassName('artist')).forEach((element, i)=>{
    element:getElementByTagName('img')[0].src=songs[i].poster,
    element:getElementByTagName('h5')[0].innerHTML=songs[i].songName,
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else{
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})
const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
})
}

let index=0;
let poster_master_Play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
   element.addEventListener('click', (e)=>{
    index = e.target.id;
    makeAllplays();
    e.target.classList.remove('bi-play-circle-fill');
    e.target.classList.add('bi-pause-circle-fill');
    music.src = 'audio/${index}.mp3';
    music.play();


   }) 
})
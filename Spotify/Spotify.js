function home(){
    window.location.assign("https://open.spotify.com/artist/2exebQUDoIoT0dXA8BcN1P");
}
function about(){
    window.location.assign("https://support.spotify.com/us/article/what-is-spotify/#:~:text=Spotify%20is%20a%20digital%20music,to%20upgrade%20to%20Spotify%20Premium.&text=Build%20collections%20of%20music%20and%20podcasts");
}

let masterPlay = document.getElementById("play");
let re = document.getElementById("re");
let audio = new Audio("songs/1.mp3");
let seekBar = document.getElementById("myProgressBar");
let gif = document.getElementById("fig");
let songedits = Array.from(document.getElementsByClassName("s1"));
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let index = 0;
let nss = document.getElementById("name");
let slider = document.querySelector("#volume");
let login = document.getElementById("lgn");

let boolcheck=false;
 let songs = [
 {songName:"Srivalli", filePath:"songs/1.mp3 ",cover:"cover/srivalli.jpg" },
 {songName:"Eswara",   filePath:"songs/2.mp3 ",cover:"cover/eswara.jpg" },
 {songName:"Nuvve Samastham", filePath:"songs/3.mp3 ",cover:"cover/nuvve.jpg" },
 {songName:"Muqabula", filePath:"songs/4.mp3",cover:"cover/mukkabula.jpg" },
 {songName:"Yechota nuvunna", filePath:"songs/5.mp3 ",cover:"cover/yechota.jpg" },
 {songName:"Aanandam Madhike", filePath:"songs/6.mp3 ",cover:"cover/AanandamaanandhaMadhike.jpg" },
 {songName:"Chitti Adugu", filePath:"songs/7.mp3 ",cover:"cover/Chitti Adugu.jpg" },
 {songName:"Nee Kannu Neeli Samudram", filePath:"songs/8.mp3 ",cover:"cover/nekallu.jpg" },
 {songName:"Chinni Chinni Chinukulu", filePath:"songs/9.mp3 ",cover:"cover/chinni.jpg" },
 {songName:"Mella Mellaga", filePath:"songs/10.mp3 ",cover:"cover/mellaga.jpg" },
 {songName:"Master the Blaster", filePath:"songs/11.mp3 ",cover:"cover/master.webp" },
 {songName:"DJ Tillu", filePath:"songs/12.mp3 ",cover:"cover/dj.jpg" },
 {songName:"Bheemla Nayak", filePath:"songs/13.mp3 ",cover:"cover/bheemla.webp" },
 {songName:"Prayatnama prayatnama", filePath:"songs/12.mp3 ",cover:"cover/chitra.webp" }
];

songedits.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].cover;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
    // element.getElementsByClassName("timestamp")[0].innerHTML = arr[i];
});

function makeplays(){
    songItemPlay.forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
};
let check=[];
for(let i=0;i<songs.length;i++){
    check[i]=0;
}

audio.addEventListener('timeupdate',()=>{

  
   
    // document.getElementById("hi").innerHTML=slider.value;
    if(boolcheck != true && audio.duration==audio.currentTime){
        index+=1;
        audio.src= `songs/${index+1}.mp3`;
        audio.play();
        check[index]=1;
        nss.innerText = songs[index].songName;
        nss.style.opacity=1;
        document.getElementById((index)-1).classList.remove('fa-pause-circle');
        document.getElementById((index)-1).classList.add('fa-play-circle');
        document.getElementById((index)).classList.remove('fa-play-circle');
        document.getElementById((index)).classList.add('fa-pause-circle');
    }else {
        if(boolcheck==true && audio.duration==audio.currentTime){
            index=index;
        audio.src= `songs/${index+1}.mp3`;
        audio.play();
        check[index]=1;
        nss.innerText = songs[index].songName;
        nss.style.opacity=1;
        document.getElementById((index)-1).classList.remove('fa-pause-circle');
        document.getElementById((index)-1).classList.add('fa-play-circle');
        document.getElementById((index)).classList.remove('fa-play-circle');
        document.getElementById((index)).classList.add('fa-pause-circle');
        }
    }
    let progress = ((audio.currentTime/audio.duration)*100);
    document.getElementById("timedur").innerHTML = parseInt(audio.duration/60) + " : " + (parseInt(audio.duration)-((parseInt(audio.duration/60))*60));
    document.getElementById("timeline").innerHTML = parseInt(audio.currentTime/60) + " : " + (parseInt(audio.currentTime)-((parseInt(audio.currentTime/60))*60));
    seekBar.value=progress;
  

});
seekBar.addEventListener('change',()=>{
    audio.currentTime = (seekBar.value*audio.duration)/100;
   
 });
 
 
songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index = parseInt(e.target.id);  
        audio.src= `songs/${index+1}.mp3`;
        for(let i=0;(i<songs.length &&i!=index);i++){
            check[i]=0;
        }
      if(check[index]==0){
        makeplays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

         nss.innerText = songs[index].songName;
         nss.style.opacity=1;
       
         audio.currentTime=0;
         seekBar.value=0;
         audio.play();  
         masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');  
        fig.style.opacity=1;
        check[index]=1;
        if(currentTime==audio.duration){
            index+=1;
            currentTime=0;
            seekBar.value=0;
            audio.src = `songs/${index}.mp3`;
            audio.play();
        }
      }
      
       else {
        audio.pause();
             e.target.classList.remove('fa-pause-circle');
             e.target.classList.add('fa-play-circle');
             masterPlay.classList.remove('fa-pause-circle');
             masterPlay.classList.add('fa-play-circle');
             fig.style.opacity=0;
             check[index]=0;
       }
  

    })
})

// let t = document.getElementById(toString(index)).classList;
masterPlay.addEventListener('click',()=>{
    // audio.volume = (slider.value)/100; 
    // document.getElementById("hi").innerHTML= index;
    if(check[index]==0){
    audio.play();
    if(index==0){
        nss.innerText="Srivalli";
         nss.style.opacity=1;
    }
    masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
    document.getElementById((index)).classList.remove('fa-play-circle');
    document.getElementById((index)).classList.add('fa-pause-circle');
    
    fig.style.opacity=1;
        check[index]=1;
    }else{
        audio.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        document.getElementById((index)).classList.remove('fa-pause-circle');
        document.getElementById((index)).classList.add('fa-play-circle');
       
         fig.style.opacity=0;
        check[index]=0;
    }


})


document.getElementById('forward').addEventListener('click',()=>{
    if(index>=songs.length){
        index=0;
    }else {
        index += 1;
    }
     audio.src= `songs/${index+1}.mp3`;
     nss.innerText = songs[index].songName;
     nss.style.opacity=1;
     audio.currentTime=0;
     seekBar.value=0;
     audio.play();
     makeplays();
     document.getElementById((index)).classList.remove('fa-play-circle');
     document.getElementById((index)).classList.add('fa-pause-circle');  
     masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');  
    fig.style.opacity=1;
 });
 document.getElementById('backward').addEventListener('click',()=>{
    if(index<=0){
        index=0;
    }else {
        index -= 1;
    }
     audio.src= `songs/${index+1}.mp3`;
     nss.innerText = songs[index].songName;
     nss.style.opacity=1;
     audio.currentTime=0;
     seekBar.value=0;
     makeplays();
     audio.play();  
     masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');  
    document.getElementById((index)).classList.remove('fa-play-circle');
    document.getElementById((index)).classList.add('fa-pause-circle');
    fig.style.opacity=1;
 });
 let kt =0;
 document.getElementById('re').addEventListener('click',()=>{
   if(kt==0){
    boolcheck=true;
   kt=1;
   re.classList.remove('fa-undo-alt');
   re.classList.add('fa-pause');
   
}else {
    boolcheck=false;
    kt=0;
    re.classList.remove('fa-pause');
    re.classList.add('fa-undo-alt');

}
 });
 login.addEventListener('click',()=>{
    window.location.href=("signin.html");
});



function volume_change(){
    document.getElementById("volume1").innerHTML = slider.value;
     audio.volume = ((slider.value)/100);
}



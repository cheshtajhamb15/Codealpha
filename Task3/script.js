let progress = document.querySelector("#progress")
let song = document.querySelector("#song")
let ctrlicon = document.querySelector("#ctrlicon")
let title = document.querySelector("h2");
let artist = document.querySelector("p");
let songImg = document.querySelector(".song-img");

let prevBtn = document.querySelector(".fa-backward");
let nextBtn = document.querySelector(".fa-forward");

let songs = [
    {
        name: "Satisfaya",
        artist: "Imran Khan",
        src: "songs/satisfaya.mp3",
        img: "images/img.png"
    },
    {
        name: "lonely",
        artist: "Akon",
        src: "songs/lonely.mp3",
        img: "images/lonely.png"
    },
    {
        name: "Running On My Mind",
        artist: "Ali-Gatie",
        src: "songs/Running_on_mind.mp3",
        img: "images/runningonmymind.png"
    },
    {
        name: "What If I Told You",
        artist: "Ali-Gatie",
        src: "songs/what_if_i_told_you.mp3",
        img: "images/whatifitoldyou.png"
    }
];

let currentIndex = 0;

// Load song function
function loadSong(index) {
    let s = songs[index];
    title.textContent = s.name;
    artist.textContent = s.artist;
    songImg.src = s.img;
    song.src = s.src;
    
}

// Play/Pause function
function playpause() {
    if (song.paused) {
        song.play();
        ctrlicon.classList.remove("fa-play");
        ctrlicon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }
}

// Next song
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    song.play();
    ctrlicon.classList.remove("fa-play");
    ctrlicon.classList.add("fa-pause");
});

// Previous song
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    song.play();
    ctrlicon.classList.remove("fa-play");
    ctrlicon.classList.add("fa-pause");
});

// Progress bar update
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

song.ontimeupdate = function () {
    progress.value = song.currentTime;
};

progress.onchange = function () {
    song.currentTime = progress.value;
    song.play();
    ctrlicon.classList.remove("fa-play");
    ctrlicon.classList.add("fa-pause");
};

// Load first song on start
loadSong(currentIndex);
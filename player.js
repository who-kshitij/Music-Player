var widthp = document.getElementById("player").style.width;
function showpl() {
  document.getElementById("leftbar").style.width = "40%";
}
function hidepl() {
  document.getElementById("player").style.width = widthp;
  document.getElementById("leftbar").style.width = "0";
}
var btnContainer = document.getElementById("rightbar");
var btns = btnContainer.getElementsByClassName("lbtns");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var i = 1;

const music = document.querySelector("audio");
const ply = document.getElementById("playbtn");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const songname = document.getElementById("songname");
const artist = document.getElementById("artist");
const imge = document.getElementById("imge");

const songs = [
  {
    name: "song-1",
    title: "Duniya",
    artist: "Akhil, Dhvani Bhanushali, Bhrigu Parashar",
    simage: "img-1"
  },
  {
    name: "song-2",
    title: "Perfect",
    artist: "Ed Sheeran",
    simage: "img-2"
  },
  {
    name: "song-3",
    title: "Aise Kyun",
    artist: "Artist-3",
    simage: "img-3"
  },
  {
    name: "song-4",
    title: "Duniya",
    artist: "Artist-4",
    simage: "img-4"
  }
]


let songindex = 0;

function dirsong(choice) {
  songindex=choice-1;
  changesong(songs[songindex]);
    ply.classList.replace("fa-play", "fa-pause");
    music.play();
    i = -1;
    imge.classList.add("animate");
  var btnCont = document.getElementById("leftbar");
  var btn = btnCont.getElementsByClassName("song");
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active-s");
      current[0].className = current[0].className.replace(" active-s", "");
      this.className += " active-s";
    });
  }
}

function playpause() {
  if (i == 1) {
    ply.classList.replace("fa-play", "fa-pause");
    music.play();
    i = -1;
    imge.classList.add("animate");
  }
  else {
    ply.classList.replace("fa-pause", "fa-play");
    music.pause();
    i = 1;
    imge.classList.remove("animate");
  }
}

const changesong = (songs) => {
  songname.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "songs/" + songs.name + ".mp3";
  imge.src = "images/" + songs.simage + ".jpg";
}

const nextsong = () => {
  songindex = (songindex + 1) % songs.length;
  changesong(songs[songindex]);
  i = 1;
  playpause();
}

const prevsong = () => {
  songindex = (songindex - 1 + songs.length) % songs.length;
  changesong(songs[songindex]);
  i = 1;
  playpause();
}

next.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong);





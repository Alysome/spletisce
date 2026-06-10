const slides = document.querySelectorAll(".slide");

const images = [
    "slike/jahta.jpg",
    "slike/jj.jpg",
    "slike/jj2.jpg",
    "slike/jj3.jpg",
    "slike/sl1.jpg",
    "slike/sl2.webp",
    "slike/sl3.jpg"
];

slides[0].style.backgroundImage = `url(${images[0]})`;
slides[1].style.backgroundImage = `url(${images[1]})`;

let currentImage = 0;
let currentSlide = 0;

function nextSlide() {

    const next = (currentSlide + 1) % 2;

    currentImage = (currentImage + 1) % images.length;

    slides[next].style.backgroundImage =
        `url(${images[currentImage]})`;

    slides[next].classList.add("active");
    slides[currentSlide].classList.remove("active");

    currentSlide = next;
}

/* prva menjava po 2 sekundah */
setTimeout(() => {
    nextSlide();

    /* nato vsakih 5 sekund */
    setInterval(nextSlide, 5000);

}, 2000);















const audio = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const seekBar = document.getElementById("seekBar");
const volumeBar = document.getElementById("volumeBar");
const time = document.getElementById("time");

audio.volume = 0.5;

/* autoplay po prvem kliku na stran */
document.addEventListener("click", () => {

    audio.play();

    playBtn.innerHTML = "❚❚";

}, { once:true });

playBtn.onclick = () => {

    if(audio.paused){

        audio.play();
        playBtn.innerHTML = "❚❚";

    }else{

        audio.pause();
        playBtn.innerHTML = "▶";
    }
};

volumeBar.oninput = () => {
    audio.volume = volumeBar.value;
};

audio.addEventListener("loadedmetadata", () => {

    seekBar.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {

    seekBar.value = audio.currentTime;

    const minutes =
    Math.floor(audio.currentTime / 60);

    const seconds =
    Math.floor(audio.currentTime % 60)
    .toString()
    .padStart(2,"0");

    time.textContent =
    `${minutes}:${seconds}`;
});

seekBar.oninput = () => {

    audio.currentTime = seekBar.value;
};

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

if (audio && playBtn && seekBar && volumeBar && time) {

    audio.volume = 0.5;

    // klik na play gumb
    playBtn.addEventListener("click", () => {

        if (audio.paused) {

            audio.play()
                .then(() => {
                    playBtn.innerHTML = "❚❚";
                })
                .catch(err => console.log(err));

        } else {

            audio.pause();
            playBtn.innerHTML = "▶";
        }
    });

    // glasnost
    volumeBar.addEventListener("input", () => {
        audio.volume = volumeBar.value;
    });

    // ko se naloži mp3
    audio.addEventListener("loadedmetadata", () => {
        seekBar.max = audio.duration;
    });

    // posodabljanje timeline
    audio.addEventListener("timeupdate", () => {

        seekBar.value = audio.currentTime;

        const minutes = Math.floor(audio.currentTime / 60);

        const seconds = Math.floor(audio.currentTime % 60)
            .toString()
            .padStart(2, "0");

        time.textContent = `${minutes}:${seconds}`;
    });

    // premikanje po pesmi
    seekBar.addEventListener("input", () => {
        audio.currentTime = seekBar.value;
    });

    // za debug
    audio.addEventListener("canplaythrough", () => {
        console.log("MP3 uspešno naložen");
    });

    audio.addEventListener("error", () => {
        console.log("Napaka pri nalaganju MP3");
    });
}

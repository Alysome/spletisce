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
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
// Fungsi untuk memeriksa apakah elemen berada dalam tampilan pengguna
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fungsi untuk mengaktifkan animasi saat elemen masuk dalam tampilan
function animateIfInViewport() {
    const image = document.querySelector('.holiday-img img');
    if (isElementInViewport(image)) {
        image.style.opacity = '1';
    }
}

// Panggil fungsi untuk memeriksa dan mengaktifkan animasi
window.addEventListener('scroll', animateIfInViewport);
window.addEventListener('load', animateIfInViewport);

// Fungsi untuk mengaktifkan animasi slide-in saat elemen masuk dalam tampilan
function animateCultureIfInViewport() {
    const cultureSection = document.querySelector('.Culture');
    const image = document.querySelector('.Culture-img img');
    
    if (isElementInViewport(cultureSection)) {
        image.style.transform = 'translateX(0)'; // Geser gambar ke dalam tampilan
        image.style.opacity = '1'; // Atur opasitas menjadi 1
    }
}

// Panggil fungsi untuk memeriksa dan mengaktifkan animasi saat halaman dimuat
window.addEventListener('load', animateCultureIfInViewport);
window.addEventListener('scroll', animateCultureIfInViewport);

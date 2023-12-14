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
function isElementInViewport(el, offset = 90) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= -offset &&
        rect.left >= -offset &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
    );
}

// Fungsi untuk mengaktifkan animasi saat elemen masuk dalam tampilan
function animateIfInViewport() {
    const image = document.querySelector('.holiday-img img');
    if (isElementInViewport(image, 50)) {
        image.style.opacity = '1';
    }
}

// Panggil fungsi untuk memeriksa dan mengaktifkan animasi saat pengguna menggulir
window.addEventListener('scroll', animateIfInViewport);
window.addEventListener('load', animateIfInViewport);

// Fungsi untuk menambah class 'in-viewport' jika elemen .Culture terlihat
function checkVisibility() {
    var cultureSection = document.querySelector('.Culture');
    if (isElementInViewport(cultureSection)) {
        cultureSection.classList.add('in-viewport');
    }
}

// Jalankan fungsi checkVisibility saat pengguna menggulir
window.addEventListener('scroll', checkVisibility);

// Panggil checkVisibility saat halaman pertama kali dimuat
checkVisibility();

// Fungsi untuk mengaktifkan animasi saat elemen mendekati tampilan
function animateIfNearViewport() {
    const image = document.querySelector('.Culture-img img');
    if (isElementInViewport(image, 100)) { // Ganti 100 dengan offset sesuai kebutuhan Anda
        image.style.opacity = '1'; // Ganti class dengan style untuk mengubah opacity
    }
}

// Panggil fungsi untuk memeriksa dan mengaktifkan animasi saat halaman dimuat
window.addEventListener('load', animateIfNearViewport);

// Panggil fungsi untuk memeriksa dan mengaktifkan animasi saat pengguna menggulir
window.addEventListener('scroll', animateIfNearViewport);

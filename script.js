let currentSlide = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    items[currentSlide].classList.remove('active');
    currentSlide = (index + items.length) % items.length;
    items[currentSlide].classList.add('active');
}

function moveCarousel(n) {
    showSlide(currentSlide + n);
}

// Mostrar el primer elemento al cargar la página
items[currentSlide].classList.add('active');

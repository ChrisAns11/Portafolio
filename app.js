
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    let currentIndex = 0;
    showSlide(currentIndex);

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            nextSlide();
        } else if (event.key === 'ArrowLeft') {
            prevSlide();
        }
    });
});
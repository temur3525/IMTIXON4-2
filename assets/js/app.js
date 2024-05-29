let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-currentIndex * 100}%)`;
        dots[i].classList.remove('active');
    });

    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}


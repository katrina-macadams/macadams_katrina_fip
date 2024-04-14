// VARIABLES

(() => {
    const slider = document.querySelector('.img_cont');
    const prevBtn = document.querySelector('.left_arrow');
    const nextBtn = document.querySelector ('.right_arrow'); 
    let slideWidth = slider.clientWidth;
    let currentIndex = 0;



// FUNCTIONS

function prevSlide () {
    currentIndex--;
    
    if (currentIndex < 0) {
        currentIndex = slider.children.length - 1; 
    }
}


function nextSlide() {
    currentIndex++;

    if (currentIndex >= slider.children.length) {
        currentIndex = 0; 
    }
}

function updateSlideWidth () {
    slideWidth = slider.clientWidth; 
    showSlide(currentIndex); 
}

function showSlide (index) {
    console.log(index);
    const newTransformValue = -index * slideWidth;

    slider.style.transform = `translateX(${newTransformValue}px)`;
    
}

// EVENT LISTENERS

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
window.addEventListener('click', updateSlideWidth);
})();






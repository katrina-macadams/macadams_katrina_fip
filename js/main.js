
console.log("JS file connected");

    console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		

  

    const slider = document.querySelector('.img_cont');
    const prevBtn = document.querySelector('.left_arrow');
    const nextBtn = document.querySelector ('.right_arrow'); 
    let slideWidth = slider.clientWidth;
    let currentIndex = 0;
    const lightBox = document.querySelector("#lightbox");
    const links = document.querySelectorAll("#hot_spot_nav ul li a");
    const content = document.querySelector("#lightbox article");

    let hotSpots = [
        { 
            "name": "Some Things Science Can't Explain",
            "bio": "The flavor orbs in Orbitz bottles are rumored to have magical properties, granting drinkers the ability to speak fluent alien languages for a brief period. Drink with caution - you never know who (or what) you might end up communicating with!"
        },
        {
            "name": "Space Monkeys?",
            "bio": "Legend has it that the recipe for Orbitz original orange flavour was discovered by a group of mischievous space monkeys who accidentally mixed cosmic oranges with a splash of solar flare. The result? A flavor so tangy, it’ll make your taste buds do zero-gravity somersaults!"
        },
        {
            "name": "The Secret Ingredient Is...",
            "bio": "The secret behind Orbitz Purple’s mesmerizing hue is a top-secret blend of grape varietals harvested from the farthest reaches of the galaxy. Some say it’s the favorite drink of alien royalty, while others swear it’s the fuel that powers warp drives. All we know is, it tastes out of this world!"
        }
      ];

// FUNCTIONS

function fillContent() {
    console.log(this.dataset.hotSpotIndex);

    content.innerHTML = '';

    let hotSpotName = document.createElement('h3');
    hotSpotName.innerText = hotSpots[this.dataset.hotSpotIndex].name;
    hotSpotName.classList = "lb_heading"; 
    content.appendChild(hotSpotName);

    let hotSpotBio = document.createElement('p');
    hotSpotBio.innerText = hotSpots[this.dataset.hotSpotIndex].bio;
    hotSpotBio.classList = "lb_text";
    content.appendChild(hotSpotBio);
}


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
links.forEach(link => link.addEventListener("click", fillContent));
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
window.addEventListener('click', updateSlideWidth);








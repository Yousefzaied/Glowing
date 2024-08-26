// navigation bars
let barsButton = document.getElementById('bar-buuton');
let xMarkButton = document.getElementById('x-button');
let barContent = document.querySelector(".bar-content")

barsButton.onclick = function() {
    barContent.classList.add('active')
}
xMarkButton.onclick = function() {
    barContent.classList.remove('active')
}

// scroll top
let scrollTopButton = document.querySelector(".scroll-top button");

window.onscroll = function() {
    if(window.scrollY >= 600) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
}

scrollTopButton.onclick = function() {

    window.scroll({
        top:0,
        behavior: "smooth",
    })
}

// start-heder
let slider = document.getElementById('slider');
let sliderCard = document.querySelectorAll('.slider .slider-card')
let nextButton  = document.getElementById('next'); 
let previousButton  = document.getElementById('previous'); 

// set background slider card 
// for(let  i = 1 ; i <= 3; i ++ ) {
      
//     sliderCard[i - 1].style.backgroundImage = `url(/images/hero-banner-${i}.jpg)`;
// }

let currentIndex = 0;

//set card width
let cardwidth = sliderCard[0].offsetWidth;


nextButton.onclick = function() {
    if(currentIndex < sliderCard.length - 1) {
          currentIndex++;
    }
    updateSliderCradPoistion();
}
previousButton.onclick = function() {
    if(currentIndex >= 0) {
        currentIndex--;
    }
    updateSliderCradPoistion();
}

//create slider card position
function updateSliderCradPoistion() {
    slider.style.transform = `translateX(-${currentIndex * cardwidth}px)`
}

// start collection
let box = document.querySelectorAll('.collection .box');

// set backGround on box
// for(let i = 1; i <= 3; i++) {

//     box[i - 1].style.backgroundImage = `url(/images/collection-${i}.jpg)`;
// }

// startShope

// set slider shope
let slidershope = document.getElementById('main-slider');
let cardShope =document.querySelectorAll('.shope .slider .cards');
let previousButonShope = document.querySelector('.button-shope .previous');
let nextButonShope = document.querySelector('.button-shope .next');


// set card shope width
let cardShopeWidth = cardShope[0].offsetWidth;


nextButonShope.onclick = function() {
    if(currentIndex < cardShope.length - 4) {
        currentIndex++;
    }
    updateCardShopePoistion();
}
previousButonShope.onclick = function() {
   if(currentIndex >= 0) {
    currentIndex--;
   }
   updateCardShopePoistion();
}

// ste back groud on card shope
for(let i = 1; i <= cardShope.length; i++) {

   cardShope[i - 1].style.backgroundImage = `url(images/product-0${i}.jpg)`;
}

// create update position card shope 
function updateCardShopePoistion() {
     slidershope.style.transform = `translateX(-${currentIndex * cardShopeWidth + 50 }px)`;
}
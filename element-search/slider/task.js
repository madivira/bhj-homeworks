let sliderArrow = document.getElementsByClassName("slider__arrow");
let slideItem = document.getElementsByClassName("slider__item");
let sliderDots = document.getElementsByClassName("slider__dot");

let arrSliderArrow = Array.from(sliderArrow);
let arrSliderItem = Array.from(slideItem);
let arrSliderDots = Array.from(sliderDots);

let numberSlide = 0;

for(let arrArrow of arrSliderArrow) {
    arrArrow.onclick = () => {

        if (arrArrow.className.includes("slider__arrow_prev")) {
            if (numberSlide === 0) {
                numberSlide = arrSliderItem.length-1;
            } else {
                numberSlide -= 1;
            }
        } else if(arrArrow.className.includes("slider__arrow_next")) {
            if(numberSlide === arrSliderItem.length - 1) {
                numberSlide = 0;
            } else {
                numberSlide += 1;
            }
        }
        show();
    }
};

for(let i = 0; i < arrSliderDots.length; i++) {

    arrSliderDots[i].onclick = () => { 
        numberSlide = i;
        show();
    }
};

function show() {
    for(let i = 0; i < arrSliderDots.length; i++) {
        arrSliderDots[i].className = "slider__dot";
        arrSliderItem[i].className = "slider__item";
    }

    arrSliderDots[numberSlide].className = "slider__dot slider__dot_active";
    arrSliderItem[numberSlide].className = "slider__item slider__item_active";
}


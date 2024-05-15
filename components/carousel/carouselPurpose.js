
// window.addEventListener("load", () => {
//     initiateSlider("get-to-know-mac")
    
//     initiateSlider("laptop-gallery")
//     initiateSlider("desktop-gallery")
//     initiateSlider("display-gallery")
  
//     initiateSlider("buy-mac")
//   });
  
  
  //------v-------| carousel |------v-------//
export function initiateSlider(ID){
    const imageList     = document.querySelector(`#${ID} .slider-wrapper .image-list`);
    const sliderButtons = document.querySelectorAll(`#${ID} .slider-wrapper .slide-button`);
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth - 50;
  
  
    const leftButton    = sliderButtons[0];
    const rightButton   = sliderButtons[1];
    
    imageList.scrollBy({ right: 100, behavior: "smooth" });
  
    leftButton.classList.toggle("faded");
  
    sliderButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });
  
    const handleSlideButtons = () => {
      leftButton.classList.toggle("faded", imageList.scrollLeft <= 0);
      rightButton.classList.toggle(
        "faded",
        imageList.scrollLeft >= maxScrollLeft
      );
    };
  
    imageList.addEventListener("scroll", () => {
      handleSlideButtons();
    });
  
    imageList.addEventListener("resize", () => {
      handleSlideButtons();
    });
  } 
  //------^-------| carousel |------^-------//
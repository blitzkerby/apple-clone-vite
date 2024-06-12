import './infinite-scroller.scss'
import { infinSliderPurpose } from "./infiniteScrollerPurpose.js"


const slideItemsImg = [
    { src: "/home/auto-scroll/hello-kitty-island-adventure.jpg"   , alt: "Hello Kitty Island Adventure" },
    { src: "/home/auto-scroll/nba-2k24-arcade-edition.jpg"        , alt: "NBA 2K24 Arcade Edition" },
    { src: "/home/auto-scroll/so-fresh-90s-dance.jpg"             , alt: "So Fresh 90s Dance" },
    { src: "/home/auto-scroll/strength-with-jenn.jpg"             , alt: "Strength with Jenn" }
];


const slideItemsCard = [
    {content: `
            <div class="in-card-container  apple-music-image">
                <div class="in-card"></div>
            </div>`},
    {content: `
            <div class="in-card-container  todays-acoustic-image">
                <div class="in-card"></div>
            </div>`},
];


document.querySelector('#infinite-scroller-section').innerHTML = 
`
<section class="infinite-scroller-section">
    <div class="container">
        <div class="logos">
            <div class="logos-slide">
                
            </div>
        </div>
    </div>
</section>
`


slideItemsImg.forEach((item)=>{
    const slideItem = document.createElement("div")
    slideItem.classList.add("slide-item")
    slideItem.innerHTML = 
    `
        <img src="${item.src}" alt="${item.alt}">
    `
    document.querySelector(".infinite-scroller-section .logos-slide").appendChild(slideItem)
})


slideItemsCard.forEach((item)=>{
    const slideItem = document.createElement("div")
    slideItem.classList.add("slide-item")
    slideItem.innerHTML = item.content
    document.querySelector(".infinite-scroller-section .logos-slide").appendChild(slideItem)
})


infinSliderPurpose(document.querySelector(".infinite-scroller-section"))

import './infinite-scroller.scss'
import { InfinSliderPurpose } from "./infiniteScrollerPurpose.js"


document.querySelector('#infinite-scroller-section').innerHTML = `
<section class="infinite-scroller-section">
    <div class="container">
        <div class="logos">
            <div class="logos-slide">
                <div class="slide-item">
                    <div class="in-card-container  apple-music-image">
                        <div class="in-card"></div>
                    </div>
                </div>
                <div class="slide-item">  <img src="../landing-page/auto-scroll/hello-kitty-island-adventure.jpg"  alt=""></div>
                <div class="slide-item">  <img src="../landing-page/auto-scroll/nba-2k24-arcade-edition.jpg"       alt=""></div>
                <div class="slide-item">  <img src="../landing-page/auto-scroll/so-fresh-90s-dance.jpg"            alt=""></div>
                <div class="slide-item">  <img src="../landing-page/auto-scroll/strength-with-jenn.jpg"            alt=""></div>
                <div class="slide-item">  
                    <div class="in-card-container  todays-acoustic-image">
                        <div class="in-card"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`


InfinSliderPurpose(document.querySelector(".infinite-scroller-section"))

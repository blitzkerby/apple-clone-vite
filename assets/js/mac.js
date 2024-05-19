import "../../components/carousel/carousel.scss";
import { initiateSlider } from "../../components/carousel/carouselPurpose.js";


initiateSlider("get-to-know-mac");
initiateSlider("laptop-gallery");
initiateSlider("desktop-gallery");
initiateSlider("display-gallery");
initiateSlider("buy-mac");
initiateSlider("mac-essentials");


const selectElement = (Element) => document.querySelector(Element);
const buttonContainer = document.querySelector(".btn-menu");
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => item.classList.add("hidden"));

buttonContainer.addEventListener("click", (event) => {
  galleryItems.forEach((item) => item.classList.add("hidden"));
  buttonContainer
    .querySelectorAll(".btn")
    .forEach((button) => button.classList.remove("active"));

  if (event.target.classList.contains("btn-1")) {
    event.target.classList.toggle("active");
    selectElement(".laptops").classList.remove("hidden");
  } else if (event.target.classList.contains("btn-2")) {
    event.target.classList.add("active");
    selectElement(".desktops").classList.remove("hidden");
  } else if (event.target.classList.contains("btn-3")) {
    event.target.classList.toggle("active");
    selectElement(".displays").classList.remove("hidden");
  }
});

window.addEventListener("load", () => {
  document.querySelector(".laptops").classList.remove("hidden");
  document.querySelector(".btn-1").classList.add("active");
});

//

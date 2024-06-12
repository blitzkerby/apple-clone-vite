import "/assets/scss/home.scss"
import { createProductSection } from "/layout/product-section.js";

const sections = [
    {
        title       : "Vision Pro",
        subTitle    : "Titanium. So strong. So light. So Pro.",
        id          : "vision-pro",
        buttonId    : "",
    },

    {
        title       : "iPhone 15 Pro",
        subTitle    : "Titanium. So strong. So light. So Pro.",
        id          : "iphone-15-pro",
        buttonId    : "",
    },

    {
        title       : "iPhone 15",
        subTitle    : "New camera. New design. Newphoria.",
        id          : "iphone-15",
        buttonId    : "iphone-15-btn-color",
    },
];

const productSections = sections.map((section) => createProductSection(section)).join("");
document.querySelector("product-sections").innerHTML = productSections;

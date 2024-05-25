export function responsiveness(){
    const footerContainerBoxes = document.querySelectorAll(".footer-container-box");
    const footerAccordionButtons = document.querySelectorAll(".footer-container-box .accordion-button");
    const footerLinks = document.querySelectorAll(".footer-links");

    function handleResize() {
        if (window.innerWidth <= 850) {
            footerContainerBoxes.forEach((item) => item.classList.add("accordion"));        //converts footer into accordion
            footerContainerBoxes.forEach((item) => item.classList.add("border-bottom"));    //adds thin-border to each accordion
            footerAccordionButtons.forEach((item) => item.setAttribute('aria-expanded', 'false'));      //set aria-expanded to false for all accordion buttons
            footerAccordionButtons.forEach((item) => item.classList.add('collapsed'));                  //sets accordion to collapsed
            footerLinks.forEach((item) => item.classList.remove("show"));   //removes show class from all links
            footerLinks.forEach((item) => item.classList.add("collapse"));  //adds collapse class to all links
        } else {
            footerContainerBoxes.forEach((item) => item.classList.remove("accordion"));     //converts footer into columns 
            footerContainerBoxes.forEach((item) => item.classList.remove("border-bottom")); //removes thin-border from each accordion
            footerLinks.forEach((item) => item.classList.add("show"));    //adds show class to all links
        }
    }

    // Call handleResize initially and whenever the window resizes
    handleResize();
    window.addEventListener("resize", handleResize);
}
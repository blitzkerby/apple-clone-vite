export function navbarPurpose(){
    const selectElement = (Element) => document.querySelector(Element);

    const headerElement = selectElement("header");

    const storeMenu = selectElement("#store-menu"); 


    //logic for showing the menu
    headerElement.addEventListener("mouseover", () => {
        headerElement.classList.add("expand"); //expands the header
        storeMenu.classList.remove("sub-navi-items-hidden"); //unhides mac menu
    });



    //logic for hidding the menu
    headerElement.addEventListener("mouseout", () => {
        if (headerElement.classList.contains("expand")) {
            headerElement.classList.remove("expand"); //unexpands the heder
            storeMenu.classList.add("sub-navi-items-hidden"); //hides mac menu
        }
    })



    selectElement(".mobile-menu").addEventListener("click", () => {
        selectElement("header").classList.toggle("active");
    });
}

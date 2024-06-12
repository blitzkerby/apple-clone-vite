export function storeMenuPurpose(){
    const subNavItems = {
        shop: [
            { link: "#"             , text: "Shop the Latest" },
            { link: "./mac.html"    , text: "Mac" },
            { link: "#"             , text: "iPad" },
            { link: "#"             , text: "iPhone" },
            { link: "#"             , text: "Apple Watch" },
            { link: "#"             , text: "Apple Vision Pro" },
            { link: "#"             , text: "Accessories" },
        ],
        quickLinks: [
            { link: "#"             , text: "Find a Store" },
            { link: "#"             , text: "Order Status" },
            { link: "#"             , text: "Apple Trade In" },
            { link: "#"             , text: "Financing" },
        ],
        specialStores: [
            { link: "#"             , text: "Certified Refurbished" },
            { link: "#"             , text: "Education" },
            { link: "#"             , text: "Business" },
            { link: "#"             , text: "Veterans and Military" },
            { link: "#"             , text: "Government" },
        ],
    };
    //modify subnavigation items above


    function generateSubNavHTML(subNavData) 
    {
        return Object.entries(subNavData).map(([key, items]) => 
            {
                const itemsHTML = items.map((item) => 
                `
                    <li class="navi-item"><a href="${item.link}" class="navi-link">${item.text}</a></li>
                `).join("");

                return `
                    <div class="sub-navi-container ${key === "shop" ? "stand-out" : "sub-text"} sub-navi-container-${key}">
                        <ul>
                            ${itemsHTML}
                        </ul>
                    </div>
                `;
            }).join("");
    }

    const storeMenu = document.querySelector("#store-menu");
    storeMenu.innerHTML = generateSubNavHTML(subNavItems);
}
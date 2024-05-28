window.document.querySelectorAll(".cus-card").forEach((card) => {

  // const imageItem = window.document.createElement("div");       //image-item

  // const cardContainer = window.document.createElement("div");   //image-item > card-container
  // const cardBody = window.document.createElement("div");        //image-item > card-container > card-body

  // const imageContainer = window.document.createElement("div");  //... > card-body > image-container
  // const textContainer = window.document.createElement("div");   //... > card-body > text-container
  // const btnContainer = window.document.createElement("div");    //... > card-body > btn-container





  const cusCard = window.document.createElement("div");
  const badgeElem = window.document.createElement("div");
  const labelText = card.getAttribute("data-label");
  const isAvailable = card.getAttribute("data-available") === "true";

  cusCard.setAttribute("class", card.getAttribute("class"));
  badgeElem.classList.add("badge");

  let badgeHTML = "";
  badgeHTML += labelText ? `<span class="label">${labelText}</span>` : "";
  badgeHTML += !isAvailable ? `<span class="available">sold out</span>` : "";
  badgeElem.innerHTML = badgeHTML;

  cusCard.appendChild(badgeElem);

  // create image wrapper element
  const image = window.document.createElement("div");
  image.classList.add("image");
  const source = card.getAttribute("data-imgSrc");
  const placeholder = card.getAttribute("data-imgPlaceholder");

  // add content
  image.innerHTML = `
  <img class="img-top" src=${source}>
  <img class="img-placeholder" src=${placeholder}>
  `;

  // insert image wrapper into custom card
  cusCard.appendChild(image);

  // create product info wrapper element
  const productInfoElem = window.document.createElement("div");
  productInfoElem.classList.add("product-info");
  const productNameText = card.getAttribute("data-name");
  const productTitle = card.getAttribute("data-title");
  const productPrice = card.getAttribute("data-price");
  const productRating = card.getAttribute("data-rating");

  // add content
  productInfoElem.innerHTML = `
  <strong class="title p-size"  >${productTitle}</strong>
  <div class="price" >
  <p class = "p-size">${productPrice}</p></div>
  <div class="rating">${productRating}</div>
  `;
  // insert product info wrapper into custom card
  cusCard.appendChild(productInfoElem);

  // attach link to custom card
  const productUrl = card.getAttribute("data-url");
  cusCard.addEventListener("click", () => {
    window.location.href = productUrl;
  });

  // replace card with custom card
  card.replaceWith(cusCard);
});
// ------------- END CARD ---------------- //

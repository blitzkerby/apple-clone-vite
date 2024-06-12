export function createProductSection({ title, subTitle, id, buttonId }) {
    return `
        <section class="hero-main ${id}">
            <div class="container">
                <div class="title-main">
                    <h1 class="title-heading">${title}</h1>
                    <h2 class="title-sub-heading">${subTitle}</h2>
                </div>
                <div class="cta">
                    <button type="button" class="btn btn-primary cta-learn-more-button">Learn more</button>
                    <button type="button" class="btn btn-primary cta-buy-button" id="${buttonId}">Buy</button>
                </div>
            </div>
        </section>
    `;
}

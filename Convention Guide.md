---

---
This serves as a guide to maintaining the same code layout throughout all files.

## Naming Convention

Functions must always be written in camelCase. 
CSS classes should be written using the hyphenated case.


## Page Management

**File Structure**:
* For optimal organization, all pages should be placed within the root folder, alongside `index.html`.
* To ensure proper distribution, each page needs to be configured as an additional entry point within the `vite.config.js` file.

**Content Management**:
* It is recommend to avoid the use of hardcoded content within individual pages.
* Instead, leverage a dedicated `assets` folder to store reusable content modules.
* This approach allows you to centrally manage content and ensure consistency across all pages.

For example, the `home.js` file would reference and integrate these content modules seamlessly into `index.html`.

This management methodology aims to maximize styles customization.  


## Responsive Design

The convention guide utilizes a responsive design approach to ensure optimal display across various screen sizes and devices. The primary implementation is handled through the styles folder, leveraging CSS media queries to adapt layout and elements based on screen dimensions.

This approach provides a seamless user experience for attendees accessing the guide on desktops, tablets, and mobile phones. However, for specific components requiring more intricate behavior, such as the footer accordions, we employ JavaScript to dynamically toggle HTML element classes. This targeted scripting approach allows for the creation of interactive elements that enhance the guide's functionality without compromising its responsiveness.




## Static Assets Management

**Location:**

For efficient organization, all static assets, including images, fonts, videos, SVGs, and similar files, should be placed within the designated `public/` folder within your project directory. This centralized location simplifies asset management and retrieval.

**Accessing Assets:**

To reference these static assets within your code, use a direct path from the root folder. For example, to access an image named `vision-pro-large.png` stored in `public/`, you would utilize the following path:

```SCSS
.vision-pro{
	...
	background: url("/home/vision-pro/vision-pro-large.jpeg") no-repeat;
	...
}
```
(it is recommended to group assets properly according to the pages they belong to.)

## Components

Special file naming convention for components

```text
my-project/
├── components/
│   ├── ...
│   ├── infinite-scroller/
│   │   └── infinite-scroller.js
│   │   └── infinite-scroller.scss
│   │   └── infiniteScrollerPurpose.js
│   └── ...
├── ...
...
```

Each component must include a primary component file, exemplified by `infinite-scroller.js`, following the Hyphenated Case name style. This file serves as the principal entry point and should be the sole component file referenced within any HTML document.

Functionalities are segregated into distinct JavaScript files, designated as "Purpose" files. These files encompass all essential scripts required for optimal functionality, responsiveness, and user interaction.

**All Purpose files must be named using camelCase to prevent confusion with the primary component file.**

Additionally, custom styles should be maintained in separate style sheets.




import './footer.scss'
import { responsiveness } from "./footerPurpose.js";


// document.querySelector('#footer').innerHTML = `
// <footer>
//     <!--Informative section-->
//     <div class="footer-container  footer-container-border">
//         <ul class="footer-links">
//             <!--v-- Row : 1 --v-->
//             <li id="footer-paragraph-format">
//                 <p>
//     1. Trade-in values will vary based on the condition, year, 
//     and configuration of your eligible trade-in device. Not all
//     devices are eligible for credit. You must be at least 18 years
//     old to be eligible to trade in for credit or for an Apple Gif
//     Card. Trade-in value may be applied toward qualifying new
//     device purchase, or added to an Apple Gift Card. Actual
//     value awarded is based on receipt of a qualifying device
//     matching the description provided when estimate was made.
//     Sales tax may be assessed on full value of a new device
//     purchase. In-store trade-in requires presentation of
//     a valid photo ID (local law may require saving this
//     information). Offer may not be available in all stores, and may 
//     vary between in-store and online trade-in. Some stores may have
//     additional requirements. Apple or its trade-in partners reserve
//     the right to refuse or limit quantity of any trade-in transaction
//     for any reason. More details are available from Apple’s trade-in 
//     partner for trade-in and recycling of eligible devices.
//     Restrictions and limitations may apply.
//                 </p>
//             </li>
//             <!--^-- Row : 1 --^-->


//                 <!-------->


//             <!--v-- Row : 2 --v-->
//             <li id="footer-paragraph-format">
//                 <p>
//     Available in the U.S. on <a id="inline-link" href="#">apple.com</a>, in the Apple Store app, and at Apple Stores.
//                 </p>
//             </li>
//             <!--^-- Row : 2 --^-->


//                 <!-------->


//             <!--v-- Row : 3 --v-->
//             <li id="footer-paragraph-format">
//                 <p>
//     To access and use all Apple Card features and products available only to Apple 
//     Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports
//     and has the latest version of iOS or iPadOS. Apple Card is subject to credit
//     approval, available only for qualifying applicants in the United States, and 
//     issued by Goldman Sachs Bank USA, Salt Lake City Branch.
//                 </p>
//             </li>
//             <!--^-- Row : 3 --^-->


//                 <!-------->


//             <!--v-- Row : 4 --v-->
//             <li id="footer-paragraph-format">
//                 <p>
//     If you reside in the U.S. territories, please call Saul Goodman
//     at (505) 503-4455 with questions about Apple Card.
//                 </p>
//             </li>
//             <!--^-- Row : 4 --^-->


//                 <!-------->


//             <!--v-- Row : 5 --v-->
//             <li id="footer-paragraph-format">
//                 <p>
//     Learn more about how Apple Card applications are evaluated at <a id="inline-link" href="#">support.apple.com/kb/HT209218</a>.
//                 </p>
//             </li>
//             <!--^-- Row : 5 --^-->


//                 <!-------->


//             <!--v-- Row : 6 --v-->
//             <li id="footer-paragraph-format">
//                 <p>
//     A subscription is required for Apple TV+.
//                 </p>
//             </li>
//             <!--^-- Row : 6 --^-->


//                 <!-------->


//             <!--v-- Row : 7 --v-->
//             <li id="footer-paragraph-format">
//                 <p>
//     A subscription is required for Apple Arcade, Apple Fitness+, and Apple Music.
//                 </p>
//             </li>
//             <!--^-- Row : 7 --^-->
//         </ul>
//     </div>



//     <!--5 columns section-->
//     <div class="footer-container  footer-column-section">

//         <!-- Mobile section -->
    


//             <!-------------->


//         <!--v-- column : 1 --v-->


//         <div class="footer-column">

//             <!--Shop and Learn-->
//             <div class="footer-container-box  footer-container-box-separator"> 
//                 <h3 class="footer-title">Shop and Learn</h3>
        
//                 <ul class="footer-links">
//                     <li><a href="#">Store</a></li>
//                     <li><a href="#">Mac</a></li>
//                     <li><a href="#">iPad</a></li>
//                     <li><a href="#">iPhone</a></li>
//                     <li><a href="#">Watch</a></li>
//                     <li><a href="#">AirPods</a></li>
//                     <li><a href="#">TV & Home</a></li>
//                     <li><a href="#">Accessories</a></li>
//                     <li><a href="#">Gift Cards</a></li>
//                 </ul>
//             </div>


//             <!--Apple Wallet-->
//             <div class="footer-container-box"> 
//                 <h3 class="footer-title">Apple Wallet</h3>
        
//                 <ul class="footer-links">
//                     <li><a href="#">Wallet</a></li>
//                     <li><a href="#">Apple Card</a></li>
//                     <li><a href="#">Apple Pay</a></li>
//                     <li><a href="#">Apple Cash</a></li>
//                 </ul>
//             </div>
//         </div>


//         <!--^-- column : 1 --^-->       


//             <!-------------->


//         <!--v-- column : 2 --v-->


//         <div class="footer-column">

//             <!--Account box-->
//             <div class="footer-container-box  footer-container-box-separator"> 
//                 <h3 class="footer-title">Account</h3>

//                 <ul class="footer-links">
//                     <li><a href="#">Manage Your Apple ID</a></li>
//                     <li><a href="#">Apple Store Account</a></li>
//                     <li><a href="#">iCloud.com</a></li> 
//                 </ul>
//             </div>


//             <!--Entertainment box-->
//             <div class="footer-container-box">
//                 <h3 class="footer-title">Entertainment</h3>

//                 <ul class="footer-links">
//                     <li><a href="#">Apple One</a></li>
//                     <li><a href="#">Apple TV+</a></li>
//                     <li><a href="#">Apple Music</a></li> 
//                     <li><a href="#">Apple Arcade</a></li>
//                     <li><a href="#">Apple Fitness+</a></li>
//                     <li><a href="#">Apple News+</a></li>
//                     <li><a href="#">Apple Podcasts</a></li>
//                     <li><a href="#">Apple Books</a></li>
//                     <li><a href="#">Apple Store</a></li>
//                 </ul>
//             </div>
//         </div>


//         <!--^-- column : 2 --^-->


//             <!-------------->


//         <!--v-- column : 3 --v-->


//         <div class="footer-column">

//             <!-- Apple Store -->
//             <div class="footer-container-box">
//                 <h3 class="footer-title">Apple Store</h3>

//                 <ul class="footer-links">
//                     <li><a href="#">Find a Store</a></li>
//                     <li><a href="#">Genius Bar</a></li>
//                     <li><a href="#">Today at Apple</a></li>
//                     <li><a href="#">Apple Camp</a></li>
//                     <li><a href="#">Apple Store App</a></li>
//                     <li><a href="#">Certified Refurbished</a></li>
//                     <li><a href="#">Apple Trade In</a></li>
//                     <li><a href="#">Financing</a></li>
//                     <li><a href="#">Carrier Deals at Apple</a></li>
//                     <li><a href="#">Order Status</a></li>
//                     <li><a href="#">Shopping Help</a></li>

//                 </ul>
//             </div>
//         </div>


//         <!--^-- column : 3 --^-->


//             <!-------------->


//         <!--v-- column : 4 --v-->


//         <div class="footer-column">
//             <div class="footer-container-box  footer-container-box-separator">
//                 <h3 class="footer-title">For Business</h3>

//                 <ul class="footer-links">
//                     <li><a href="#">Apple and Business</a></li>
//                     <li><a href="#">Shop for Business</a></li>
//                 </ul>
//             </div>

//             <div class="footer-container-box  footer-container-box-separator">
//                 <h3 class="footer-title">For Education</h3>

//                 <ul class="footer-links">
//                     <li><a href="#">Apple and Education</a></li>
//                     <li><a href="#">Shop for K-12</a></li>
//                     <li><a href="#">Shop for College</a></li>
//                 </ul>
//             </div>

//             <div class="footer-container-box  footer-container-box-separator">
//                 <h3 class="footer-title">For Healthcare</h3>

//                 <ul class="footer-links">
//                     <li><a href="#">Apple in Healthcare</a></li>
//                     <li><a href="#">Health on Apple Watch</a></li>
//                     <li><a href="#">Health on Records on iPhone</a></li>
//                 </ul>
//             </div>

//             <div class="footer-container-box  footer-container-box-separator">
//                 <h3 class="footer-title">For Government</h3>

//                 <ul class="footer-links">
//                     <li><a href="#">Shop for Government</a></li>
//                     <li><a href="#">Shop for Veterans and Military</a></li>
//                 </ul>
//             </div>
//         </div>


//         <!--^-- column : 4 --^-->


//             <!-------------->


//         <!--v-- column : 5 --v-->


//         <div class="footer-column">
//             <div class="footer-container-box  footer-container-box-separator">
//                 <h3 class="footer-title">Apple Values</h3>

//                 <ul class="footer-links">
//                     <li><a href="#">Accessibility</a></li>
//                     <li><a href="#">Education</a></li>
//                     <li><a href="#">Environment</a></li>
//                     <li><a href="#">Inclusion and Diversity</a></li>
//                     <li><a href="#">Privacy</a></li>
//                     <li><a href="#">Racial Equity and Justice</a></li>
//                     <li><a href="#">Supplier Responsibility</a></li>
//                 </ul>
//             </div>

//             <div class="footer-container-box  ">
//                 <h3 class="footer-title">About Apple</h3>

//                 <ul class="footer-links">
//                     <li><a href="#">Newsroom</a></li>
//                     <li><a href="#">Apple Leadership</a></li>
//                     <li><a href="#">Career Opportunities</a></li>
//                     <li><a href="#">Investors</a></li>
//                     <li><a href="#">Ethics & Compliance</a></li>
//                     <li><a href="#">Events</a></li>
//                     <li><a href="#">Contact Apple<a></li>
//                 </ul>
//             </div>
//         </div>


//         <!--^-- column : 5 --^-->


//     </div>



//     <!--*-- | Copyright section | --*-->


//     <div class="footer-container  footer-copyright">


//         <!--v-- | footer upper copyright | --v-->
        
//         <div class="footer-upper-container  footer-container-border" id="footer-paragraph-format">
//             <p>
//     More ways to shop: <a id="inline-link" href="#">Find an Apple Store</a> or <a id="inline-link" href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
//             </p>
//         </div>

//         <!--^-- | footer upper copyright | --^-->




//         <!--v-- | footer lower copyright | --v-->

//         <div class="footer-lower-container">

//             <!--*--| true copyright |--*-->

//             <div class="footer-legal-copyright">
//                 <p id="copyright-text-format">Copyright © 2024 Apple Inc. All rights reserved.</p>
//             </div>


//             <!--*--| legal links |--*-->


//             <ul class="footer-legal-links">
//                 <li><a class="footer-legal-link" href="#">Privacy</a></li>
//                 <li><a class="footer-legal-link" href="#">Terms of Use</a></li>
//                 <li><a class="footer-legal-link" href="#">Sales and Refunds</a></li>
//                 <li><a class="footer-legal-link" href="#">Legal</a></li>
//                 <li><a class="footer-legal-link" href="#" id="rightmost">Site Map</a></li>
//             </ul>

//             <!--*--| locale |--*-->

//             <div class="footer-locale">
//                 <p id="locale-text-format">United States</p>
//             </div>
//         </div>
//     </div>
// </footer>

// `

document.querySelector("#footer").innerHTML = `
    <footer>
        <!--Informative section-->
        <div class="footer-container  footer-container-border  container">
            <ul class="footer-links">
                <!--v-- Row : 1 --v-->
                <li id="footer-paragraph-format">
                    <p >
        1. Trade-in values will vary based on the condition, year, 
        and configuration of your eligible trade-in device. Not all
        devices are eligible for credit. You must be at least 18 years
        old to be eligible to trade in for credit or for an Apple Gif
        Card. Trade-in value may be applied toward qualifying new
        device purchase, or added to an Apple Gift Card. Actual
        value awarded is based on receipt of a qualifying device
        matching the description provided when estimate was made.
        Sales tax may be assessed on full value of a new device
        purchase. In-store trade-in requires presentation of
        a valid photo ID (local law may require saving this
        information). Offer may not be available in all stores, and may 
        vary between in-store and online trade-in. Some stores may have
        additional requirements. Apple or its trade-in partners reserve
        the right to refuse or limit quantity of any trade-in transaction
        for any reason. More details are available from Apple’s trade-in 
        partner for trade-in and recycling of eligible devices.
        Restrictions and limitations may apply.
                    </p>
                </li>
                <!--^-- Row : 1 --^-->


                    <!-------->


                <!--v-- Row : 2 --v-->
                <li id="footer-paragraph-format">
                    <p>
        Available in the U.S. on <a id="inline-link" href="#">apple.com</a>, in the Apple Store app, and at Apple Stores.
                    </p>
                </li>
                <!--^-- Row : 2 --^-->


                    <!-------->


                <!--v-- Row : 3 --v-->
                <li id="footer-paragraph-format">
                    <p>
        To access and use all Apple Card features and products available only to Apple 
        Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports
        and has the latest version of iOS or iPadOS. Apple Card is subject to credit
        approval, available only for qualifying applicants in the United States, and 
        issued by Goldman Sachs Bank USA, Salt Lake City Branch.
                    </p>
                </li>
                <!--^-- Row : 3 --^-->


                    <!-------->


                <!--v-- Row : 4 --v-->
                <li id="footer-paragraph-format">
                    <p>
        If you reside in the U.S. territories, please call Saul Goodman
        at (505) 503-4455 with questions about Apple Card.
                    </p>
                </li>
                <!--^-- Row : 4 --^-->


                    <!-------->


                <!--v-- Row : 5 --v-->
                <li id="footer-paragraph-format">
                    <p>
        Learn more about how Apple Card applications are evaluated at <a id="inline-link" href="#">support.apple.com/kb/HT209218</a>.
                    </p>
                </li>
                <!--^-- Row : 5 --^-->


                    <!-------->


                <!--v-- Row : 6 --v-->
                <li id="footer-paragraph-format">
                    <p>
        A subscription is required for Apple TV+.
                    </p>
                </li>
                <!--^-- Row : 6 --^-->


                    <!-------->


                <!--v-- Row : 7 --v-->
                <li id="footer-paragraph-format">
                    <p>
        A subscription is required for Apple Arcade, Apple Fitness+, and Apple Music.
                    </p>
                </li>
                <!--^-- Row : 7 --^-->
            </ul>
        </div>



        <!--5 columns section-->
        <div class="footer-container  footer-column-section container">

            <!-- Mobile section -->
        


                <!-------------->


            <!--v-- column : 1 --v-->

            <div class="footer-column">

                <!--Shop and Learn-->
                <div 
                    class   =   "footer-container-box  footer-container-box-separator  border-bottom"
                    id      =   "shop-and-learn"
                    >
                    <button 
                        class           ="accordion-button" 
                        type            ="button" 
                        data-bs-toggle  ="collapse" 
                        data-bs-target  ="#shop-and-learn-collapse" 
                        aria-expanded   ="true" 
                        aria-controls   ="shop-and-learn-collapse"
                        >
                        <h3 class="footer-title">Shop and Learn</h3>
                    </button>

            
                    <ul 
                        class           =   "footer-links"
                        id              =   "shop-and-learn-collapse"
                        data-bs-parent  =   "#shop-and-learn"
                        >
                        <li><a href="#">Store</a></li>
                        <li><a href="#">Mac</a></li>
                        <li><a href="#">iPad</a></li>
                        <li><a href="#">iPhone</a></li>
                        <li><a href="#">Watch</a></li>
                        <li><a href="#">AirPods</a></li>
                        <li><a href="#">TV & Home</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Gift Cards</a></li>
                    </ul>
                </div>


                <!--Apple Wallet-->
                <div 
                    class   =  "footer-container-box   border-bottom"
                    id      =  "apple-wallet"
                    >
                    <button 
                        class           ="accordion-button" 
                        type            ="button" 
                        data-bs-toggle  ="collapse" 
                        data-bs-target  ="#apple-wallet-collapse" 
                        aria-expanded   ="true" 
                        aria-controls   ="apple-wallet-collapse"
                        >
                        <h3 class="footer-title">Apple Wallet</h3>
                    </button>
            
                    <ul 
                        class           ="footer-links"
                        id              ="apple-wallet-collapse"
                        data-bs-parent  ="apple-wallet"
                        >
                        <li><a href="#">Wallet</a></li>
                        <li><a href="#">Apple Card</a></li>
                        <li><a href="#">Apple Pay</a></li>
                        <li><a href="#">Apple Cash</a></li>
                    </ul>
                </div>
            </div>


            <!--^-- column : 1 --^-->       


                <!-------------->


            <!--v-- column : 2 --v-->


            <div class="footer-column">

                <!--Account box-->
                <div    class   ="footer-container-box  footer-container-box-separator  border-bottom"
                        id      ="account-box"> 
                    <button 
                    class           ="accordion-button" 
                    type            ="button" 
                    data-bs-toggle  ="collapse" 
                    data-bs-target  ="#account-box-collapse" 
                    aria-expanded   ="true" 
                    aria-controls   ="account-box-collapse">
                        <h3 class="footer-title">Account</h3>
                    </button>

                    <ul 
                    class           ="footer-links"
                    id              ="account-box-collapse"
                    data-bs-parent  ="#account-box"
                        >
                        <li><a href="#">Manage Your Apple ID</a></li>
                        <li><a href="#">Apple Store Account</a></li>
                        <li><a href="#">iCloud.com</a></li> 
                    </ul>
                </div>


                <!--Entertainment box-->
                <div 
                class   ="footer-container-box border-bottom"
                id      ="entertainment-box">
                    <button 
                    class           ="accordion-button" 
                    type            ="button" 
                    data-bs-toggle  ="collapse" 
                    data-bs-target  ="#entertainment-box-collapse" 
                    aria-expanded   ="true" 
                    aria-controls   ="entertainment-box-collapse">
                        <h3 class="footer-title">Entertainment</h3>
                    </button>

                    <ul
                    class           ="footer-links"
                    id              ="entertainment-box-collapse"
                    data-bs-parent  ="#entertainment-box">
                        <li><a href="#">Apple One</a></li>
                        <li><a href="#">Apple TV+</a></li>
                        <li><a href="#">Apple Music</a></li> 
                        <li><a href="#">Apple Arcade</a></li>
                        <li><a href="#">Apple Fitness+</a></li>
                        <li><a href="#">Apple News+</a></li>
                        <li><a href="#">Apple Podcasts</a></li>
                        <li><a href="#">Apple Books</a></li>
                        <li><a href="#">Apple Store</a></li>
                    </ul>
                </div>
            </div>


            <!--^-- column : 2 --^-->


                <!-------------->


            <!--v-- column : 3 --v-->


            <div class="footer-column">

                <!-- Apple Store -->
                <div 
                class   =   "footer-container-box  border-bottom"
                id      =   "apple-store">
                    <button 
                    class           ="accordion-button" 
                    type            ="button" 
                    data-bs-toggle  ="collapse" 
                    data-bs-target  ="#apple-store-collapse" 
                    aria-expanded   ="true" 
                    aria-controls   ="apple-store-collapse">
                        <h3 class="footer-title">Apple Store</h3>
                    </button>

                    <ul 
                    class           ="footer-links"
                    id              ="apple-store-collapse"
                    data-bs-parent  ="apple-store"
                    >
                        <li><a href="#">Find a Store</a></li>
                        <li><a href="#">Genius Bar</a></li>
                        <li><a href="#">Today at Apple</a></li>
                        <li><a href="#">Apple Camp</a></li>
                        <li><a href="#">Apple Store App</a></li>
                        <li><a href="#">Certified Refurbished</a></li>
                        <li><a href="#">Apple Trade In</a></li>
                        <li><a href="#">Financing</a></li>
                        <li><a href="#">Carrier Deals at Apple</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Shopping Help</a></li>

                    </ul>
                </div>
            </div>


            <!--^-- column : 3 --^-->


                <!-------------->


            <!--v-- column : 4 --v-->


            <div class="footer-column">
                <div 
                class="footer-container-box  footer-container-box-separator  border-bottom"
                id="for-business">
                <button 
                class           ="accordion-button" 
                type            ="button" 
                data-bs-toggle  ="collapse" 
                data-bs-target  ="#for-business-collapse" 
                aria-expanded   ="true" 
                aria-controls   ="for-business-collapse">
                    <h3 class="footer-title">For Business</h3>
                </button>

                    <ul 
                    class           ="footer-links"
                    id              ="for-business-collapse"
                    data-bs-parent  ="for-business">
                        <li><a href="#">Apple and Business</a></li>
                        <li><a href="#">Shop for Business</a></li>
                    </ul>
                </div>

                <div 
                    class="footer-container-box  footer-container-box-separator  accordion  border-bottom"
                    id="for-education">
                    <button 
                    class           ="accordion-button" 
                    type            ="button" 
                    data-bs-toggle  ="collapse" 
                    data-bs-target  ="#for-education-collapse" 
                    aria-expanded   ="true" 
                    aria-controls   ="for-education-collapse">
                        <h3 class="footer-title">For Education</h3>
                    </button>
                    

                    <ul 
                    class           ="footer-links"
                    id              ="for-education-collapse"
                    data-bs-parent  ="for-education"
                    >
                        <li><a href="#">Apple and Education</a></li>
                        <li><a href="#">Shop for K-12</a></li>
                        <li><a href="#">Shop for College</a></li>
                    </ul>
                </div>

                <div class="footer-container-box  footer-container-box-separator  accordion  border-bottom"
                id="for-healthcare">
                <button 
                class           ="accordion-button" 
                type            ="button" 
                data-bs-toggle  ="collapse" 
                data-bs-target  ="#for-healthcare-collapse" 
                aria-expanded   ="true" 
                aria-controls   ="for-healthcare-collapse">
                    <h3 class="footer-title">For Healthcare</h3>
                </button>

                    <ul 
                    class           ="footer-links"
                    id              ="for-healthcare-collapse"
                    data-bs-parent  ="for-healthcare"
                    >
                        <li><a href="#">Apple in Healthcare</a></li>
                        <li><a href="#">Health on Apple Watch</a></li>
                        <li><a href="#">Health on Records on iPhone</a></li>
                    </ul>
                </div>

                <div class="footer-container-box  footer-container-box-separator  accordion  border-bottom"
                id="for-government">
                <button 
                class           ="accordion-button" 
                type            ="button" 
                data-bs-toggle  ="collapse" 
                data-bs-target  ="#for-government-collapse" 
                aria-expanded   ="true" 
                aria-controls   ="for-government-collapse">
                    <h3 class="footer-title">For Government</h3>
                </button>

                    <ul 
                    class           ="footer-links"
                    id              ="for-government-collapse"
                    data-bs-parent  ="for-government"
                    >
                        <li><a href="#">Shop for Government</a></li>
                        <li><a href="#">Shop for Veterans and Military</a></li>
                    </ul>
                </div>
            </div>


            <!--^-- column : 4 --^-->


                <!-------------->


            <!--v-- column : 5 --v-->


            <div class="footer-column">
                <div    class   ="accordion  footer-container-box  footer-container-box-separator  border-bottom"
                        id      ="apple-values"> 

                    <button 
                        class           ="accordion-button" 
                        type            ="button" 
                        data-bs-toggle  ="collapse" 
                        data-bs-target  ="#apple-values-collapse" 
                        aria-expanded   ="true" 
                        aria-controls   ="apple-values-collapse">
                        
                        <h3 class="footer-title">Apple Values</h3>
                    </button>

                    <ul 
                        class           ="footer-links"
                        id              ="apple-values-collapse"
                        data-bs-parent  ="apple-values"
                    >
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Inclusion and Diversity</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Racial Equity and Justice</a></li>
                        <li><a href="#">Supplier Responsibility</a></li>
                    </ul>
                </div>

                <div 
                    class="footer-container-box  footer-container-box-separator  accordion  border-bottom"
                    id="about-apple">
                    <button 
                        class           ="accordion-button" 
                        type            ="button" 
                        data-bs-toggle  ="collapse" 
                        data-bs-target  ="#about-apple-collapse" 
                        aria-expanded   ="true" 
                        aria-controls   ="about-apple-collapse">

                        <h3 class="footer-title">About Apple</h3>
                    </button>

                    <ul 
                        class           ="footer-links"
                        id              ="about-apple-collapse"
                        data-bs-parent  ="about-apple">
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Apple Leadership</a></li>
                        <li><a href="#">Career Opportunities</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Ethics & Compliance</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Contact Apple<a></li>
                    </ul>
                </div>
            </div>


            <!--^-- column : 5 --^-->


        </div>



        <!--*-- | Copyright section | --*-->


        <div class="footer-container  footer-copyright container">


            <!--v-- | footer upper copyright | --v-->
            
            <div class="footer-upper-container  footer-container-border" id="footer-paragraph-format">
                <p>
        More ways to shop: <a id="inline-link" href="#">Find an Apple Store</a> or <a id="inline-link" href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
                </p>
            </div>

            <!--^-- | footer upper copyright | --^-->




            <!--v-- | footer lower copyright | --v-->

            <div class="footer-lower-container">

                <!--*--| true copyright |--*-->

                <div class="footer-legal-copyright">
                    <p id="copyright-text-format">Copyright © 2024 Apple Inc. All rights reserved.</p>
                </div>


                <!--*--| legal links |--*-->


                <ul class="footer-legal-links">
                    <li><a class="footer-legal-link" href="#">Privacy</a></li>
                    <li><a class="footer-legal-link" href="#">Terms of Use</a></li>
                    <li><a class="footer-legal-link" href="#">Sales and Refunds</a></li>
                    <li><a class="footer-legal-link" href="#">Legal</a></li>
                    <li><a class="footer-legal-link" href="#" id="rightmost">Site Map</a></li>
                </ul>

                <!--*--| locale |--*-->

                <div class="footer-locale">
                    <p id="locale-text-format">United States</p>
                </div>
            </div>
        </div>
    </footer>
`;

// InfinSliderPurpose(document.querySelector(".infinite-scroller-section"));
responsiveness(document.querySelector("footer"))
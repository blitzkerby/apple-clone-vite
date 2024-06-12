import './navbar.scss'
import { navbarPurpose } from "./navbarPurpose.js"
import { storeMenuPurpose } from './store-menu.js';

const navItems = [
    { id: "nav-store"           , link: "#"                 , text: "Store" },
    { id: "nav-mac"             , link: "./mac.html"        , text: "Mac" },
    { id: "nav-ipad"            , link: "#"                 , text: "iPad" },
    { id: "nav-iphone"          , link: "#"                 , text: "iPhone" },
    { id: "nav-watch"           , link: "#"                 , text: "Watch" },
    { id: "nav-vision"          , link: "#"                 , text: "Vision" },
    { id: "nav-airpods"         , link: "./airpods.html"    , text: "AirPods" },
    { id: "nav-tv-home"         , link: "#"                 , text: "TV & Home" },
    { id: "nav-entertainment"   , link: "#"                 , text: "Entertainment" },
    { id: "nav-accessories"     , link: "#"                 , text: "Accessories" },
    { id: "nav-support"         , link: "#"                 , text: "Support" },
];
//modify navigation items above


const subNavItems = [
    { id: "store-menu"}
]
//sub-navigation items id


const navHTML = navItems.map((item) => 
    `
        <li class="navi-item" id="${item.id}">
            <a href="${item.link}" class="navi-link">
                ${item.text}
            </a>
        </li>
    `
).join("");

const subNavHTML = subNavItems.map((item) =>
    `
        <div class="sub-navi-items  sub-navi-items-hidden"  id="${item.id}"></div>
    `
).join("");

document.querySelector("#navbar").innerHTML = `
<header>
    <div  class="container-wrapper">
        <div  class="container">
            <navi  class="navi">
                <ul  class="navi-list navi-list-mobile">
                    <li  class="navi-item  navi-logo">  <a  href="./index.html"     class="navi-link  navi-link-apple">             </a>  </li>                            
                    <li  class="navi-item">             <a  href="#"                class="navi-link  navi-link-search">            </a>  </li>
                    <li  class="navi-item">             <a  href="#"                class="navi-link  navi-link-bag">               </a>  </li>
                    <li  class="navi-item">
                        <div  class="mobile-menu">
                            <span  class="line  line-top"></span>
                            <span  class="line  line-bottom"></span>
                        </div>
                    </li>
                </ul>
                <ul  class="navi-list  navi-list-larger">
                    <li  class="navi-item  navi-item-hidden"    id="apple-icon"><a  href="./index.html"   class="navi-link  navi-link-apple"></a></li> 

                    ${navHTML}

                    <li  class="navi-item  navi-item-hidden"  id="search-icon"><div  class="navi-img">  <a  href="#"  class="navi-link  navi-link-search"></a>   </div>  </li>
                    <li  class="navi-item  navi-item-hidden"  id="bag-icon"   ><div  class="navi-img">  <a  href="#"  class="navi-link  navi-link-bag"   ></a>   </div>  </li>
                </ul>
            </navi>

            ${subNavHTML}
        </div>
    </div>
</header>
`;



// document.querySelector("#navbar").innerHTML = `
// <header>
//     <div  class="container-wrapper">
//         <div  class="container">
//             <navi  class="navi">
//                 <ul  class="navi-list navi-list-mobile">
//                     <li  class="navi-item  navi-logo">  <a  href="./index.html"   class="navi-link  navi-link-apple"> </a>  </li>                            
//                     <li  class="navi-item">             <a  href="#"   class="navi-link  navi-link-search">         </a>  </li>
//                     <li  class="navi-item">             <a  href="#"   class="navi-link  navi-link-bag">            </a>  </li>
//                     <li  class="navi-item">
//                         <div  class="mobile-menu">
//                             <span  class="line  line-top"></span>
//                             <span  class="line  line-bottom"></span>
//                         </div>
//                     </li>
//                 </ul>
//                 <ul  class="navi-list  navi-list-larger">
//                     <li  class="navi-item  navi-item-hidden"    id="apple-icon"><a  href="./index.html"   class="navi-link  navi-link-apple"></a></li> 
//                     <li  class="navi-item"  id="nav-store"          ><a  href="#"                 class="navi-link">   Store   </a></li>
//                     <li  class="navi-item"  id="nav-mac"            ><a  href="./mac.html"        class="navi-link">   Mac   </a></li>
//                     <li  class="navi-item"  id="nav-ipad"           ><a  href="#"                 class="navi-link">   iPad   </a></li>
//                     <li  class="navi-item"  id="nav-iphone"         ><a  href="#"                 class="navi-link">   iPhone   </a></li>
//                     <li  class="navi-item"  id="nav-watch"          ><a  href="#"                 class="navi-link">   Watch   </a></li>
//                     <li  class="navi-item"  id="nav-vision"         ><a  href="#"                 class="navi-link">   Vision   </a></li>
//                     <li  class="navi-item"  id="nav-airpods"        ><a  href="./airpods.html"    class="navi-link">   AirPods   </a></li>
//                     <li  class="navi-item"  id="nav-tv-home"        ><a  href="#"                 class="navi-link">   TV & Home   </a></li>
//                     <li  class="navi-item"  id="nav-entertainment"  ><a  href="#"                 class="navi-link">   Entertainment   </a></li>
//                     <li  class="navi-item"  id="nav-accessories"    ><a  href="#"                 class="navi-link">   Accessories   </a></li>
//                     <li  class="navi-item"  id="nav-support"        ><a  href="#"                 class="navi-link">   Support   </a></li>

//                     <li  class="navi-item  navi-item-hidden"  id="search-icon"><div  class="navi-img">  <a  href="#"  class="navi-link  navi-link-search"></a>   </div>  </li>
//                     <li  class="navi-item  navi-item-hidden"  id="bag-icon"   ><div  class="navi-img">  <a  href="#"  class="navi-link  navi-link-bag"   ></a>   </div>  </li>
//                 </ul>

//             </navi>

            
//             <div class="sub-navi-items  sub-navi-items-hidden"  id="store-menu">
//                 <div class="sub-navi-container  stand-out  sub-navi-container-one">
//                     <ul>
//                         <li  class="navi-header"> Shop </li>
                        
//                         <li  class="navi-item"><a  href="#"   class="navi-link">   Shop the Latest   </a></li>
//                         <li  class="navi-item"><a  href="./mac.html"   class="navi-link">   Mac   </a></li>
//                         <li  class="navi-item"><a  href="#"   class="navi-link">   iPad   </a></li>
//                         <li  class="navi-item"><a  href="#"   class="navi-link">   iPhone   </a></li>
//                         <li  class="navi-item"><a  href="#"   class="navi-link">   Apple Watch   </a></li>
//                         <li  class="navi-item"><a  href="#"   class="navi-link">   Apple Vision Pro   </a></li>
//                         <li  class="navi-item"><a  href="#"   class="navi-link">   Accessories   </a></li>
//                     </ul>
//                 </div>
//                 <div class="sub-navi-container  sub-text  sub-navi-container-two">
//                     <ul>
//                         <li  class="navi-header"> Quick Links </li>

//                         <li  class="navi-item"><a  href="#"   class="navi-link">   Find a Store     </a></li>
//                         <li  class="navi-item"><a  href="#"   class="navi-link">   Order Status     </a></li>
//                         <li  class="navi-item"><a  href="#"   class="navi-link">   Apple Trade In   </a></li>
//                         <li  class="navi-item"><a  href="#"   class="navi-link">   Financing        </a></li>
//                     </ul>
//                 </div>
//                 <div class="sub-navi-container  sub-text  sub-navi-container-three">
//                     <ul>
//                         <li  class="navi-header"> Shop Special Stores </li>

//                         <li  class="navi-item"><a  href="#"   class="navi-link">   Certified Refurbrished   </a></li>
//                         <li  class="navi-item"><a  href="#"   class="navi-link">   Education                </a></li>
//                         <li  class="navi-item"><a  href="#"   class="navi-link">   Business                 </a></li>
//                         <li  class="navi-item"><a  href="#"   class="navi-link">   Veterans and Military    </a></li>
//                         <li  class="navi-item"><a  href="#"   class="navi-link">   Government               </a></li>
//                     </ul>
//                 </div>
//             </div>


//         </div>
//     </div>
// </header>
// `

navbarPurpose(document.querySelector("header"))
storeMenuPurpose(document.querySelector("header"))
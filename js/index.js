const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']['img-src']);

// Header

const links = document.querySelectorAll('nav a');
links[0].innerHTML = siteContent['nav']['nav-item-1'];
links[1].innerHTML = siteContent['nav']['nav-item-2'];
links[2].innerHTML = siteContent['nav']['nav-item-3'];
links[3].innerHTML = siteContent['nav']['nav-item-4'];
links[4].innerHTML = siteContent['nav']['nav-item-5'];
links[5].innerHTML = siteContent['nav']['nav-item-6'];

const navColor = document.querySelectorAll('nav a');
navColor.forEach(element => {
  element.style.color = 'green';
})

let nav2 = document.querySelector('header nav');
const links2 = document.createElement('a');
links2.innerHTML = 'Social Media';
nav2.appendChild(links2);

/* Tried to this first...it created completely new a tags but wasn't connected to nav bar */
// links2.setAttribute('href', '#', siteContent['nav']['a']);
// console.log(links2)
// const newItem = document.createTextNode('Social Media');

const links3 = document.createElement('a');
links3.innerHTML = 'Home';

/* Tried to this first...it created completely new a tags but wasn't connected to nav bar */
// links3.setAttribute('href', '#', siteContent['nav']['a']);
// const newItem2 = document.createTextNode('Home');

nav2.prepend(links3);
console.log(links3)


// CTA

const ctaText = document.querySelector('.cta h1');
ctaText.innerHTML = siteContent['cta']['h1'];

const button1 = document.querySelector('.cta button');
// ctaBtn.textContent = siteContent['cta']['button'];
button1.innerHTML = siteContent['cta']['button'];


const ctaImg = document.getElementById('cta-img');
// ctaImg.setAttribute('src', siteContent['cta']["img-src"]);
ctaImg.src = siteContent.cta['img-src'];



// Main Content

const headerContent = document.querySelectorAll('.text-content h4');
headerContent[0].innerHTML = siteContent['main-content']['features-h4'];
headerContent[1].innerHTML = siteContent['main-content']['about-h4'];
headerContent[2].innerHTML = siteContent['main-content']['services-h4'];
headerContent[3].innerHTML = siteContent['main-content']['product-h4'];
headerContent[4].innerHTML = siteContent['main-content']['vision-h4'];

const mainContent = document.querySelectorAll('.text-content p');
mainContent[0].innerHTML = siteContent['main-content']['features-content'];
mainContent[1].innerHTML = siteContent['main-content']['about-content'];
mainContent[2].innerHTML = siteContent['main-content']['services-content'];
mainContent[3].innerHTML = siteContent['main-content']['product-content'];
mainContent[4].innerHTML = siteContent['main-content']['vision-content'];

const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);



// Contact
const contactHeader = document.querySelector('.contact h4');
contactHeader.innerHTML = siteContent['contact']['contact-h4'];

const contactContent = document.querySelectorAll('.contact p');
contactContent[0].innerHTML = siteContent['contact']['address'];
contactContent[1].innerHTML = siteContent['contact']['phone'];
contactContent[2].innerHTML = siteContent['contact']['email'];


// Footer
const footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer']['copyright'];








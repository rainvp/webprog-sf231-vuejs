<template>
    <div>
      <!-- Navigation -->
      <nav class="navbar">
        <div class="logo">
          <img src="https://scontent.fmnl33-1.fna.fbcdn.net/v/t1.15752-9/474667107_1150394953328908_453092773794161443_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFtTV2Y3K0jKg0_2qV1Ho2xsF94E5Xqu6ewX3gTleq7pyQODnFyHMmvOYxLBKQlWA6rilKeyHQG2zaatLODHo2A&_nc_ohc=rpQ5djOAujEQ7kNvgHIFAZB&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&oh=03_Q7cD1gF1ICi8zBFjshzJ24XNdz3oZT7SBQdxXjfFdQZv9Wfp3w&oe=67BFD3DF" alt="Rain's Cafe Logo">
        </div>
        <div>
          <a href="#home"><b>Home</b></a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <div class="dropdown">
            <button class="dropbtn">
              <span class="dropdown-icon">&#x25BC;</span> <!-- Dropdown icon -->
            </button>
            <div class="dropdown-content">
              <div class="dropdown-section">
                <h4 class="dropdown-title">Menu</h4>
                <a href="#menu1">Coffees</a>
                <a href="#menu2">Pastries</a>
                <a href="#menu3">Specials</a>
              </div>
              <div class="dropdown-section">
                <h4 class="dropdown-title">Contact Us</h4>
                <a href="#location">Our Location</a>
                <a href="#support">Customer Support</a>
              </div>
              <div class="dropdown-section">
                <h4 class="dropdown-title">Social</h4>
                <a href="#facebook">Facebook</a>
                <a href="#instagram">Instagram</a>
                <a href="#twitter">Twitter</a>
            </div>
        </div>
    </div>
</div>
</nav> 
  
      <!-- Banner Section -->
      <header id="banner">
        <div id="banner-content" class="row clearfix">
          <div class="col-38">
            <div class="section-heading">
              <h1>Rain's Digital Café</h1>
            </div>
            <a href="#" class="button">GET TO KNOW ME!</a>
          </div>
        </div><!-- End of Row -->
      </header>
  
      <!-- About The PAGE Container -->
      <div class="w3-sand w3-large">
        <div class="w3-container" id="about">
          <div class="w3-content" style="max-width: 1000px">
            <h5 class="tag">ABOUT THE CAFE</h5>
            <p>Welcome to my personal profile webpage! This is my very first step into the world of web development. I created this page to explore and learn the basics of building a website while expressing my style through a cozy café-inspired theme. It’s a small but meaningful project that represents the beginning of my journey in web design and development.</p>
          </div>
        </div>
  
        <!-- About ME Container -->
        <div class="w3-container" id="about-owner">
          <div class="w3-content" style="max-width: 1000px">
            <h5 class="tag">ABOUT THE OWNER</h5>
            <div class="w3-panel w3-leftbar w3-light-beige">
              <p><i>"The sun will rise and we will try again" – *quote credits*</i></p>
              <p>Chef, Coffeeist, and Owner: Rain Cel-Anne Sophia V. Presa</p>
            </div>
  
            <div id="app">
              <div class="gallery-slider">
                <div class="slider-nav left-arrow" @click="prevSlide">&#10094;</div>
                <div class="slider-images-wrapper">
                  <div v-for="image in currentImages" :key="image.id" class="slider-image">
                    <img :src="image.src" :alt="image.alt" class="gallery-img" />
                  </div>
                </div>
                <div class="slider-nav right-arrow" @click="nextSlide">&#10095;</div>
              </div>
  
              <!-- Subcaption -->
              <div class="slider-caption">
                <p>{{ currentCaption }}</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Menu Container -->
        <div class="w3-container" id="menu">
          <div class="w3-content" style="max-width: 700px">
            <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">Menu Section</span></h5>
            <div class="w3-row w3-center w3-card w3-padding">
              <a href="javascript:void(0)" onclick="textbox(event, 'Title here');" id="myLink">
                <div class="w3-col s6 tablink">Text here</div>
              </a>
              <a href="javascript:void(0)" onclick="textbox(event, 'Title2 here');">
                <div class="w3-col s6 tablink">Text here</div>
              </a>
            </div>
            <div id="Title here" class="w3-container menu w3-padding-48 w3-card">
              <h5>Coming soon...</h5>
              <p class="w3-text-grey">Text here</p><br>
            </div>
            <div id="Title2 here" class="w3-container menu w3-padding-48 w3-card">
              <h5>Coming soon...</h5>
              <p class="w3-text-grey">Text here</p><br>
            </div>
          </div>
        </div>
  
        <!-- Contact Section -->
        <section id="contact" class="contact">
          <form>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required>
            <label for="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import './menu.js';
  import './gallery.js';
  import './form.js';
  
  export default {
    name: "PersonalProfile",
  };
  </script>
  
  <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

body, html {
    height: 100%;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    color: #4a3b2b;
    background-color: #f8f5f0;
}

 .bgimg {
    background-position: center;
    background-size: cover;
    background-image: url("https://github.com/rainvp/Personal-Profile-Webpage/blob/main/images/472690451_953965212896626_182944049874713246_n.jpg?raw=true");
    min-height: 75%;
}

 .menu {
    display: none;
 }

 a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;
}
/*--------------------------------------------- Custom Styles------------------------------------------- */
.button.custom-bg {
    background-color: #f7e7d1; 
    color: #551f18; 
}
  
  .button.custom-bg:hover {
    background-color: #795548 !important;
    color: #ffffff !important; 
  }

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 40px; /* Spacing above and below the tag */
    font-size: 1.5rem; /* Adjust text size */
    font-weight: bold;
    color: #4a3b2b; /* Coffee-inspired color */
    text-transform: uppercase; /* Make the text all caps */
    letter-spacing: 2px; /* Add some spacing between letters */
    position: relative; /* For positioning the lines */
}

.tag::before {
    content: "";
    flex: 1; 
    height: 3px; 
    background: linear-gradient(to right, #d4b59b, #502917);
    margin: 0 15px;
}
.tag::after {
    content: "";
    flex: 1; 
    height: 3px; 
    background: linear-gradient(to left, #d4b59b, #502917); /* Gradient effect */
    margin: 0 15px;
}

/* ---------------------------------------- Navigation Bar ---------------------------------------------- */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #f7e7d1; 
    color: #4a3b2b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    z-index: 1000;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); 
}

.navbar .logo img {
    height: 65px; /* Adjust the height of the logo */
    width: auto; /* Maintain aspect ratio */
    display: block; /* Ensure proper spacing around the image */
}


.navbar a {
    color: #4a3b2b; 
    font-size: 20px;
    text-decoration: none; 
    padding: 10px 25px; 
    transition: background-color 0.3s ease, color 0.3s ease; 
}

.navbar a:hover {
    background-color: #d4b59b; 
    color: #fff; 
    border-radius: 5px;
}

/* Dropdown styling */
.dropdown {
    position: relative;
    display: inline-block;
}

.dropbtn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #4a3b2b;
    padding: 10px 15px;
    transition: color 0.3s ease;
}

.dropbtn:hover {
    color: #d4b59b;
}

/* Dropdown icon */
.dropdown-icon {
    font-size: 16px;
    margin-left: 5px;
    transition: transform 0.3s ease; /* Animation for rotation */
}

/* Dropdown content */
.dropdown-content {
    display: none;
    position: absolute;
    right: 0; /* Align dropdown below the icon */
    background-color: #fff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    min-width: 250px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px); /* Start with a slight downward position */
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease; /* Smooth fade-in and slide-up */
}

/* Dropdown sections */
.dropdown-section {
    padding: 15px;
    border-bottom: 1px solid #f7e7d1;
}

.dropdown-title {
    font-size: 16px;
    font-weight: bold;
    color: #4a3b2b;
    margin-bottom: 10px;
    text-transform: uppercase; /* Optional: Make titles uppercase for a neat look */
}

/* Dropdown items */
.dropdown-content a {
    color: #4a3b2b;
    padding: 8px 15px;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s ease;
}

.dropdown-content a:hover {
    background-color: #f7e7d1;
}

/* Show dropdown on hover */
.dropdown:hover .dropdown-content {
    display: block;
    opacity: 1;
    visibility: visible;
    transform: translateY(0); /* Slide to the original position */
}

/* Rotate the arrow when dropdown is open */
.dropdown:hover .dropdown-icon {
    transform: rotate(180deg); /* Rotate arrow */
}

/* ------------------------------------------------ Banner & Header ---------------------------*/
#banner {
    height: 100vh;
    display: flex;
    justify-content: flex-start; 
    align-items: center; 
    padding-left: 90px;
    padding-top: 20px;  
    position: relative;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-image: url("https://github.com/rainvp/Personal-Profile-Webpage/blob/main/images/472690451_953965212896626_182944049874713246_n.jpg?raw=true");
    min-height: 75%;
}

/* Optional Gradient Overlay for a softer look */
#banner:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(241, 179, 121, 0.39), rgba(255, 255, 255, 0.5));
}

/* Banner content section */
#banner-content {
    animation: fadeInLeft 1.5s ease-out;
    max-width: 50%; /* Restrict the content width */
    z-index: 2; /* Ensures content is above the background */
    position: relative;
    text-align: left;
}

/* Header styling */
#banner h1 {
    font-size: 5em;
    color:#fffaf5;
    margin-bottom: 15px;
    animation: fadeInLeft 1.5s ease-out;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px; 
    font-weight: bold;
    line-height: 1.2;
}

/* Subheading styling */
#banner h2 {
    font-size: 1.8em;
    margin-bottom: 30px;
    animation: fadeInLeft 1.5s ease-out;
    font-style: italic;
    letter-spacing: 1px;
    font-family: 'Arial', sans-serif;
    line-height: 1.5;
}

/* Button styling */
#banner .button {
    background-color: #502917;
    color: #fff;
    margin-top: 15px;
    padding: 22px;
    text-decoration: none;
    border-radius: 30px;
    font-size: 20px;
    transition: background-color 0.3s, transform 0.3s;
    position: relative;
    display: inline-block; 
    text-align: center;
}

/* Add hover effect */
#banner .button:hover {
    background-color: #6a3d22;
    transform: scale(1.05); 
}

/* Responsive adjustments */
@media (max-width: 768px) {
    #banner .button {
        padding: 0.8em 1.5em; /* Adjust padding for smaller screens */
        font-size: 1rem; /* Adjust font size */
    }
}

@media (max-width: 480px) {
    #banner .button {
        padding: 0.6em 1em; /* Further adjust for very small screens */
        font-size: 0.9rem;
        margin: 0.5em;
    }
}


/* Fade-in left animation */
@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}



  .w3-tag {
    background-color: #887169; 
    color: #ffffff; 
}

.w3-light-beige {
    background-color: #f7e6d1 ;
}
.w3-leftbar {
    border-left: 5px solid #cab291 !important; 
}

/* Gallery Styling */
.gallery-slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; 
    width: 99%; 
    margin: 20px auto; 
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #f7e7d1; 
}

.slider-images-wrapper {
    display: flex;
    transition: transform 0.5s ease-in-out; 
    width: 100%;
}

.slider-image {
    flex: 0 0 calc(100% / 3); /* 3 images per slide*/
    max-width: calc(100% / 3); 
    padding: 5px;
    box-sizing: border-box;
}

.gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 36px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    z-index: 2;
    user-select: none;
}

.left-arrow {
    left: 10px;
}

.right-arrow {
    right: 10px;
}

.slider-nav:hover {
    background-color: rgba(0, 0, 0, 0.8); 
}

/* Subcaption styling */
.slider-caption {
    text-align: center;
    font-size: 16px;
    color: #551f18; 
    font-family: "Inconsolata", sans-serif;
  }
  
  /* ---------------------------------------------------------------------Contact Section---------------------------------------------------- */
.contact form {
    max-width: 500px;
    margin: 0 auto;
    text-align: left;
}

.contact label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.contact input, .contact textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.contact button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #4a3b2b;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.contact button:hover {
    background-color: #6d4c41;
}

/* Footer */
footer {
    background-color: #4a3b2b;
    color: white;
    padding: 20px;
    text-align: center;
}
  </style>
  
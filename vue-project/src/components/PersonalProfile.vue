<template>
    <title>Rain's Cafe of Dreams</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400&display=swap" rel="stylesheet">

  </head>
<body>

<!-- Navigation -->
<nav class="navbar">
  <div class="logo">
  <img src="https://scontent.fmnl33-1.fna.fbcdn.net/v/t1.15752-9/474667107_1150394953328908_453092773794161443_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFtTV2Y3K0jKg0_2qV1Ho2xsF94E5Xqu6ewX3gTleq7pyQODnFyHMmvOYxLBKQlWA6rilKeyHQG2zaatLODHo2A&_nc_ohc=rpQ5djOAujEQ7kNvgHIFAZB&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&oh=03_Q7cD1gF1ICi8zBFjshzJ24XNdz3oZT7SBQdxXjfFdQZv9Wfp3w&oe=67BFD3DF" alt="Rain's Cafe Logo">
</div>
  <div>
      <a href="#home"><b> Home</a>
      <a href="#about">About</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Contact</a></b>
      <!-- Dropdown menu beside Contact -->
      <div class="dropdown">
          <button class="dropbtn">
              <span class="dropdown-icon">&#x25BC;</span> <!-- Dropdown icon -->
          </button>
          <div class="dropdown-content">
              <!-- Sample Sections in Dropdown -->
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
  </div><!--End of Row-->
</header>

<!-- Add a background color and large text to the whole page -->
<div class="w3-sand w3-large">

<!-- About The PAGE Container -->
<div class="w3-container" id="about">
  <div class="w3-content" style="max-width: 1000px">
    <h5 class="tag">ABOUT THE CAFE </h5>
  
    <p>Welcome to my personal profile webpage!</p>
    <p>This is my very first step into the world of web development. 
    I created this page to explore and learn the basics of building a website 
    while expressing my style through a cozy café-inspired theme. 
    It’s a small but meaningful project that represents the beginning of 
    my journey in web design and development</p>

 </div>
 
 <!-- About ME Container -->
<div class="w3-container" id="about">
  <div class="w3-content" style="max-width: 1000px">
    <h5 class="tag">ABOUT THE OWNER </h5>   
    <div class="w3-panel w3-leftbar w3-light-beige">
      <p><i>"The sun will rise and we will try again" *quote creds/smthn short i will say abt it*.</i></p>
      <p>Chef, Coffeeist and Owner: Rain Cel-Anne Sophia V. Presa</p> 
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

<!--Container -->
<div class="w3-container" id="menu">
  <div class="w3-content" style="max-width:700px">
 
    <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">Section 2</span></h5>
  
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
      <p class="w3-text-grey">text here</p><br>
    </div>

    <div id="Title2 here" class="w3-container menu w3-padding-48 w3-card">
      <h5>Coming soon...</h5>
      <p class="w3-text-grey">text here</p><br>
    </div>

  <!-- Contact/Area Container -->
<div class="w3-container" id="where" style="padding-bottom:32px;">
  <div class="w3-content" style="max-width:700px">
    <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">(Form Section using Vue JS)</span></h5>
    <p>Coming soon...</p>
    <img src="img link here" style="width:100%;max-width:1000px;margin-top:32px;">
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


 <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
 <script src="js/menu.js"></script> 
 <script src="js/gallery-vue.js"></script> 

</template>

<script>
import './menu.js'; 
import './gallery.js';
import './form.js';

export default {
  name: "PersonalProfile", 
};
</script>



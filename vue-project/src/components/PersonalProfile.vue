<template>
    <div>
      <nav class="navbar">
        <div class="logo">
          <img src="https://scontent.fmnl33-1.fna.fbcdn.net/v/t1.15752-9/474667107_1150394953328908_453092773794161443_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFtTV2Y3K0jKg0_2qV1Ho2xsF94E5Xqu6ewX3gTleq7pyQODnFyHMmvOYxLBKQlWA6rilKeyHQG2zaatLODHo2A&_nc_ohc=rpQ5djOAujEQ7kNvgHIFAZB&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&oh=03_Q7cD1gF1ICi8zBFjshzJ24XNdz3oZT7SBQdxXjfFdQZv9Wfp3w&oe=67BFD3DF" alt="Rain's Cafe Logo">
        </div>
        <div class="nav-links">
          <a href="#home"><b>Home</b></a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <div class="dropdown">
            <button class="dropbtn">
              <span class="dropdown-icon">&#x25BC;</span>
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
      
      <header id="banner">
        <div id="banner-content">
          <h1>Rain's Digital Café</h1>
          <a href="#about" class="button custom-bg">GET TO KNOW ME!</a>
        </div>
      </header>
  
      <section id="about" class="about-section">
        <h2>About Me</h2>
        <p>Welcome to my digital café! I'm Rain, a passionate web developer and coffee enthusiast. This space is where I share my journey, experiences, and projects.</p>
      </section>
  
      <section id="about-page" class="about-section">
        <h2>About the Page</h2>
        <p>This website is designed to showcase my skills in web development while embracing a cozy café aesthetic. Enjoy browsing through my work!</p>
      </section>
    </div>
  </template>
  
  <style scoped>
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
      background-image: url("https://raw.githubusercontent.com/rainvp/Personal-Profile-Webpage/main/images/472690451_953965212896626_182944049874713246_n.jpg");
      min-height: 75%;
  }
  
  a {
      text-decoration: none;
      color: inherit;
      transition: color 0.3s;
  }
  
  .button.custom-bg {
      background-color: #f7e7d1;
      color: #551f18;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
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
      margin: 40px;
      font-size: 1.5rem;
      font-weight: bold;
      color: #4a3b2b;
      text-transform: uppercase;
      letter-spacing: 2px;
      position: relative;
  }
  
  .tag::before, .tag::after {
      content: "";
      flex: 1;
      height: 3px;
      background: linear-gradient(to right, #d4b59b, #502917);
      margin: 0 15px;
  }
  
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
      height: 65px;
      width: auto;
  }
  
  .navbar .nav-links {
      display: flex;
      align-items: center;
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
  
  .about-section {
      padding: 50px;
      text-align: center;
      background-color: #f7e7d1;
      margin: 20px 0;
      border-radius: 10px;
  }
  </style>
  
  <script>
  export default {
    name: "RainsCafe"
  };
  </script>
  
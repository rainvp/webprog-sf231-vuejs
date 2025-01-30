<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="logo">
        <img src="https://scontent.fmnl33-1.fna.fbcdn.net/v/t1.15752-9/474667107_1150394953328908_453092773794161443_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFtTV2Y3K0jKg0_2qV1Ho2xsF94E5Xqu6ewX3gTleq7pyQODnFyHMmvOYxLBKQlWA6rilKeyHQG2zaatLODHo2A&_nc_ohc=rpQ5djOAujEQ7kNvgHIFAZB&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&oh=03_Q7cD1gF1ICi8zBFjshzJ24XNdz3oZT7SBQdxXjfFdQZv9Wfp3w&oe=67BFD3DF" alt="Rain's Cafe Logo">
      </div>
      <div>
        <a href="#home"><b> Home</b></a>
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
      </div>
    </header>

    <!-- About The PAGE Container -->
    <div class="w3-sand w3-large">
      <div class="w3-container" id="about">
        <div class="w3-content" style="max-width: 1000px">
          <h5 class="tag">ABOUT THE CAFE</h5>
          <p>Welcome to my personal profile webpage! This is my very first step into the world of web development. I created this page to explore and learn the basics of building a website while expressing my style through a cozy café-inspired theme. It’s a small but meaningful project that represents the beginning of my journey in web design and development.</p>
        </div>
        <div class="w3-container" id="about">
          <div class="w3-content" style="max-width: 1000px">
            <h5 class="tag">ABOUT THE OWNER</h5>
            <div class="w3-panel w3-leftbar w3-light-beige">
              <p><i>"The sun will rise and we will try again" - *quote creds/smthn short i will say abt it*.</i></p>
              <p>Chef, Coffeeist, and Owner: Rain Cel-Anne Sophia V. Presa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCafe",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
body,
html {
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
  margin: 40px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a3b2b;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
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
  background: linear-gradient(to left, #d4b59b, #502917);
  margin: 0 15px;
}

/* Navigation */
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
  display: block;
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

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 250px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
}

.dropdown-section {
  padding: 15px;
  border-bottom: 1px solid #f7e7d1;
}

.dropdown-title {
  font-size: 16px;
  font-weight: bold;
  color: #4a3b2b;
  margin-bottom: 10px;
}

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

.dropdown:hover .dropdown-content {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown:hover .dropdown-icon {
  transform: rotate(180deg);
}

/* Banner Section */
#banner {
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 90px;
  padding-top: 20px;
  position: relative;
  background-position: center;
  background-size: cover;
  background-image: url("https://github.com/rainvp/Personal-Profile-Webpage/blob/main/images/472690451_953965212896626_182944049874713246_n.jpg?raw=true");
}

#banner:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(241, 179, 121, 0.39), rgba(255, 255, 255, 0.5));
}

#banner-content {
  animation: fadeInLeft 1.5s ease-out;
  max-width: 50%;
  z-index: 2;
  position: relative;
  text-align: left;
}

#banner h1 {
  font-size: 5em;
  color: #fffaf5;
  margin-bottom: 15px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 2px;
  font-weight: bold;
}

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
}

#banner .button:hover {
  background-color: #6a3d22;
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  #banner .button {
    padding: 0.8em 1.5em;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  #banner .button {
    padding: 0.6em 1em;
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
</style>

<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="logo">
        <img :src="require('@/assets/logo.png')" alt="Rain's Cafe Logo">
      </div>
      <div>
        <a href="#home"><b> Home</b></a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <div class="dropdown">
          <button @click="toggleDropdown" class="dropbtn">
            <span class="dropdown-icon">&#x25BC;</span>
          </button>
          <div v-if="isDropdownOpen" class="dropdown-content">
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
          <a href="#about" class="button">GET TO KNOW ME!</a>
        </div>
      </div>
    </header>

    <!-- About The PAGE Container -->
    <div class="w3-sand w3-large">
      <div class="w3-container" id="about">
        <div class="w3-content" style="max-width: 1000px">
          <h5 class="tag">ABOUT THE CAFE</h5>
          <p>Welcome to my personal profile webpage! This is my very first step into the world of web development...</p>
        </div>
      </div>
      <div class="w3-container" id="owner">
        <div class="w3-content" style="max-width: 1000px">
          <h5 class="tag">ABOUT THE OWNER</h5>
          <div class="w3-panel w3-leftbar w3-light-beige">
            <p><i>"The sun will rise and we will try again."</i></p>
            <p>Chef, Coffeeist, and Owner: Rain Cel-Anne Sophia V. Presa</p>
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
    return {
      isDropdownOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
};
</script>

<style scoped>
/* Ensuring proper dropdown functionality */
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

.dropdown:hover .dropdown-content,
.dropdown-content.v-if {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-icon {
  transition: transform 0.3s;
}

.dropdown:hover .dropdown-icon,
.dropbtn[aria-expanded="true"] .dropdown-icon {
  transform: rotate(180deg);
}
</style>

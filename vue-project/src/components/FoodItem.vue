<template>
    <div v-on:click="countClicks" class="apple">
      <h2>{{ name }}</h2>  
      <p>{{ message }}</p>
      <p id="red">You have clicked me {{ clicks }} times.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Apples',
        message: 'I like apples',
        clicks: 0
      }
    },
    methods: {
      countClicks() {
        this.clicks++;
      }
    }
  }
  </script>
  
  <style>
    .apple {
      border: solid green 2px;
      display: inline-block;
      margin: 10px;
      padding: 10px;
      background-color: lightgreen;
    }
  
    #red {
      font-weight: bold;
      color: rgb(144, 12, 12);
    }
  </style>
  
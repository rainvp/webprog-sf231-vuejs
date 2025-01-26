<template>
    <div v-on:click="countClicks" class="mangoes">
      <h2>{{ name }}</h2>  
      <p>{{ message }}</p>
      <p id="red">You have clicked me {{ clicks }} times.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Mangoes',
        message: 'I like mangoes',
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
    .mangoes {
      border: dashed black 1px;
      display: inline-block;
      margin: 10px;
      padding: 10px;
      background-color: lightyellow;
    }
  
    #red {
      font-weight: bold;
      color: rgb(144, 12, 12);
    }
  </style>
  
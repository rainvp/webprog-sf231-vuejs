<template>
    <div>
      <h2>Countries</h2>
      <ul v-if="countries.length">
        <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
      </ul>
      <p v-else>Loading countries...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { supabase } from '../lib/supabaseClient';
  
  const countries = ref([]);
  
  async function getCountries() {
    const { data, error } = await supabase.from('countries').select();
    if (!error) {
      countries.value = data;
    } else {
      console.error("Error fetching countries:", error);
    }
  }
  
  onMounted(getCountries);
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    background: lightyellow;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
  }
  </style>
  
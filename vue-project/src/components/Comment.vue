<template>
    <div>
      <h2>Comments</h2>
      <ul v-if="comments.length">
        <li v-for="comment in comments" :key="comment.id">
          <strong>{{ comment.name }}</strong>: {{ comment.comment }}
        </li>
      </ul>
      <p v-else>No comments yet.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { supabase } from '../lib/supabaseClient';
  
  const comments = ref([]);
  
  async function fetchComments() {
    const { data, error } = await supabase.from('comments').select();
    if (error) {
      console.error("Error fetching comments:", error);
    } else {
      comments.value = data;
    }
  }
  
  onMounted(fetchComments);
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    background: lightyellow;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
  }
  </style>
  
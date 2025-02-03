<template>
    <div>
      <h2>Leave a Comment</h2>
      <form @submit.prevent="submitComment">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div>
          <label for="comment">Comment:</label>
          <textarea id="comment" v-model="comment" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { supabase } from '../lib/supabaseClient';
  
  const name = ref('');
  const comment = ref('');
  
  async function submitComment() {
    if (!name.value.trim() || !comment.value.trim()) return;
  
    const { error } = await supabase
      .from('comments')
      .insert([{ name: name.value, comment: comment.value }]);
  
    if (!error) {
      name.value = '';
      comment.value = '';
    } else {
      console.error("Error submitting comment:", error);
    }
  }
  </script>
  
  <style scoped>
  input, textarea {
    display: block;
    margin-bottom: 10px;
    width: 100%;
  }
  </style>
  
<template>
  <div>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.name }}</strong>: {{ comment.comment }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const comments = ref([])

async function getComments() {
  try {
    const { data, error } = await supabase.from('comments').select().order('created_at', { ascending: false })

    if (error) {
      console.error("❌ Error fetching comments:", error)
      return
    }

    console.log("✅ Fetched comments:", data)
    comments.value = data
  } catch (err) {
    console.error("❌ Unexpected error:", err)
  }
}

onMounted(() => {
  getComments()

  // Listen for real-time changes
  const subscription = supabase
    .channel('comments-realtime')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments' }, payload => {
      console.log("🔄 New comment received:", payload.new)
      comments.value.unshift(payload.new) // Add new comment to the list
    })
    .subscribe()

  onUnmounted(() => {
    supabase.removeChannel(subscription)
  })
})
</script>

<style scoped>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightyellow;
}
</style>

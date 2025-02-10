import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['@supabase/supabase-js'],
  },
  build: {
    rollupOptions: {
      external: ['@supabase/supabase-js'],
    },
  },
});

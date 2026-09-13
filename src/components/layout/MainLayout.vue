<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/common/AppHeader.vue'
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>

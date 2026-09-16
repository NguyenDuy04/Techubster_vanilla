<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppTopNav from '@/components/common/AppTopNav.vue'
</script>

<template>
  <AppTopNav />
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>

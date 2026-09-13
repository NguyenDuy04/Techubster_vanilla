<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme.store'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.applyTheme(localStorage.getItem('theme') || 'light')
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>

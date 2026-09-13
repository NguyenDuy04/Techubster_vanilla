import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem('theme') || 'light')

  const applyTheme = (value: string) => {
    theme.value = value

    localStorage.setItem('theme', value)

    document.documentElement.setAttribute('data-theme', value)
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  return {
    theme,
    applyTheme,
    toggleTheme,
  }
})

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@/i18n/index.ts'
import '@/assets/styles/global.css'
import '@/assets/styles/theme.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')

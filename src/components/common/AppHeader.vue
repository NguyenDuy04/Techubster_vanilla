<script setup lang="ts">
import { MapPinned } from '@lucide/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div>
    <div>
      <button>
        <MapPinned />
        <span>{{ t('storelocation') }}</span>
      </button>
      <div></div>
      <div></div>
    </div>
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped></style>

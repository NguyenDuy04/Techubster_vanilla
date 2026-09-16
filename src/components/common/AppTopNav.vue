<script setup lang="ts">
import { MapPinned, CloudDownload } from '@lucide/vue'
import { useI18n } from 'vue-i18n'
import FacebookIcon from '@/assets/icons/facebook.svg'
import InstagramIcon from '@/assets/icons/instagram.svg'
import { RouterLink } from 'vue-router'
import GooglePlayImg from '@/assets/images/googleplay.png'
import AppStoreImg from '@/assets/images/appstore.png'
import QrCodeImg from '@/assets/images/qrcode.png'

const { t } = useI18n()
</script>

<template>
  <div id="navtop">
    <div class="navtop__wrapper">
      <div class="navtop__list">
        <RouterLink to="/help" class="navtop__item">
          <MapPinned class="navtop__item-icon" />
          <span class="navtop__item-label" style="position: relative; top: 0.5px">
            {{ t('storelocation') }}
          </span>
        </RouterLink>
        <div class="navtop__item navtop__item--qrcode">
          <CloudDownload class="navtop__item-icon" />
          <span class="navtop__item-label">
            {{ t('downloadapp') }}
          </span>
          <div class="navtop__qrdownload">
            <img class="navtop__qrdownload-qrcode" :src="QrCodeImg" alt="Qr Code" />
            <div class="navtop__qrdownload--social">
              <a href="">
                <img :src="AppStoreImg" alt="AppStore" />
              </a>
              <a href="">
                <img :src="GooglePlayImg" alt="AppStore" />
              </a>
            </div>
          </div>
        </div>
        <div class="navtop__item">
          <span class="navtop__item-label no-hover">
            {{ t('connect') }}
          </span>
          <a
            class="social__link"
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="FacebookIcon" alt="Facebook" class="social__icon" />
          </a>
          <a
            class="social__link"
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="InstagramIcon" alt="Facebook" class="social__icon" />
          </a>
        </div>
      </div>
      <div class="navtop__list">
        <div class="current_language">
          <div>
            <span> VietNam </span>
          </div>
          <div>VND</div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#navtop {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-navtop);
}

.navtop__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navtop__list {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 36px;
}

.navtop__item {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 4px;
  cursor: pointer;
}

.navtop__qrdownload {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 210px;
  border: #ccc 1px solid;
  top: 100%;
  left: -24px;
  border-radius: 10px;
  overflow: hidden;
  padding: 2px;
  /* Animation */
  opacity: 0;
  visibility: hidden;
  transform: scale(0.95);
  transform-origin: top center;
  transition: all 0.25s ease;
}

.navtop__item.navtop__item--qrcode:hover .navtop__qrdownload {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}

.navtop__qrdownload-qrcode {
  display: flex;
  cursor: default;
}

.navtop__qrdownload--social {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
  padding-bottom: 8px;
}

.navtop__qrdownload--social a {
  width: 96px;
}

.navtop__qrdownload--social a:first-child {
  padding-left: 15px;
}

.navtop__qrdownload--social a:last-child {
  padding-right: 13px;
}

.navtop__item:not(:last-child):before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -20px;
  content: '';
  width: 1px;
  height: 20px;
  color: #ccc;
  background-color: #ccc;
  cursor: default;
}

.navtop__item-icon {
  width: 18px;
  height: 18px;
  color: var(--text-navtop);
}

.navtop__item-label {
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-navtop);
}

.navtop__item:hover .navtop__item-icon,
.navtop__item:hover .navtop__item-label {
  color: var(--text-navtop-hover);
}

.navtop__item-label.no-hover {
  cursor: default !important;
  color: var(--text-navtop) !important;
}

.social__link {
  display: flex;
  height: 100%;
  align-items: center;
}

.social__icon {
  margin-left: 2px;
  width: 20px;
  height: 20px;
}

.current_language {
  display: flex;
}

@media (min-width: 1024px) and (max-width: 1536px) {
  .navtop__wrapper {
    width: 100%;
    padding-inline: 18px;
  }
  /* .navtop__item {
    margin-inline: 20px;
  } */
  .navtop__item:first-child {
    margin-left: 0;
  }
  .navtop__item:last-child {
    margin-right: 0;
  }
}

@media (min-width: 1536px) {
  .navtop__wrapper {
    width: 1280px;
  }
}
</style>

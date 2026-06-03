<script setup>
import { Eye } from '@lucide/vue'
import { ref } from 'vue'

const selectedImage = ref(null)

const images = [
  { src: '/Products/toto/bathtub-flotation.jpg', caption: 'حوض الاستحمام العائم', captionEn: 'Flotation Tub' },
  { src: '/Products/toto/sink-tl-series.jpg', caption: 'مغاسل TL', captionEn: 'TL Series Washbasins' },
  { src: '/Products/toto/toilet-neorest-nx.jpg', caption: 'مرحاض نيويرست الذكي', captionEn: 'NEOREST NX Smart Toilet' },
  { src: '/Products/milano/gold-blue-bathroom.jpg', caption: 'حمام كلاسيكي فاخر', captionEn: 'Luxury Traditional Bathroom' },
  { src: '/Products/toto/faucet-za.jpg', caption: 'خلاطات ZA', captionEn: 'ZA Series Faucets' },
  { src: '/Products/milano/chrome-shower.jpg', caption: 'دش كروم عصري', captionEn: 'Chrome Shower Valve' },
]

function openImage(img) {
  selectedImage.value = img
}
function closeImage() {
  selectedImage.value = null
}
</script>

<template>
  <section class="py-20 px-6 bg-surface-dark">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-14">
        <p class="font-heading text-primary text-xs tracking-[0.3em] uppercase mb-2">Our Showroom</p>
        <h2 class="font-arabic text-white text-3xl sm:text-4xl font-bold mb-3" dir="rtl">معرضنا</h2>
        <p class="text-text-muted text-sm max-w-lg mx-auto">
          Step inside our showroom and explore our premium collection of materials and displays.
        </p>
      </div>

      <!-- Masonry Grid -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        <div v-for="(img, index) in images" :key="index"
             class="relative group overflow-hidden rounded-card cursor-pointer break-inside-avoid"
             :class="index % 3 === 1 ? 'sm:mt-8' : ''"
             @click="openImage(img)">
          <img :src="img.src" :alt="img.caption"
               class="w-full object-cover transition-transform duration-500 group-hover:scale-105"
               :class="index % 3 === 0 ? 'aspect-[4/3]' : index % 3 === 1 ? 'aspect-[3/4]' : 'aspect-square'" />

          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
            <div class="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
              <Eye :size="24" class="text-white mx-auto mb-2" />
              <p class="font-arabic text-white text-sm font-semibold" dir="rtl">{{ img.caption }}</p>
              <p class="text-white/60 text-xs mt-1">{{ img.captionEn }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <router-link to="/showroom"
                     class="inline-flex items-center gap-2 border-2 border-primary hover:bg-primary text-primary hover:text-white font-arabic font-semibold text-sm px-8 py-3 rounded-btn transition-all duration-200 cursor-pointer">
          عرض المعرض الكامل
        </router-link>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="selectedImage"
             class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-pointer"
             @click="closeImage">
          <div class="max-w-4xl w-full" @click.stop>
            <img :src="selectedImage.src" :alt="selectedImage.caption"
                 class="w-full rounded-xl object-contain max-h-[80vh]" />
            <div class="text-center mt-4">
              <p class="font-arabic text-white text-lg font-semibold" dir="rtl">{{ selectedImage.caption }}</p>
              <p class="text-text-muted text-sm mt-1">{{ selectedImage.captionEn }}</p>
            </div>
          </div>
          <button @click="closeImage"
                  class="absolute top-6 right-6 text-white/60 hover:text-white text-2xl cursor-pointer"
                  aria-label="Close lightbox">
            ✕
          </button>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

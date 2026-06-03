<script setup>
import { ref } from 'vue'
import { Eye, ArrowRight } from '@lucide/vue'

const selectedImage = ref(null)

const galleryImages = [
  { src: '/Products/toto/bathtub-flotation.jpg', caption: 'حوض الاستحمام العائم', captionEn: 'Flotation Tub', span: 'col-span-2 row-span-2' },
  { src: '/Products/toto/toilet-neorest-nx.jpg', caption: 'مرحاض نيويرست الذكي', captionEn: 'NEOREST NX Smart Toilet', span: '' },
  { src: '/Products/toto/sink-tl-series.jpg', caption: 'مغاسل TL', captionEn: 'TL Series Washbasins', span: '' },
  { src: '/Products/milano/gold-blue-bathroom.jpg', caption: 'حمام كلاسيكي فاخر', captionEn: 'Luxury Traditional Bathroom', span: '' },
  { src: '/Products/toto/faucet-za.jpg', caption: 'خلاطات ZA', captionEn: 'ZA Series Faucets', span: 'col-span-2' },
  { src: '/Products/munk/bathtub-b117w5.jpg', caption: 'حوض استحمام MUNK', captionEn: 'MUNK Freestanding Bathtub', span: '' },
  { src: '/Products/milano/chrome-shower.jpg', caption: 'دش كروم عصري', captionEn: 'Chrome Shower Valve', span: '' },
  { src: '/Products/munk/basin-p128w1.jpg', caption: 'مغاسل حائط', captionEn: 'Wall-Mount Basins', span: 'col-span-2' },
  { src: '/Products/toto/shower-column.jpg', caption: 'عمود دش Z', captionEn: 'Z Selection Shower Column', span: '' },
]

function openImage(img) {
  selectedImage.value = img
}
function closeImage() {
  selectedImage.value = null
}
</script>

<template>
  <main class="pt-24 pb-20">
    <!-- Page Header -->
    <section class="py-16 px-6 bg-bg-dark">
      <div class="max-w-7xl mx-auto text-center">
        <p class="font-heading text-primary text-xs tracking-[0.3em] uppercase mb-2">Our Showroom</p>
        <h1 class="font-arabic text-white text-4xl sm:text-5xl font-bold mb-4" dir="rtl">معرضنا</h1>
        <p class="text-text-muted text-base max-w-xl mx-auto">
          Experience our premium collection firsthand. Visit our showroom to see, touch, and feel the quality.
        </p>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-12 px-6 bg-bg-dark">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          <div v-for="(img, index) in galleryImages" :key="index"
               class="relative group overflow-hidden rounded-card cursor-pointer"
               :class="img.span"
               @click="openImage(img)">
            <img :src="img.src" :alt="img.caption"
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
              <div class="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                <Eye :size="24" class="text-white mx-auto mb-2" />
                <p class="font-arabic text-white text-sm font-semibold" dir="rtl">{{ img.caption }}</p>
                <p class="text-white/60 text-xs mt-1">{{ img.captionEn }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visit CTA -->
    <section class="py-12 px-6 bg-surface-dark">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="font-arabic text-white text-2xl font-bold mb-4" dir="rtl">زوروا معرضنا اليوم</h2>
        <p class="text-text-muted text-sm mb-8">
          Our team is ready to help you find the perfect materials for your project.
        </p>
        <router-link to="/contact"
                     class="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-arabic font-bold text-sm px-8 py-3 rounded-btn transition-all duration-200 cursor-pointer hover:shadow-glow">
          تواصل معنا
          <ArrowRight :size="16" />
        </router-link>
      </div>
    </section>

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
  </main>
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

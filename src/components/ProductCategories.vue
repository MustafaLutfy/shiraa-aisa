<script setup>
import { ArrowLeft } from '@lucide/vue'

const categories = [
  {
    nameAr: 'المواد الصحية',
    nameEn: 'Sanitary Ware',
    image: '/Products/toto/toilet-neorest-wx.jpg',
  },
  {
    nameAr: 'السيراميك والبلاط',
    nameEn: 'Tiles & Ceramics',
    image: '/Products/milano/radiator-windsor.png',
  },
  {
    nameAr: 'التركيبات والخلاطات',
    nameEn: 'Fittings & Mixers',
    image: '/Products/toto/faucet-za.jpg',
  },
  {
    nameAr: 'مواد البناء',
    nameEn: 'Construction Materials',
    image: '/Products/munk/banner-1.jpg',
  },
]
</script>

<template>
  <section class="py-20 px-6 bg-bg-dark">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-14">
        <p class="font-heading text-primary text-xs tracking-[0.3em] uppercase mb-2">Our Products</p>
        <h2 class="font-arabic text-white text-3xl sm:text-4xl font-bold mb-3" dir="rtl">فئات المنتجات</h2>
        <p class="text-text-muted text-sm max-w-lg mx-auto">
          Explore our comprehensive range of premium sanitary and construction materials.
        </p>
      </div>

      <!-- Category Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <router-link v-for="cat in categories" :key="cat.nameEn"
                     to="/products"
                     class="group relative overflow-hidden rounded-card aspect-[4/5] cursor-pointer">
          <!-- Background Image -->
          <img :src="cat.image" :alt="cat.nameAr"
               class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>

          <!-- Content -->
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <h3 class="font-arabic text-white text-xl font-bold mb-1" dir="rtl">{{ cat.nameAr }}</h3>
            <p class="font-heading text-white/60 text-xs tracking-widest uppercase mb-4">{{ cat.nameEn }}</p>
            <div class="flex items-center gap-2 text-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span class="font-arabic text-sm font-semibold" dir="rtl">استكشف</span>
              <ArrowLeft :size="14" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

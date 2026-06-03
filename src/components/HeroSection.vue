<script setup>
import { ArrowLeft } from '@lucide/vue'
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-bg-dark">
      <img src="/Products/munk/banner-1.jpg"
           alt="Showroom interior"
           class="w-full h-full object-cover opacity-30" />
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-bg-dark/70 via-bg-dark/50 to-bg-dark"></div>
    </div>

    <!-- Green Accent Glow -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
      <!-- Arabic Headline -->
      <h1 class="font-arabic text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4" dir="rtl">
        شراع اسيا
        <br />
        <span class="text-primary">للمواد الصحية والانشائية</span>
      </h1>

      <!-- Latin Subtitle -->
      <p class="font-heading text-white/60 text-sm sm:text-base tracking-[0.25em] uppercase mb-6">
        SHIRAA ASIA — Premium Materials
      </p>

      <!-- Description -->
      <p class="font-arabic text-text-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10" dir="rtl">
        نحن نوفر أفضل المواد الصحية والإنشائية من كبرى العلامات العالمية
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <router-link to="/showroom"
                     class="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-arabic font-bold text-base px-8 py-4 rounded-btn transition-all duration-200 cursor-pointer hover:shadow-glow">
          زيارة المعرض
          <ArrowLeft :size="20" />
        </router-link>
        <router-link to="/products"
                     class="inline-flex items-center gap-2 border-2 border-white/20 hover:border-primary text-white font-arabic font-semibold text-base px-8 py-4 rounded-btn transition-all duration-200 cursor-pointer hover:bg-white/5">
          تصفح المنتجات
        </router-link>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-text-muted text-xs font-heading tracking-widest uppercase">Scroll</span>
      <div class="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
    </div>
  </section>
</template>

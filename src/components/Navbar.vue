<script setup>
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'

const isOpen = ref(false)

const navLinks = [
  { name: 'الرئيسية', nameEn: 'Home', to: '/' },
  { name: 'المعرض', nameEn: 'Showroom', to: '/showroom' },
  { name: 'المنتجات', nameEn: 'Products', to: '/products' },
  { name: 'تواصل معنا', nameEn: 'Contact', to: '/contact' },
]

function toggle() {
  isOpen.value = !isOpen.value
}
function close() {
  isOpen.value = false
}
</script>

<template>
  <nav class="fixed top-4 left-4 right-4 z-20 rounded-2xl transition-all duration-300"
       :class="isOpen ? 'bg-bg-dark' : 'bg-bg-dark/90 backdrop-blur-xl border border-white/10'">
    <div class="max-w-7xl mx-auto flex items-center justify-between h-[72px] px-6">
      <!-- Logo -->
      <router-link to="/" @click="close" class="flex items-center gap-3 cursor-pointer">
        <!-- Sail Icon -->
        <div class="flex items-end gap-[3px]">
          <div class="w-[8px] h-[20px] bg-primary rounded-[2px] -skew-x-[8deg]"></div>
          <div class="w-[8px] h-[26px] bg-primary-dark rounded-[2px] -skew-x-[8deg]"></div>
          <div class="w-[8px] h-[32px] bg-primary rounded-[2px] -skew-x-[8deg]"></div>
        </div>
        <div class="leading-tight">
          <div class="font-arabic text-white text-sm font-bold" dir="rtl">شراع اسيا</div>
          <div class="font-heading text-text-muted text-[10px] font-semibold tracking-widest">SHIRAA ASIA</div>
        </div>
      </router-link>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-8">
        <router-link v-for="link in navLinks" :key="link.to"
                     :to="link.to"
                     class="font-arabic text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
                     active-class="!text-primary">
          {{ link.name }}
        </router-link>
      </div>

      <!-- Desktop CTA -->
      <router-link to="/contact"
                   class="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-heading font-semibold text-sm px-6 py-2.5 rounded-btn transition-all duration-200 cursor-pointer hover:shadow-glow">
        تواصل معنا
      </router-link>

      <!-- Mobile Toggle -->
      <button @click="toggle"
              class="md:hidden text-white p-2 cursor-pointer"
              :aria-label="isOpen ? 'Close menu' : 'Open menu'">
        <X v-if="isOpen" :size="24" />
        <Menu v-else :size="24" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="isOpen" class="md:hidden px-6 pb-6 pt-2">
        <div class="flex flex-col gap-1 border-t border-white/10 pt-4">
          <router-link v-for="link in navLinks" :key="link.to"
                       :to="link.to"
                       @click="close"
                       class="font-arabic text-white/70 hover:text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                       active-class="!text-primary !bg-primary/10">
            {{ link.name }}
          </router-link>
        </div>
        <router-link to="/contact" @click="close"
                     class="mt-4 w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-heading font-semibold text-sm px-6 py-3 rounded-btn transition-all duration-200 cursor-pointer">
          تواصل معنا
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

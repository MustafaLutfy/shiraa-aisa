<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-bg-dark text-white">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowLeft, Filter } from '@lucide/vue'

const categories = [
  {
    id: 'sanitary',
    nameAr: 'المواد الصحية',
    nameEn: 'Sanitary Ware',
    image: '/Products/toto/toilet-neorest-wx.jpg',
    products: [
      { nameAr: 'مراحيض', nameEn: 'Toilets', image: '/Products/toto/toilet-neorest-nx.jpg' },
      { nameAr: 'مغاسل', nameEn: 'Washbasins', image: '/Products/toto/sink-tl-series.jpg' },
      { nameAr: 'بانيوهات', nameEn: 'Bathtubs', image: '/Products/toto/bathtub-flotation.jpg' },
      { nameAr: 'بيديهات', nameEn: 'Bidets', image: '/Products/munk/bidet-t14408.jpg' },
      { nameAr: 'كابينات الدش', nameEn: 'Shower Cabins', image: '/Products/toto/shower-column.jpg' },
      { nameAr: 'مرايا ذكية', nameEn: 'Smart Mirrors', image: '/Products/munk/mirror-led.jpg' },
    ]
  },
  {
    id: 'tiles',
    nameAr: 'السيراميك والبلاط',
    nameEn: 'Tiles & Ceramics',
    image: '/Products/milano/radiator-windsor.png',
    products: [
      { nameAr: 'بلاط أرضيات', nameEn: 'Floor Tiles', image: '/Products/milano/radiator-aruba.jpg' },
      { nameAr: 'بلاط جدران', nameEn: 'Wall Tiles', image: '/Products/milano/radiator-gold.jpg' },
      { nameAr: 'بورسلين', nameEn: 'Porcelain', image: '/Products/milano/radiator-blue.jpg' },
      { nameAr: 'سيراميك حمامات', nameEn: 'Bathroom Ceramics', image: '/Products/milano/traditional-suite.jpg' },
      { nameAr: 'بلاط خارجي', nameEn: 'Outdoor Tiles', image: '/Products/milano/grey-bathtub.jpg' },
      { nameAr: 'ديكور وموزايك', nameEn: 'Mosaic & Decor', image: '/Products/milano/towel-rail-black.jpg' },
    ]
  },
  {
    id: 'fittings',
    nameAr: 'التركيبات والخلاطات',
    nameEn: 'Fittings & Mixers',
    image: '/Products/toto/faucet-za.jpg',
    products: [
      { nameAr: 'خلاطات', nameEn: 'Mixers', image: '/Products/toto/faucet-za.jpg' },
      { nameAr: 'حنفيات', nameEn: 'Faucets', image: '/Products/munk/faucet-93w210.jpg' },
      { nameAr: 'دشات', nameEn: 'Showers', image: '/Products/milano/chrome-shower.jpg' },
      { nameAr: 'أنابيب ووصلات', nameEn: 'Pipes & Connectors', image: '/Products/munk/shower-set.jpg' },
    ]
  },
  {
    id: 'construction',
    nameAr: 'مواد البناء',
    nameEn: 'Construction Materials',
    image: '/Products/munk/banner-1.jpg',
    products: [
      { nameAr: 'مواد لاصقة', nameEn: 'Adhesives', image: '/Products/munk/banner-2.jpg' },
      { nameAr: 'مواد عازلة', nameEn: 'Waterproofing', image: '/Products/munk/banner-3.jpg' },
      { nameAr: 'مواد كيميائية', nameEn: 'Chemicals', image: '/Products/munk/basin-p12617.jpg' },
      { nameAr: 'أسمنت وملاط', nameEn: 'Cement & Mortar', image: '/Products/munk/shower-concealed.jpg' },
    ]
  },
]

const activeCategory = ref(null)

function selectCategory(cat) {
  activeCategory.value = activeCategory.value === cat.id ? null : cat.id
}
</script>

<template>
  <main class="pt-24 pb-20">
    <!-- Page Header -->
    <section class="py-16 px-6 bg-bg-dark">
      <div class="max-w-7xl mx-auto text-center">
        <p class="font-heading text-primary text-xs tracking-[0.3em] uppercase mb-2">Our Products</p>
        <h1 class="font-arabic text-white text-4xl sm:text-5xl font-bold mb-4" dir="rtl">المنتجات</h1>
        <p class="text-text-muted text-base max-w-xl mx-auto">
          Browse our comprehensive range of sanitary and construction materials.
        </p>
      </div>
    </section>

    <!-- Categories -->
    <section class="px-6 bg-bg-dark pb-20">
      <div class="max-w-7xl mx-auto space-y-12">
        <div v-for="cat in categories" :key="cat.id">
          <!-- Category Header -->
          <button @click="selectCategory(cat)"
                  class="w-full flex items-center justify-between p-6 bg-surface-dark border border-white/5 rounded-card hover:border-primary/30 transition-all duration-200 cursor-pointer mb-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <img :src="cat.image" :alt="cat.nameAr" class="w-full h-full object-cover" />
              </div>
              <div class="text-right">
                <h2 class="font-arabic text-white text-lg font-bold" dir="rtl">{{ cat.nameAr }}</h2>
                <p class="font-heading text-text-muted text-xs tracking-widest uppercase">{{ cat.nameEn }} — {{ cat.products.length }} items</p>
              </div>
            </div>
            <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300"
                 :class="activeCategory === cat.id ? 'rotate-180' : ''">
              <ArrowLeft :size="16" class="text-text-muted" />
            </div>
          </button>

          <!-- Products Grid -->
          <transition name="expand">
            <div v-if="activeCategory === cat.id" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pl-4 border-l-2 border-primary/20">
              <div v-for="product in cat.products" :key="product.nameEn"
                   class="group relative overflow-hidden rounded-card aspect-square cursor-pointer">
                <img :src="product.image" :alt="product.nameAr"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-3">
                  <h4 class="font-arabic text-white text-sm font-bold" dir="rtl">{{ product.nameAr }}</h4>
                  <p class="text-white/50 text-[10px] font-heading tracking-wider uppercase">{{ product.nameEn }}</p>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}
.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 600px;
}
</style>

<script setup>
import { ShieldCheck, Truck, Award, HeadphonesIcon } from '@lucide/vue'

const features = [
  {
    icon: ShieldCheck,
    titleAr: 'جودة مضمونة',
    titleEn: 'Guaranteed Quality',
    descAr: 'جميع منتجاتنا أصلية 100% من أفضل العلامات العالمية',
    descEn: 'All products are 100% genuine from top global brands',
  },
  {
    icon: Truck,
    titleAr: 'توصيل سريع',
    titleEn: 'Fast Delivery',
    descAr: 'خدمة توصيل سريعة وآمنة لجميع مناطق المملكة',
    descEn: 'Fast and secure delivery across all regions',
  },
  {
    icon: Award,
    titleAr: 'خبرة واسعة',
    titleEn: 'Years of Expertise',
    descAr: 'خبرة طويلة في مجال المواد الصحية والانشائية',
    descEn: 'Extensive experience in sanitary & construction materials',
  },
  {
    icon: HeadphonesIcon,
    titleAr: 'دعم فني متواصل',
    titleEn: 'Ongoing Support',
    descAr: 'فريق متخصص لتقديم الاستشارات والدعم الفني',
    descEn: 'Specialized team for consultation and technical support',
  },
]
</script>

<template>
  <section class="py-20 px-6 bg-bg-dark">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-14">
        <p class="font-heading text-primary text-xs tracking-[0.3em] uppercase mb-2">Why Us</p>
        <h2 class="font-arabic text-white text-3xl sm:text-4xl font-bold mb-3" dir="rtl">لماذا شراع اسيا</h2>
        <p class="text-text-muted text-sm max-w-lg mx-auto">
          What sets us apart in the sanitary and construction materials industry.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="feature in features" :key="feature.titleEn"
             class="p-6 bg-surface-dark border border-white/5 rounded-card text-center hover:border-primary/30 transition-all duration-200 group">
          <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-200">
            <component :is="feature.icon" :size="24" class="text-primary" />
          </div>
          <h3 class="font-arabic text-white text-lg font-bold mb-2" dir="rtl">{{ feature.titleAr }}</h3>
          <p class="font-arabic text-text-muted text-sm leading-relaxed" dir="rtl">{{ feature.descAr }}</p>
          <p class="text-text-muted/50 text-xs mt-2">{{ feature.titleEn }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

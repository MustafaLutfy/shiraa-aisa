<script setup>
import { Phone, Mail, MapPin, Clock } from '@lucide/vue'
</script>

<template>
  <footer class="bg-brand-black border-t border-white/10">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="flex items-end gap-[3px]">
              <div class="w-[8px] h-[20px] bg-primary rounded-[2px] -skew-x-[8deg]"></div>
              <div class="w-[8px] h-[26px] bg-primary-dark rounded-[2px] -skew-x-[8deg]"></div>
              <div class="w-[8px] h-[32px] bg-primary rounded-[2px] -skew-x-[8deg]"></div>
            </div>
            <div class="leading-tight">
              <div class="font-arabic text-white text-sm font-bold" dir="rtl">شراع اسيا</div>
              <div class="font-heading text-text-muted text-[10px] font-semibold tracking-widest">SHIRAA ASIA</div>
            </div>
          </div>
          <p class="font-arabic text-text-muted text-sm leading-relaxed" dir="rtl">
            لتجارة المواد الصحية والانشائية
          </p>
          <p class="text-text-muted text-xs mt-1 font-body">
            Trading in Sanitary &amp; Construction Materials
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-arabic text-white text-base font-bold mb-4" dir="rtl">روابط سريعة</h4>
          <div class="flex flex-col gap-2">
            <router-link to="/" class="font-arabic text-text-muted hover:text-white text-sm transition-colors duration-200 cursor-pointer" dir="rtl">الرئيسية</router-link>
            <router-link to="/showroom" class="font-arabic text-text-muted hover:text-white text-sm transition-colors duration-200 cursor-pointer" dir="rtl">المعرض</router-link>
            <router-link to="/products" class="font-arabic text-text-muted hover:text-white text-sm transition-colors duration-200 cursor-pointer" dir="rtl">المنتجات</router-link>
            <router-link to="/contact" class="font-arabic text-text-muted hover:text-white text-sm transition-colors duration-200 cursor-pointer" dir="rtl">تواصل معنا</router-link>
          </div>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-arabic text-white text-base font-bold mb-4" dir="rtl">معلومات التواصل</h4>
          <div class="flex flex-col gap-3">
            <a href="tel:+9647750880066" class="flex items-center gap-3 text-text-muted hover:text-white text-sm transition-colors duration-200 cursor-pointer" dir="rtl">
              <Phone :size="16" class="shrink-0 text-primary" />
              <span>٠٧٧٥٠٨٨٠٠٦٦</span>
            </a>
            <a href="tel:+9647888235599" class="flex items-center gap-3 text-text-muted hover:text-white text-sm transition-colors duration-200 cursor-pointer" dir="rtl">
              <Phone :size="16" class="shrink-0 text-primary" />
              <span>٠٧٨٨٨٢٣٥٥٩٩</span>
            </a>
            <a href="mailto:shiraaasia@gmail.com" class="flex items-center gap-3 text-text-muted hover:text-white text-sm transition-colors duration-200 cursor-pointer" dir="rtl">
              <Mail :size="16" class="shrink-0 text-primary" />
              <span>shiraaasia@gmail.com</span>
            </a>
            <div class="flex items-start gap-3 text-text-muted text-sm" dir="rtl">
              <MapPin :size="16" class="shrink-0 text-primary mt-0.5" />
              <span class="font-arabic">شارع الجمعيات الفلاحية، بغداد، العراق</span>
            </div>
          </div>
        </div>

        <!-- Hours -->
        <div>
          <h4 class="font-arabic text-white text-base font-bold mb-4" dir="rtl">ساعات العمل</h4>
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-3 text-text-muted text-sm" dir="rtl">
              <Clock :size="16" class="shrink-0 text-primary" />
              <div class="font-arabic">
                <div>السبت - الخميس: ٩ ص - ١٠ م</div>
                <div>الجمعة: مغلق</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-text-muted text-xs">
          &copy; {{ new Date().getFullYear() }} SHIRAA ASIA. All rights reserved.
        </p>
        <p class="font-arabic text-text-muted text-xs" dir="rtl">
          جميع الحقوق محفوظة &copy; شراع اسيا {{ new Date().getFullYear() }}
        </p>
      </div>
    </div>
  </footer>
</template>

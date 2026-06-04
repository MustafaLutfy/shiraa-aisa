<script setup>
import { Phone, Mail, MapPin, Clock, MessageCircle } from '@lucide/vue'
</script>

<template>
  <main class="pt-24 pb-20">
    <!-- Page Header -->
    <section class="py-16 px-6 bg-bg-dark">
      <div class="max-w-7xl mx-auto text-center">
        <p class="font-heading text-primary text-xs tracking-[0.3em] uppercase mb-2">Get in Touch</p>
        <h1 class="font-arabic text-white text-4xl sm:text-5xl font-bold mb-4" dir="rtl">تواصل معنا</h1>
        <p class="text-text-muted text-base max-w-xl mx-auto" dir="rtl">
          نسعد بتواصلكم معنا. زوروا معرضنا أو تواصلوا لمناقشة احتياجات مشروعكم
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="px-6 bg-bg-dark pb-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- Map -->
          <div class="relative overflow-hidden rounded-card h-[500px] bg-surface-dark border border-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8!2d44.4551752!3d33.3011926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE4JzA0LjMiTiA0NMKwMjcnMTguNiJF!5e0!3m2!1sar!2siq!4v1"
              width="100%"
              height="100%"
              style="border:0; filter: invert(90%) hue-rotate(180deg) grayscale(20%);"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="موقع شراع اسيا">
            </iframe>
          </div>

          <!-- Contact Info -->
          <div class="flex flex-col gap-6">
            <!-- WhatsApp CTA -->
            <a href="https://wa.me/9647750880066"
               target="_blank"
               rel="noopener"
               class="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-arabic font-bold text-base px-8 py-4 rounded-btn transition-all duration-200 cursor-pointer hover:shadow-lg">
              <MessageCircle :size="22" />
              تواصل عبر واتساب
            </a>

            <!-- Contact Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              <!-- Phone 1 -->
              <a href="tel:+9647750880066"
                 class="flex items-start gap-4 p-5 bg-surface-dark border border-white/5 rounded-card hover:border-primary/30 transition-all duration-200 cursor-pointer group">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone :size="18" class="text-primary" />
                </div>
                <div>
                  <p class="font-arabic text-white text-sm font-semibold mb-1" dir="rtl">الهاتف</p>
                  <p class="text-text-muted text-xs" dir="ltr">٠٧٧٥٠٨٨٠٠٦٦</p>
                </div>
              </a>

              <!-- Phone 2 -->
              <a href="tel:+9647888235599"
                 class="flex items-start gap-4 p-5 bg-surface-dark border border-white/5 rounded-card hover:border-primary/30 transition-all duration-200 cursor-pointer group">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone :size="18" class="text-primary" />
                </div>
                <div>
                  <p class="font-arabic text-white text-sm font-semibold mb-1" dir="rtl">الهاتف</p>
                  <p class="text-text-muted text-xs" dir="ltr">٠٧٨٨٨٢٣٥٥٩٩</p>
                </div>
              </a>

              <!-- Email -->
              <a href="mailto:shiraaasia@gmail.com"
                 class="flex items-start gap-4 p-5 bg-surface-dark border border-white/5 rounded-card hover:border-primary/30 transition-all duration-200 cursor-pointer group">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail :size="18" class="text-primary" />
                </div>
                <div>
                  <p class="font-arabic text-white text-sm font-semibold mb-1" dir="rtl">البريد الإلكتروني</p>
                  <p class="text-text-muted text-xs" dir="ltr">shiraaasia@gmail.com</p>
                </div>
              </a>

              <!-- Address -->
              <div class="flex items-start gap-4 p-5 bg-surface-dark border border-white/5 rounded-card">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin :size="18" class="text-primary" />
                </div>
                <div>
                  <p class="font-arabic text-white text-sm font-semibold mb-1" dir="rtl">العنوان</p>
                  <p class="font-arabic text-text-muted text-xs" dir="rtl">العراق - بغداد - كمب سارة - شارع الجمعية الفلاحية</p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-start gap-4 p-5 bg-surface-dark border border-white/5 rounded-card sm:col-span-2">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock :size="18" class="text-primary" />
                </div>
                <div>
                  <p class="font-arabic text-white text-sm font-semibold mb-1" dir="rtl">ساعات العمل</p>
                  <p class="font-arabic text-text-muted text-xs" dir="rtl">السبت - الخميس: ٩ ص - ١٠ م</p>
                  <p class="font-arabic text-text-muted text-xs" dir="rtl">الجمعة: مغلق</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

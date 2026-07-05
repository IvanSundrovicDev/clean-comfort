<script setup>
const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
];

const selectedImageIndex = ref(null);
const touchStartX = ref(0);
const touchEndX = ref(0);

const selectedImage = computed(() => {
  if (selectedImageIndex.value === null) {
    return null;
  }

  return images[selectedImageIndex.value];
});

const openImage = (image) => {
  selectedImageIndex.value = images.indexOf(image);
};

const closeImage = () => {
  selectedImageIndex.value = null;
};

const showNextImage = () => {
  if (selectedImageIndex.value === null) {
    return;
  }

  selectedImageIndex.value = (selectedImageIndex.value + 1) % images.length;
};

const showPreviousImage = () => {
  if (selectedImageIndex.value === null) {
    return;
  }

  selectedImageIndex.value =
    (selectedImageIndex.value - 1 + images.length) % images.length;
};

const onTouchStart = (event) => {
  touchStartX.value = event.changedTouches[0].clientX;
};

const onTouchEnd = (event) => {
  touchEndX.value = event.changedTouches[0].clientX;
  const swipeDistance = touchStartX.value - touchEndX.value;

  if (Math.abs(swipeDistance) < 50) {
    return;
  }

  if (swipeDistance > 0) {
    showNextImage();
  } else {
    showPreviousImage();
  }
};

const onKeydown = (event) => {
  if (event.key === "Escape") {
    closeImage();
  }

  if (event.key === "ArrowRight") {
    showNextImage();
  }

  if (event.key === "ArrowLeft") {
    showPreviousImage();
  }
};

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <section id="galerija" class="pt-14 sm:pt-20 pb-16 sm:pb-24">
    <div class="section">
      <div class="text-center mb-14 sm:mb-20 mt-6 sm:mt-8">
        <p
          class="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Naši radovi
        </p>
        <h2
          class="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white"
        >
          Rezultati
          <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary"
          >
            profesionalnog čišćenja
          </span>
        </h2>
        <p
          class="text-zinc-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg"
        >
          Pogledajte dio naših projekata i uvjerite se u kvalitetu, detaljnost i
          završni dojam svake usluge
        </p>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 mt-10 sm:mt-16"
      >
        <img
          v-for="image in images"
          :key="image"
          :src="image"
          alt="Galerija čišćenja"
          loading="lazy"
          class="aspect-square object-cover rounded-2xl hover:scale-105 transition cursor-pointer"
          @click="openImage(image)"
        />
      </div>

      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedImage"
          class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 md:p-8"
          @click="closeImage"
        >
          <button
            type="button"
            class="absolute top-4 right-4 md:top-6 md:right-6 text-white text-sm uppercase tracking-widest border border-white/40 px-4 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer"
            @click.stop="closeImage"
          >
            Zatvori
          </button>

          <button
            type="button"
            class="absolute left-4 top-1/2 -translate-y-1/2 md:left-6 text-white text-2xl border border-white/40 w-11 h-11 rounded-full hover:bg-white hover:text-black transition cursor-pointer"
            aria-label="Prethodna slika"
            @click.stop="showPreviousImage"
          >
            ‹
          </button>

          <button
            type="button"
            class="absolute right-4 top-1/2 -translate-y-1/2 md:right-6 text-white text-2xl border border-white/40 w-11 h-11 rounded-full hover:bg-white hover:text-black transition cursor-pointer"
            aria-label="Sljedeća slika"
            @click.stop="showNextImage"
          >
            ›
          </button>

          <div
            class="w-full h-full flex items-center justify-center"
            @click.stop
            @touchstart="onTouchStart"
            @touchend="onTouchEnd"
          >
            <Transition
              mode="out-in"
              enter-active-class="transition-opacity duration-300 ease-out"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="transition-opacity duration-200 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <img
                :key="selectedImage"
                :src="selectedImage"
                alt="Povećana fotografija čišćenja"
                class="max-w-full max-h-full object-contain rounded-xl"
              />
            </Transition>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>
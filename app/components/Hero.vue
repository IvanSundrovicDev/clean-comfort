<template>
  <section class="pt-20 sm:pt-24 overflow-hidden">
    <div class="hero-bg grid lg:grid-cols-10 gap-16 items-center">
      <div
        class="bg-black-fade-to-right pt-8 sm:pt-12 pb-14 sm:pb-24 lg:col-span-6 px-4 sm:px-10 lg:pl-12 lg:pr-20"
      >
        <h1
          class="font-heading text-3xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight lg:leading-18 xl:leading-20 uppercase"
        >
          Profesionalno čišćenje za vaš
          <span class="text-primary">čist i zdrav prostor</span>
        </h1>

        <p class="mt-6 sm:mt-8 text-zinc-400 text-base sm:text-lg max-w-xl">
          Nudimo vrhunske usluge čišćenja stanova, kuća, poslovnih prostora i
          apartmana. Vaš prostor ostavljamo besprijekorno čistim i svježim.
        </p>

        <div class="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
          <a
            href="#kontakt"
            class="inline-flex items-center justify-center w-full sm:w-48 purple-gradient px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium"
          >
            Zatraži ponudu
          </a>

          <a
            href="tel:+385915019961"
            class="inline-flex items-center justify-center w-full sm:w-48 border border-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base hover:border-primary bg-black/60 hover:bg-black"
          >
            Nazovi odmah
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-bg {
  background-image: url("/images/hero.png");
  background-size: cover;
  background-position: center;
}

@media (width >= 64rem) {
  .bg-black-fade-to-right {
    background: linear-gradient(
      to right,
      transparent,
      0%,
      black,
      95%,
      transparent
    );
  }
}

@media (width < 64rem) {
  .bg-black-fade-to-right {
    background: rgb(0 0 0 / 75%);
  }
}
</style>
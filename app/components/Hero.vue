<template>
  <section
    class="pt-24 overflow-hidden"
  >
    <div class="hero-bg grid lg:grid-cols-10 gap-16 items-center">
      <div class="bg-black-fade-to-right pt-12 pb-24 col-span-6 pl-12 pr-20">
        <h1
          class="font-heading text-5xl md:text-6xl xl:text-7xl leading-16 lg:leading-18 xl:leading-20 uppercase"
        >
          Profesionalno čišćenje za vaš
          <span class="text-primary">čist i zdrav prostor</span>
        </h1>

        <p class="mt-8 text-zinc-400 text-lg max-w-xl">
          Nudimo vrhunske usluge čišćenja stanova, kuća, poslovnih prostora i
          apartmana. Vaš prostor ostavljamo besprijekorno čistim i svježim.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <a
            href="#kontakt"
            class="inline-flex items-center justify-center w-48 purple-gradient px-8 py-4 rounded-xl font-medium"
          >
            Zatraži ponudu
          </a>

          <a
            href="tel:+385915019961"
            class="inline-flex items-center justify-center w-48 border border-white/10 px-8 py-4 rounded-xl hover:border-primary bg-black/60 hover:bg-black"
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
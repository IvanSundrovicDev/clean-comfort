<script setup lang="ts">
const services = [
  {
    title: "Čišćenje privatnih prostora",
    description:
      "Profesionalno čišćenje stanova, kuća i apartmana uz pažnju na svaki detalj. Vaš dom ostaje čist, uredan i ugodan za boravak.",
    icon: "/images/house.svg",
  },
  {
    title: "Čišćenje poslovnih prostora",
    description:
      "Održavanje uredskih i poslovnih prostora za uredno i higijenski čisto radno okruženje. Prilagođavamo uslugu vašim potrebama i rasporedu.",
    icon: "/images/building.svg",
  },
  {
    title: "Čišćenje stubišta i zajedničkih prostora",
    description:
      "Održavanje stubišta i zajedničkih prostora zgrada, uključujući čišćenje stepeništa, hodnika i ostalih zajedničkih prostora.",
    icon: "/images/stairs.svg",
  },
  {
    title: "Čišćenje vikendica i okućnica",
    description:
      "Čišćenje i priprema vikendica, terasa, dvorišta i okućnica kako bi vaš prostor bio uredan i spreman za korištenje.",
    icon: "/images/cottage.svg",
  },
  {
    title: "Pranje prozora i tapeciranog namještaja",
    description:
      "Profesionalno pranje stakala, prozora i tapeciranog namještaja kako bi vaš prostor bio svjež i čist. Koristimo sigurne i učinkovite metode čišćenja.",
    icon: "/images/window.svg",
  },
];
</script>

<template>
  <section
    id="usluge"
    class="relative pt-14 sm:pt-20 pb-20 sm:pb-32 -mb-10 sm:-mb-16 bg-[radial-gradient(120%_90%_at_15%_20%,rgba(123,44,191,0.22)_0%,rgba(0,0,0,0)_60%),linear-gradient(180deg,#06070b_0%,#090811_70%,rgba(9,8,17,0)_100%)]"
  >
    <div class="section">
      <div class="text-center mb-14 sm:mb-20 mt-6 sm:mt-8">
        <p
          class="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Naše rješenja
        </p>
        <h2
          class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
        >
          Profesionalne
          <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary"
          >
            usluge čišćenja
          </span>
        </h2>
        <p
          class="text-zinc-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg"
        >
          Prilagođena rješenja za sve vrste prostora — od privatnih domova do
          poslovnih centara
        </p>
      </div>

      <div
        class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 mt-10 sm:mt-14"
      >
        <article
          v-for="service in services"
          :key="service.title"
          class="card card-background py-6 sm:py-8 px-3 sm:px-2 flex flex-col items-center text-center"
        >
          <img
            :src="service.icon"
            :alt="service.title"
            class="w-12 h-12 mb-4"
          />
          <h3 class="text-lg sm:text-xl font-semibold">
            {{ service.title }}
          </h3>

          <p class="text-zinc-400 text-sm mt-4 mb-4 mx-4">
            {{ service.description }}
          </p>

          <a
            href="#kontakt"
            class="mt-auto text-sm text-primary hover:text-secondary uppercase"
            >Želim ponudu →</a
          >
        </article>
      </div>
    </div>
  </section>
</template>
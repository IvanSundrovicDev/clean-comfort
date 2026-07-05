<script setup>
const reviews = [
  {
    name: "Ana M.",
    text: "Izvrsna usluga i profesionalan pristup.",
  },
  {
    name: "Marko P.",
    text: "Prostor nikada nije bio čišći.",
  },
  {
    name: "Ivana K.",
    text: "Brzo, kvalitetno i pouzdano.",
  },
];
</script>

<template>
  <section
    id="recenzije"
    class="relative pt-14 sm:pt-20 pb-20 sm:pb-32 -mb-10 sm:-mb-16 bg-[radial-gradient(120%_90%_at_85%_20%,rgba(123,44,191,0.22)_0%,rgba(0,0,0,0)_60%),linear-gradient(180deg,#06070b_0%,#090811_70%,rgba(9,8,17,0)_100%)]"
  >
    <div class="section">
      <div class="text-center mb-14 sm:mb-20 mt-6 sm:mt-8">
        <p
          class="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Iskustva klijenata
        </p>
        <h2
          class="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white"
        >
          Mišljenja naših
          <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary"
          >
            zadovoljnih klijenata
          </span>
        </h2>
        <p
          class="text-zinc-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg"
        >
          Povjerenje naših klijenata najbolja je potvrda kvalitete, pouzdanosti
          i profesionalnosti naše usluge
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-16">
        <div
          v-for="review in reviews"
          :key="review.name"
          class="card p-6 sm:p-8"
        >
          <div class="text-primary text-2xl">★★★★★</div>

          <p class="mt-4 text-zinc-400">
            {{ review.text }}
          </p>

          <p class="mt-6 font-semibold">
            {{ review.name }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
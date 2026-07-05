<template>
  <footer class="border-t border-white/10 pt-20 pb-10">
    <div class="section grid lg:grid-cols-3 gap-12">
      <div>
        <img src="/images/logo.png" alt="Clean Comfort" class="h-20" />

        <p class="text-zinc-400 mt-6">
          Profesionalne usluge čišćenja za domove, apartmane i poslovne
          prostore.
        </p>
      </div>

      <div>
        <h3 class="font-semibold text-xl">Kontakt</h3>

        <div class="mt-6 space-y-4 text-zinc-300">
          <div>
            <p class="text-zinc-500">Telefon</p>
            <a href="tel:+385915019961">+385 91 501 9961</a>
          </div>

          <div>
            <p class="text-zinc-500">Email</p>
            <a href="mailto:clean.comfort@gmail.com">clean.comfort@gmail.com</a>
          </div>

          <div>
            <p class="text-zinc-500">Adresa</p>
            <p>Kralja Tomislava 35, Donji Miholjac</p>
          </div>

          <div>
            <p class="text-zinc-500">Radno Vrijeme</p>
            <p>Pon - Pet: 07:00 - 15:00</p>
          </div>
        </div>
      </div>

      <div>
        <ClientOnly>
          <LeafletMap />
          <template #fallback>
            <div
              class="w-full h-[240px] rounded-2xl bg-black/30 border border-white/10"
            />
          </template>
        </ClientOnly>
      </div>
    </div>

    <div
      class="section mt-12 pt-8 border-t border-white/10 text-zinc-500 text-sm"
    >
      © {{ new Date().getFullYear() }}
      Clean Comfort. Sva prava pridržana.
    </div>
  </footer>
</template>
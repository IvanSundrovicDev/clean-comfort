<script setup>
const formData = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref("");

const submitForm = async (event) => {
  isSubmitting.value = true;
  submitSuccess.value = false;
  submitError.value = "";

  try {
    const formElement = event.target;
    const payload = new URLSearchParams(
      Array.from(new FormData(formElement).entries()).map(([key, value]) => [
        key,
        String(value),
      ])
    );

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
    });

    if (!response.ok) {
      throw new Error("Neuspješno slanje upita.");
    }

    formData.name = "";
    formData.email = "";
    formData.phone = "";
    formData.message = "";
    submitSuccess.value = true;
  } catch {
    submitError.value = "Došlo je do greške. Pokušajte ponovno.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="kontakt" class="pt-32 pb-24">
    <div class="section grid lg:grid-cols-2 gap-10">
      <div class="card p-10">
        <div class="text-left mb-12">
          <p
            class="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Javite nam se
          </p>
          <h2
            class="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold text-white"
          >
            Kontakt
            <br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary"
            >
              i podrška
            </span>
          </h2>
          <p class="text-zinc-400 mt-6 max-w-2xl text-base sm:text-lg">
            Pošaljite upit ili nas kontaktirajte direktno, odgovaramo brzo i
            prilagođavamo uslugu vašim potrebama!
          </p>
        </div>

        <div class="mt-8 space-y-5">
          <div class="flex items-center gap-4">
            <img src="/images/phone.svg" alt="Telefon" class="mt-1 w-6 h-6" />

            <div>
              <p class="text-zinc-500">Telefon</p>

              <a href="tel:+385915019961" class="text-sm sm:text-base">
                +385 91 501 9961
              </a>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <img src="/images/mail.svg" alt="Email" class="mt-1 w-6 h-6" />

            <div>
              <p class="text-zinc-500">Email</p>

              <a
                href="mailto:clean.comfort@gmail.com"
                class="text-sm sm:text-base"
              >
                clean.comfort@gmail.com
              </a>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <img src="/images/pin.svg" alt="Adresa" class="mt-1 w-6 h-6" />

            <div>
              <p class="text-zinc-500">Adresa</p>

              <p class="text-sm sm:text-base">
                Kralja Tomislava 35, Donji Miholjac
              </p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <img
              src="/images/clock.svg"
              alt="Radno vrijeme"
              class="mt-1 w-6 h-6"
            />

            <div>
              <p class="text-zinc-500">Radno Vrijeme</p>

              <p class="text-sm sm:text-base">Pon - Pet: 07:00 - 15:00</p>
            </div>
          </div>
        </div>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        class="card p-10 h-full flex flex-col space-y-6"
        @submit.prevent="submitForm"
      >
        <input type="hidden" name="form-name" value="contact" />

        <input
          v-model="formData.name"
          name="name"
          placeholder="Ime i prezime"
          class="w-full bg-black border border-white/10 rounded-xl p-4 text-sm sm:text-base"
          required
        />

        <input
          v-model="formData.email"
          name="email"
          type="email"
          placeholder="Email"
          class="w-full bg-black border border-white/10 rounded-xl p-4 text-sm sm:text-base"
          required
        />

        <input
          v-model="formData.phone"
          name="phone"
          type="tel"
          placeholder="Broj telefona (opcionalno)"
          class="w-full bg-black border border-white/10 rounded-xl p-4 text-sm sm:text-base"
        />

        <textarea
          v-model="formData.message"
          name="message"
          rows="5"
          placeholder="Poruka"
          class="w-full bg-black border border-white/10 rounded-xl p-4 text-sm sm:text-base"
          required
        ></textarea>

        <div data-netlify-recaptcha="true"></div>

        <div class="mt-auto space-y-3">
          <button
            type="submit"
            class="purple-gradient px-8 py-4 rounded-xl text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? "Slanje..." : "Pošalji upit" }}
          </button>

          <p v-if="submitSuccess" class="text-green-400 text-sm">
            Upit je uspješno poslan. Hvala vam!
          </p>

          <p v-if="submitError" class="text-red-400 text-sm">
            {{ submitError }}
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
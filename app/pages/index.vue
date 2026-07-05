<script setup>
useSeoMeta({
  title:
    "Čišćenje stanova i poslovnih prostora | Donji Miholjac i okolica | Clean Comfort",

  description:
    "Profesionalno čišćenje stanova, kuća, apartmana i poslovnih prostora u Donjem Miholjcu, Valpovu, Belišću i okolici.",

  keywords:
    "čišćenje Donji Miholjac, čišćenje Valpovo, čišćenje Belišće, čišćenje apartmana, čišćenje poslovnih prostora",

  ogTitle: "Čišćenje stanova i poslovnih prostora | Donji Miholjac i okolica",

  ogDescription:
    "Pouzdane usluge čišćenja za domove, apartmane i poslovne prostore u Donjem Miholjcu i širem području.",

  ogType: "website",
  ogLocale: "hr_HR",
  ogUrl: "https://cleancomfort.hr/",
  ogImage: "https://cleancomfort.hr/images/logo.png",

  twitterCard: "summary_large_image",
  twitterTitle: "Clean Comfort | Čišćenje Donji Miholjac, Valpovo, Belišće",
  twitterDescription:
    "Profesionalno čišćenje stanova, kuća, apartmana i poslovnih prostora.",
  twitterImage: "https://cleancomfort.hr/images/logo.png",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://cleancomfort.hr/",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "https://cleancomfort.hr/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "https://cleancomfort.hr/favicon.svg",
    },
    {
      rel: "shortcut icon",
      href: "https://cleancomfort.hr/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "https://cleancomfort.hr/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "https://cleancomfort.hr/site.webmanifest",
    },
  ],

  meta: [
    {
      name: "apple-mobile-web-app-title",
      content: "Clean Comfort",
    },
  ],

  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CleaningService",
        "@id": "https://cleancomfort.hr/#cleaningservice",
        name: "Clean Comfort",
        url: "https://cleancomfort.hr/",
        image: "https://cleancomfort.hr/images/logo.png",
        priceRange: "$$",
        email: "clean.comfort@gmail.com",
        telephone: "+385915019961",
        areaServed: [
          "Donji Miholjac",
          "Valpovo",
          "Belišće",
          "Našice",
          "Osječko-baranjska županija",
        ],
        serviceArea: {
          "@type": "AdministrativeArea",
          name: "Osječko-baranjska županija",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 45.7565,
          longitude: 18.173111,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "15:00",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kralja Tomislava 35",
          addressLocality: "Donji Miholjac",
          postalCode: "31540",
          addressRegion: "Osječko-baranjska županija",
          addressCountry: "HR",
        },
      }),
    },
  ],
});
</script>

<template>
  <main>
    <Header />

    <FadeIn>
      <Hero />
    </FadeIn>

    <FadeIn>
      <Services />
    </FadeIn>

    <FadeIn>
      <Gallery />
    </FadeIn>

    <FadeIn>
      <Testimonials />
    </FadeIn>

    <FadeIn>
      <ContactSection />
    </FadeIn>

    <FadeIn>
      <Footer />
    </FadeIn>
  </main>
</template>
<script setup lang="ts">
import L from "leaflet";

const mapRef = ref<HTMLElement | null>(null);
let mapInstance: L.Map | null = null;

const center: L.LatLngExpression = [45.7565, 18.173111];
const customMarkerIcon = L.icon({
  iconRetinaUrl: "/images/leaflet/marker-icon-2x.png",
  iconUrl: "/images/leaflet/marker-icon.png",
  shadowUrl: "/images/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

onMounted(() => {
  if (!mapRef.value) {
    return;
  }

  mapInstance = L.map(mapRef.value, {
    center,
    zoom: 15,
    scrollWheelZoom: false,
  });

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 19,
      subdomains: "abcd",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }
  ).addTo(mapInstance);

  L.marker(center)
    .setIcon(customMarkerIcon)
    .addTo(mapInstance)
    .bindPopup(
      "<strong>Clean Comfort</strong><br>Kralja Tomislava 35, Donji Miholjac"
    );
});

onUnmounted(() => {
  mapInstance?.remove();
  mapInstance = null;
});
</script>

<template>
  <div
    ref="mapRef"
    class="w-full h-[240px] rounded-2xl overflow-hidden"
    aria-label="Lokacija na karti"
  />
</template>
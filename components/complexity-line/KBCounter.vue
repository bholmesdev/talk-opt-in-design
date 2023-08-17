<template>
  <p class="text-gray-500"><span :class="color" class="transition-colors"><strong>{{ kbs }}</strong>kb</span> client JS
  </p>
</template>

<script setup>
import { computed, ref } from 'vue';

const kbCounts = [0, 66, 76, 80, 80];
const colors = ["text-green-500", "text-yellow-500", "text-orange-500", "text-red-500", "text-red-500"];

const kbs = computed(() => kbCounts[$slidev.nav.clicks]);
const color = computed(() => colors[$slidev.nav.clicks]);

// const interval = setInterval(() => {
//   const target = kbCounts[$slidev.nav.clicks];
//   if (kbs.value === target) return clearInterval(interval);

//   kbs.value++;
// }, 20);

</script>
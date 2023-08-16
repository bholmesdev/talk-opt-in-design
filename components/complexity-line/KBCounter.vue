<template>
  <p :class="color" class="transition-colors"><strong>{{ kbs }}</strong>kb</p>
</template>

<script setup>
import { computed, ref } from 'vue';

const kbCounts = [0, 56, 66, 70, 70];
const colors = ["text-green-500", "text-green-500", "text-yellow-500", "text-orange-500", "text-orange-500"];

const kbs = computed(() => kbCounts[$slidev.nav.clicks]);
const color = computed(() => colors[$slidev.nav.clicks]);

// const interval = setInterval(() => {
//   const target = kbCounts[$slidev.nav.clicks];
//   if (kbs.value === target) return clearInterval(interval);

//   kbs.value++;
// }, 20);

</script>
<template>
  <div :style="`--y: ${y}`" class="bg-gray-800 w-2 h-[300px] rounded-lg transition-colors">
    <div :class="color" class="line w-2 rounded-lg"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const ys = [200, 300, 400];
const colors = ["bg-green-300", "bg-green-300", "bg-yellow-300", "bg-orange-300", "bg-orange-300"];
const color = computed(() => colors[$slidev.nav.clicks]);
const y = computed(() => 25 * $slidev.nav.clicks);
</script>

<style>
.line {
  height: calc(var(--y) * 1%);
  transition: height 0.2s;
}
</style>
<template>
  <div :style="`--y: ${y}`" class="bg-gray-800 w-2 h-[300px] rounded-lg transition-colors">
    <div :class="color" class="line w-2 rounded-lg"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  percent: number,
  colors: string[],
}>();

const color = computed(() => props.colors[$slidev.nav.clicks]);
const y = computed(() => props.percent * $slidev.nav.clicks);
</script>

<style>
.line {
  height: calc(var(--y) * 1%);
  transition: height 0.2s;
}
</style>
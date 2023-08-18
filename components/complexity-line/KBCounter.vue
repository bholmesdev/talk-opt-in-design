<template>
  <p class="text-gray-500"><span :class="color" class="transition-colors"><strong>{{ kbs }}</strong>kb</span> client JS
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  counts: number[],
  colors: string[],
}>();

const kbs = computed(() => props.counts[$slidev.nav.clicks]);
const color = computed(() => props.colors[$slidev.nav.clicks]);
</script>
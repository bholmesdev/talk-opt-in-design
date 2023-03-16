<script setup lang="ts">
  defineProps<{
    x: number | string
    y: number | string
    r: number | string
    color?: string
  }>()
</script>

<template>
  <svg
    class="absolute inset-0 pointer-events-none" 
    :width="x + 50"
    :height="y + 50">
    <circle :fill="color || 'currentColor'" :cx="+x" :cy="+y" :r="+r" />
  </svg>
</template>
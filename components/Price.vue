<template>
  <button @click="quantity += 1">
    <strong>{{ price }}</strong>
    <span>- {{ quantity }}</span>
  </button>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const quantity = ref(1);
    const unformattedPrice = computed(() => quantity.value * 399);
    const price = computed(() => (unformattedPrice.value / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    }));

    return { quantity, price };
  }
}
</script>

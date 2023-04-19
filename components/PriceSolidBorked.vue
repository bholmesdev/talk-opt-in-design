<template>
  <p>{{ image }}</p>
  <button @click="quantity += 1">
    <strong>{{ price }}</strong>
    <span> - {{ quantity }}</span>
  </button>
  <p class="text-sm italic">{{ shipping }}</p>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const quantity = ref(1);
    const shipping = ref('Loading...');
    const image = ref('🔁');
    const unformattedPrice = computed(() => quantity.value * 399);
    const price = (unformattedPrice.value / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    setTimeout(() => {
      shipping.value = 'Does not ship to countries outside the US.';
    }, 1000);

    setTimeout(() => {
      image.value = '🖼';
    }, 1000);

    return { quantity, price, shipping, image };
  }
}
</script>

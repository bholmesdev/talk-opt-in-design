<template>
  <p>{{ image }}</p>
  <button @click="quantity += 1">
    <strong>{{ price }}</strong>
    <span> - {{ quantity }}</span>
  </button>
  <p class="text-sm italic">{{ shipping }}</p>
</template>

<script>
import { ref, computed, effect } from 'vue';

export default {
  setup() {
    const quantity = ref(1);
    const shipping = ref('Loading...');
    const shippingTimeout = ref(undefined);
    const image = ref('🔁');
    const imageTimeout = ref(undefined);

    const unformattedPrice = computed(() => quantity.value * 399);
    const price = computed(() => (unformattedPrice.value / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    }));
    effect(() => {
      quantity.value;
      if (shippingTimeout.value) clearTimeout(shippingTimeout.value);
      if (imageTimeout.value) clearTimeout(imageTimeout.value);

      shipping.value = 'Loading...';
      shippingTimeout.value = setTimeout(() => {
        shipping.value = 'Does not ship to countries outside the US.';
      }, 1000);

      image.value = '🔁';
      imageTimeout.value = setTimeout(() => {
        image.value = '🖼';
      }, 1000);
    });
    return { quantity, price, shipping, image };
  }
}
</script>

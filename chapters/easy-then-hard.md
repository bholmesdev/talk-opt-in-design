---
transition: fade
---

# Easy, then hard

<div grid="~ cols-2 gap-4">

<div>

Recalculating is easy when everything reruns...

</div>

<div>

```tsx {all|7|1,2|3|5-9}
function ShoppingCart() {
  const [quantity, setQuantity] = useState(0);
  const calculatedPrice = calculatePrice(quantity);

  return (
    <Cart quantity={quantity}>
      <TextInput onInput={setQuantity} />
    </Cart>
  )
}
```

<arrow v-if="$slidev.nav.clicks === 2" x1=660 x2=620 y1=320 y2=250 width=2 color=red />

</div>
</div>

---
clicks: 2
---

# Easy, then hard

<div grid="~ cols-2 gap-4">

<div>

Recalculating is easy when everything reruns...

<v-clicks at=0>

- But what if `quantity` comes from here?
- ...or here?
- ...or here?

</v-clicks>

</div>

<div>

```tsx {1,7,10|1,5,11|1,4,14} {at: 0}
function ShoppingCart({ quantity }) {
...

<ProviderProvider>
  <CartProvider>
    <NavigationBar />
    <QuantityProvider>
      <ShoppingCart />
      <ProductImages />
    </QuantityProvider>
  </CartProvider>
  <Footer />
  <LegalText />
</ProviderProvider>

```

</div>
</div>

---

# Memo' state memo' problems

<div grid="~ cols-2 gap-4">

<div>

Call `useMemo()` to avoid re-renders

</div>

<div>

```tsx {all|7,8|9,10} {at:0}
import { useState, useMemo } from 'react';

function ShoppingCart() {
  const [qty, setQty] = useState(0);
  const price = calculatePrice(qty);
  
  ❌ const productImages = fetchImages('[product]');
  ❌ const shippingText = fetchShipping('[product]');
  ✅ const productImages = useMemo(() => fetchImages('[product]'));
  ✅ const shippingText = useMemo(() => fetchShipping('[product]'));

  return (
    <>
      <ProductImages images={productImages} />
      <button onClick={() => setQuantity(qty)}>{qty}</button>
      <p>{price}</p>
      <p>{shippingText}</p>
    </>
  )
}
```

</div>
</div>
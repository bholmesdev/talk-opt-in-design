---
transition: fade
---

# Easy, then hard

<div grid="~ cols-2 gap-4">

<div>

Recalculating is easy when everything reruns...

</div>

<div>

```tsx {all|2-3|7,2|3}
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

```tsx {1,6-8|1,5,7,9|1,4,7,10} {at: 0}
function ShoppingCart({ quantity }) {
...

<ProviderProvider>
  <CartProvider>
    <QuantityProvider>
      <ShoppingCart />
    </QuantityProvider>
  </CartProvider>
</ProviderProvider>

```

</div>
</div>

---
transition: fade
---

# Easy, then hard

<div grid="~ cols-2 gap-4">

<div>

Recalculating is easy when everything reruns...

- But what if `quantity` comes from here?
- ...or here?
- ...or here?
- **time to break out a `memo` hammer** 😈

</div>

<div>

```tsx {2} {at: 0}
function ShoppingCart({ quantity }) {
  const price = useMemo(calculatePrice, [quantity]);

<ProviderProvider>
  <CartProvider>
    <QuantityProvider>
      <ShoppingCart />
    </QuantityProvider>
  </CartProvider>
</ProviderProvider>

```

</div>
</div>
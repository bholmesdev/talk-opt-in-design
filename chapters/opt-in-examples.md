# Opt-in design principles

<v-clicks>

1. Find the lowest-common-denominator.
2. Make complexity easy to add, **when intended.**
3. Stay **user-first,** not developer-first.

</v-clicks>

---

# 1. Find the lowest-common-denominator.

- What's the **simplest use case** for your tool?
- Ex. Simplest React app just renders HTML with no state.
- No "here's a car with opt-in wheels"

---

# 2. Make complexity easy to add, **when intended.**

- Don't start with the kitchen sink and walk backwards
- Ex. Use a `$:` wrapper to trigger Svelte re-renders

---

# 3. Stay **user-first,** not developer-first.

- Low complexity baseline often means better UX
- Ex. Opt-in rerenders = fewer CPU cycles = better perf

---

# Whole world of examples

---
clicks: 3
---

# Deno brings opt-in to permissions

```json {all|4-7}
{
  "tasks": {
    "serve": "deno run
      --allow-net
      --allow-read
      --allow-run
      --allow-env
      server.dev.ts"
  }
}
```

<v-click at=2>

1. LCD? <strong v-click=3>✅ Simple CLI tool without I/O</strong>
2. Additive complexity? <strong v-click=3>✅ Flags that describe what's added</strong>
3. User-first? <strong v-click=3>✅ Minimizes security vulnerabilities</strong>

</v-click>

---
clicks: 4
---

# Server components bring opt-in to client-side JS

Case: **Astro 🚀**

```astro {all|5-6|2,7-8}
---
import LikeButton from '../components/LikeButton';
---

<!--⚡️ Static HTML, 0 JS-->
<h1>Welcome to static HTML!</h1>
<!--🏃‍♂️ Interactive like button, load JS when visible-->
<LikeButton client:visible />
```

<v-click at=3>

1. LCD? <strong v-click=4>✅ Static homepage with 0 JS</strong>
2. Additive complexity? <strong v-click=4>✅ `client:` directive flags JS</strong>
4. User-first? <strong v-click=4>✅ Maximize core web vitals</strong>

</v-click>

---
clicks: 5
---

# Server components bring opt-in to streaming

Case: **React Server Components ⚛️**

```jsx {all|7|9|8-10}
import { Suspense } from 'react';
import Albums from '../components/Albums';

export default function Page() {
  return (
    <>
      <h1>Discogs</h2>
      <Suspense fallback={<p>Loading albums...</p>}>
        <Albums />
      </Suspense>
    </>
  )
}
```

<v-click at=4>

1. LCD? <strong v-click=5>✅ Server render without spinners</strong>
2. Additive complexity? <strong v-click=5>✅ `Suspense` boundary</strong>
4. User-first? <strong v-click=5>✅ Minimize layout shift</strong>

</v-click>

---

# Has **this** happened to you? 🙋

<img src="/useeffect-explosion.gif" />

---

# Solid brings opt-in to reactivity

Let's compare **React** vs **Solid**

> A declarative JavaScript framework for building **fast UIs** with **max control over reactivity.**
>
> ~ _[Fireship, second best tech Youtuber](https://www.youtube.com/watch?v=hw3Bx5vxKl0)_

---
layout: default
clicks: 4
---

<div class="grid place-items-center h-100">
<div grid="~ cols-2 gap-4">
<div>

## React

```tsx {all|13,14,5,7-8|5,14|3,18} {at:0}
import { useState } from 'react';

function ShoppingCart() {
  const [qty, setQty] = useState(0);
  const price = calculatePrice(qty);
  
  const productImages = fetchImages('[product]');
  const shippingText = fetchShipping('[product]');

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

<PriceReact v-if="$slidev.nav.clicks === 1" />
<PriceReact v-if="$slidev.nav.clicks === 2" />

<v-click at=3>

**React:** Rerun where state is **declared.**

</v-click>

</div>
<div>

## Solid

```tsx {1-5,7-18|13,14,5,7-8|6,14|14} {at:0}
import { createSignal } from 'solid-js';

function ShoppingCart() {
  const [qty, setQty] = createSignal(0);
  ❌ const price = calculatePrice(qty);
  ✅ const price = () => calculatePrice(qty);
  const productImages = fetchImages('[product]');
  const shippingText = fetchShipping('[product]');

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

<PriceSolidBorked v-if="$slidev.nav.clicks === 1" />
<PriceSolid v-if="$slidev.nav.clicks === 2" />

<v-click at=3>

**Solid:** Rerun where state is **used.**

</v-click>

</div>
</div>
</div>

---

# Svelte and Vue do this too

Case: Svelte

Svelte uses a `$` to opt-in to interactivity

```svelte {2,3,7|2,4,7}
<script>
let quantity = 0;
❌ let price = calculatePrice(quantity);
✅ $: price = calculatePrice(quantity);
</script>

<Price>{price}</Price>
```

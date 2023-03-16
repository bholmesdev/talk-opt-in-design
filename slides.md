---
theme: default
highlighter: shiki
# use UnoCSS
css: unocss
defaults:
  layout: 'center'
fonts:
  sans: "Atkinson Hyperlegible"
  weights: "400,700"
---

# **Opt-in design**

A new era of web development

---
transition: zoom
class: "text-center text-gray-900"
style: |
  font-family: "Comic Sans MS";
  background: linear-gradient(45deg, red, orange, yellow, green, cyan, blue, violet, red);
---

# Not a **UI design talk** 🎨

Graphic design is my passion

---
transition: zoom
style: |
  background: url("https://images.unsplash.com/photo-1621537108694-3a8259512251");
  background-size: 100%;
---

<h1 class="bg-gray-500 px-5 py-3 rounded-lg shadow-xl">Not an <strong>architecture design</strong> talk 🏠</h1>

<!-- <img src="https://images.unsplash.com/photo-1621537108694-3a8259512251" class="absolute inset-0 opacity-20"> -->

---

# It's an **API design talk.** 🔨

<v-clicks>

- Learn what **good defaults** really mean
- Find _and_ build the best tools for everyone

</v-clicks>

---
layout: image-left
image: https://bholmes.dev/assets/me.jpg
---

# I'm Ben! 👋

- Core maintainer at **Astro.build**
- CEO of whiteboards [**wtw.dev**](https://wtw.dev) 👀
- Values: be caring, be clear, be casual

---

# **React devs** 🙋

---

# Has **this** happened to you? 🙋

[useEffect example]

---

# Have you Googled **this** before? 🙋

<img src=/use-memo.png class="w-140">

<arrow x1=200 y1=220 x2=330 y2=130 width=3 color=red />

---

# Principle: **re-render by default**

---
src: ./slides/easy-then-hard.md
---

---

# This is opt-out design

Example: React

<v-click>

**Assume** a goal, **lower** developer friction as much as possible to get there.

</v-click>

---

# Now, a comparison

---
layout: default
---

<div class="grid place-items-center h-100">
<div grid="~ cols-2 gap-4">
<div>

## React

```tsx {all|1,4} {at:1}
import { useState } from 'react';

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

</div>
<div>

## Solid

```tsx {all|1,4} {at:1}
import { createSignal } from 'solid-js';

function ShoppingCart() {
  const [quantity, setQuantity] = createSignal(0);
  const calculatedPrice = () => calculatePrice(quantity);

  return (
    <Cart quantity={quantity}>
      <TextInput onInput={setQuantity} />
    </Cart>
  )
}
```

</div>
</div>
</div>

---

# Inspiring an ecosystem

- Svelte is first ex I saw using a `$:` to opt-in to rendering
- Angular is adding singles to their core
- VueJS `refs` work like this in Vue 3

---

# From opt-out to opt-in

- Animate line from earlier to flip 180•

---

# Opt-in design principals

- Is user-oriented
  - Default is built for user experience, not developer
  - Better UX in the short term _and_ long-term
- Makes complexity **additive**
  - Don't start with the kitchen sink and walk backwards
  - Up-front complexity when adding features, with long-term DX payoffs
- Also makes sense _without_ the opt-in
  - Ex. A car with opt-in wheels doesn't work

---

# Whole world of examples

---

# Deno brings opt-in to permissions

---

# Astro brings opt-in to client-side JS

---

# React brings opt-in to loading states

---

Demo time?
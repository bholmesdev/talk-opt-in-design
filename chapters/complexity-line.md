# A classic: create-react-app

<div class="grid place-items-center h-100">
<div grid="~ cols-2 gap-4">
<div class="flex gap-16">

<div>
<Line />
<KBCounter />
</div>

<img v-if="$slidev.nav.clicks === 4" src="TODO fire dog" />

</div>

<div>
<v-clicks>

- 👋 Hello world <span class="text-gray-400">React, React DOM, react-router, styled-components</span>
- ✅ Signup form <span class="text-gray-400"> `event.preventDefault()`, formik validation</span>
- 🛒 Cart bubble <span class="text-gray-400"> React Context, client storage of server state</span>
- 👀 Performance audit

</v-clicks>
</div>
</div>
</div>

<style>
  ul {
    list-style: none;
  }
  li {
    margin: 0;
  }
</style>


---
transition: fade
---

# Opt-out pains: CRA

- Happy path: Have webpack managed for you
- **Opt-out** by "ejecting" 🏃‍♂️💨

---
transition: fade
---

# Opt-out pains: Styled Components

- Happy path: JS first, CSS second
- **Opt-out** by switching `$props` to CSS variables

---
transition: fade
---

# Opt-out pains: React Context

- Happy path: Store state high up, rerender on change
- Rerenders are expensive and easy to overdo!
- **Opt-out** with `useMemo()`

---

# Opt-out ethos

<v-clicks>

- **Assume** a goal, **lower** developer friction
- Bundle the best toolbox up-front
- ✅ Hide complexity
- 😈 ...But deal with **complexity monster** later

</v-clicks>

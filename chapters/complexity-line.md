# A classic: create-react-app

<div class="grid grid-cols-[10px_1fr_1fr] grid-rows-[1fr_1em] gap-4 items-center h-100">

<Line />

<div>
  <video class="rounded-lg" v-if="$slidev.nav.clicks === 4" autoplay loop playsinline src="/spa-what-do-you-mean.mov" />
</div>

<div>
<v-clicks>

- 👋 Hello world <span class="text-gray-400">React, React DOM, react-router, styled-components</span>
- ✅ Signup form <span class="text-gray-400"> `event.preventDefault()`, formik validation</span>
- 🛒 Cart bubble <span class="text-gray-400"> React Context, client storage of server state</span>
- 👀 Performance audit

</v-clicks>
</div>

<KBCounter class="col-span-full" />
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

# Opt-out pains: CRA

- Happy path: Have webpack managed for you
- **Opt-out** by "ejecting" 🏃‍♂️💨

---

# Opt-out pains: Styled Components

- Happy path: JS first, CSS second
- **Opt-out** by switching `$props` to CSS variables

---

# Opt-out pains: React Context

- Happy path: Store state high up, rerender on change
- Rerenders are expensive and easy to overdo!
- **Opt-out** with `useMemo()`

---

# Have you Googled **this** before? 🙋

<img src=/use-memo.png class="w-140" />

<arrow x1=200 y1=220 x2=330 y2=130 width=3 color=red />

---

# Opt-out ethos

<v-clicks>

- **Assume** a goal, **lower** developer friction
- Bundle the best toolbox up-front
- ✅ Hide complexity
- 😈 ...But deal with **complexity monster** later

</v-clicks>

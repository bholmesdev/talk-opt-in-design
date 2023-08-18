# A classic: create-react-app

<div class="grid grid-cols-[10px_1fr_1fr] grid-rows-[1fr_1em] gap-4 items-center h-100">

<Line :colors="['bg-green-300', 'bg-yellow-300', 'bg-orange-300', 'bg-red-300', 'bg-red-300']" :percent="25" />

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

<KBCounter :counts="[0, 66, 76, 80, 80]" :colors="['text-green-500', 'text-yellow-500', 'text-orange-500', 'text-red-500', 'text-red-500']" class="col-span-full" />
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

---

# Opt-out to opt-in: Astro

<div class="grid grid-cols-[10px_1fr_1fr] grid-rows-[1fr_1em] gap-4 items-center h-100">

<Line :colors="['bg-green-300', 'bg-green-300', 'bg-green-300', 'bg-yellow-300', 'bg-green-300', 'bg-green-300']" :percent="20" />

<div>
  <img class="rounded-lg max-h-35vh" v-if="$slidev.nav.clicks === 5" src="/html.png" />
</div>

<div>
<v-clicks>

- 👋 Hello world <span class="text-gray-400">Astro</span>
- ✅ Signup form <span class="text-gray-400"> Plain ole form `POST`, Zod validation</span>
- <span class="transition-opacity" :class="$slidev.nav.clicks >= 4 ? 'opacity-40' : ''"> 🛒 CSR Cart bubble <span class="text-gray-400"> `astro add react`, nanostores for global state</span></span>
- 🛒 SSR Cart bubble <span class="text-gray-400"> `astro add node`, session storage, middleware for user</span>
- 👀 Performance audit

</v-clicks>
</div>

<KBCounter :counts="[0, 0, 8, 48, 8, 8]" :colors="['text-green-500', 'text-green-500', 'text-green-500', 'text-green-500', 'text-green-500', 'text-green-500']" class="col-span-full" />
</div>

<style>
  ul {
    list-style: none;
  }
  li {
    margin: 0;
  }
</style>
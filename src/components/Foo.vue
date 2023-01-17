<template>
<div class="vue-lib-scaffold">
  <IconVite />
  <h1>{{ trim(msg) }}, I am the first component of your library.</h1>
  <p>
    This is a very simple scaffolding for a Vue 3 library.
    It's not easy to write a library, but worth it.
    <br/>
    You can use this as a starting point for your library.
  </p>
  <p>
    <a href="https://github.com/juzser/vue-lib-scaffold" target="_blank">Check out the repo</a>
    <br/>
    You can find how to customize the library name in <strong>README</strong>.
    <br/>
    Please star me if you like it.
  </p>
</div>
</template>

<script setup lang="ts">
import { useTrim } from '@/utils';
import IconVite from '@/assets/vite.svg?component';

const { trim } = useTrim();
const msg = ' Hello ';
</script>

<style lang="scss">
// You can split your styles into multiple files, then import specific files to a component
@import '../scss/main.scss';

// Remove these lines below, they are just for demo purpose
.vue-lib-scaffold {
  text-align: center;
  padding: 20px;
  line-height: 1.5rem;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { Trigger } from './components';

const showPopover = ref(false);

</script>

<template>
<div class="page-container">
  <Trigger v-model="showPopover">
    Hello
  </Trigger>
</div>
</template>

<style lang="scss">
body {
  font-family: sans-serif;
}
.modal-content {
  padding: 10px;
}
h3 {
  margin: 0;
}
</style>

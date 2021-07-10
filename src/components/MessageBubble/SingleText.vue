<template lang="pug">
.qkb-msg-bubble-component.qkb-msg-bubble-component--single-text
  .qkb-msg-bubble-component__text(v-html="mainData.text")
</template>
<script>
export default {
  props: {
    mainData: {
      type: Object
    }
  }
}
</script>

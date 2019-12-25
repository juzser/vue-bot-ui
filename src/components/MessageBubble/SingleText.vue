<template lang="pug">
.qkb-msg-component.qkb-msg-component--single-text
  .qkb-msg-component__text {{ mainData.text }}
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

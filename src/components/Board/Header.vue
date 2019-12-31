<template lang="pug">
.qkb-board-header
  slot(name="header")
    .qkb-board-header__title {{ botTitle }}
</template>
<script>
export default {
  props: {
    botTitle: {
      type: String,
      default: 'Chatbot'
    }
  }
}
</script>

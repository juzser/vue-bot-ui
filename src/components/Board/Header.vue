<template lang="pug">
.qkb-board-header
  slot(name="header")
    .qkb-board-header__title {{ botTitle }}
    button.qkb-btn-close(@click="closeBot")
</template>
<script>
export default {
  props: {
    botTitle: {
      type: String,
      default: 'Chatbot'
    }
  },

  methods: {
    closeBot () {
      this.$emit('close-bot')
    }
  }
}
</script>

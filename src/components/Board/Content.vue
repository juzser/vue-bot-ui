<template lang="pug">
.qkb-board-content(ref="boardContent")
  .qkb-board-content__bubbles(v-if="mainData.length")
    message-bubble(
      v-for="(item, index) in mainData",
      :key="index",
      :message="item",
    )
</template>

<script>
import MessageBubble from '../MessageBubble/Main'

export default {
  components: {
    MessageBubble
  },

  props: {
    mainData: {
      type: Array,
      required: true
    }
  },

  watch: {
    mainData: function (newVal) {
      this.$nextTick(() => {
        this.updateScroll()
      })
    }
  },

  methods: {
    updateScroll () {
      const contentElm = this.$refs.boardContent
      const offsetHeight = contentElm.offsetHeight

      contentElm.scrollTop = offsetHeight
    }
  }
}
</script>

<template lang="pug">
.qkb-board-content(
  ref="boardContent"
)
  .qkb-board-content__bubbles(v-if="mainData.length")
    message-bubble(
      v-for="(item, index) in mainData",
      :key="index",
      :message="item"
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
    mainData: function (newVal, oldVal) {
      console.log('watch')
      this.$nextTick(() => {
        this.updateScroll()
      })
    }
  },

  mounted () {
    console.log('hello')
  },

  methods: {
    updateScroll () {
      const boardContent = this.$refs.boardContent
      const currentHeight = boardContent.scrollHeight
      this.$refs.boardContent.scrollBy(0, currentHeight)
    }
  }
}
</script>

<template lang="pug">
  #bcontent.qkb-board-content(
    ref="boardContent"
  )
    template(v-if='listMessageBubble.length')
      message-bubble(
        v-for='(message, i) in listMessageBubble',
        :key='i',
        :message='message'
      )
</template>

<script>
import MessageBubble from './MessageBubble'
import ScrollBar from './ScrollBar'

import { mapState } from 'vuex'

export default {
  components: {
    MessageBubble,
    ScrollBar
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'listMessageBubble'
    ])
  },
  watch: {
    listMessageBubble: function (newVal, oldVal) {
      this.$nextTick(() => {
        this.updateScroll()
      })
    }
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

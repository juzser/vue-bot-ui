<template lang="pug">
.qkb-msg-bubble
  img.qkb-msg-bubble__avatar(
    v-if="message.avatar",
    :src="message.avatar",
    alt="avatar"
  )
  component(
    v-if="componentType",
    :is="componentType",
    :main-data="message"
  )
</template>
<script>
import SingleText from './SingleText'
import ButtonOptions from './ButtonOptions'

export default {
  components: {
    SingleText,
    ButtonOptions
  },

  props: {
    message: {
      type: Object
    }
  },

  computed: {
    // Define the message type and return the specific component
    componentType () {
      let type = ''

      console.log(this.message)

      switch (this.message.type) {
        case 'button':
          type = 'ButtonOptions'
          break
        default:
          type = 'SingleText'
      }

      return type
    }
  }
}
</script>

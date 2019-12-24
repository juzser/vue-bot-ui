<template lang="pug">
  .qkb-board-message-bubble(:class="{ 'qkb-board-message-bubble--right': isCustomer}")
    img.qkb-board-message-bubble__avatar(
      v-if='message.avatar',
      :src='message.avatar',
      alt='msg-avatar'
    )
    div.qkb-board-message-bubble-data(v-if='isCustomer')
      .qkb-board-message-bubble__text {{ message.text }}
    div.qkb-board-message-bubble-data(v-else='')
      .qkb-board-message-bubble__text {{ message.text }}
      template(v-if='message.data')
        div(
          v-for='(child, i) in message.data',
          :key='i'
        )
          button.qkb-board-message-bubble__btn(
            v-if="child.action === 'postback'",
            @click='postBack(child.value)'
          ) {{ child.title }}
          a.qkb-board-message-bubble__url(
            target='_blank',
            v-if="child.action === 'url'",
            :href='child.value'
          ) {{ child.title }}
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    isCustomer () {
      return this.message.agent === 'customer'
    }
  },
  methods: {
    postBack (value) {

    }
  }
}
</script>

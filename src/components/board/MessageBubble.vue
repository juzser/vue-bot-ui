<template>
  <div class="qkb-board-message-bubble" :class="{ 'qkb-board-message-bubble--right': isCustomer}">
    <img
      v-if="message.avatar"
      :src="message.avatar"
      alt="msg-avatar"
      class="qkb-board-message-bubble__avatar"
    />
    <div v-if="isCustomer">
      <div class="qkb-board-message-bubble__text">{{ message.text }}</div>
    </div>
    <div v-else>
      <div class="qkb-board-message-bubble__text">{{ message.text }}</div>
      <template v-if="message.data">
        <div v-for="(child, i) in message.data" :key="i">
          <button class="qkb-board-message-bubble__btn" v-if="child.action === 'postback'" @click="postBack(child.value)">{{ child.title }}</button>
          <a class="qkb-board-message-bubble__url" target="_blank" v-if="child.action === 'url'" :href="child.value">{{ child.title }}</a>
        </div>
      </template>
    </div>
  </div>
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

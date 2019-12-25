<template lang="pug">
.qkb-msg-bubble-data.qkb-msg-bubble--button-options
  .qkb-msg-bubble__text {{ mainData.text }}
  .qkb-msg-bubble__options-wrapper
    .qkb-options-wrapper__item(
      v-for="(item, index) in mainData.data",
      :class="{ active: selectedItem === item.value }",
      :key="index"
    )
      button.qkb-msg-bubble__btn(
        v-if="item.action === 'postback'",
        @click="selectOption(item.value)"
      ) {{ item.title }}
      a.qkb-msg-bubble__url(
        target="_blank",
        v-if="item.action === 'url'",
        :href="item.value"
      ) {{ item.title }}
</template>
<script>
import EventBus from '@/helpers/event-bus'

export default {
  props: {
    mainData: {
      type: Object
    }
  },

  data () {
    return {
      selectedItem: null
    }
  },

  methods: {
    selectOption (value) {
      this.selectedItem = value
      EventBus.$emit('select-button-option', value)
    }
  }
}
</script>

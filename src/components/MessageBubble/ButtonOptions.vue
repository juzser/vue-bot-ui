<template lang="pug">
.qkb-msg-bubble-component.qkb-msg-bubble-component--button-options
  .qkb-msg-bubble-component__text {{ mainData.text }}
  .qkb-msg-bubble-component__options-wrapper
    .qkb-mb-button-options__item(
      v-for="(item, index) in mainData.options",
      :class="{ active: selectedItem === item.value }",
      :key="index"
    )
      button.qkb-mb-button-options__btn(
        v-if="item.action === 'postback'",
        @click="selectOption(item)"
      )
        span {{ item.text }}
      a.qkb-mb-button-options__btn.qkb-mb-button-options__url(
        target="_blank",
        v-else,
        :href="item.value"
      )
        span {{ item.text }}
</template>
<script>
import EventBus from '../../helpers/event-bus'

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

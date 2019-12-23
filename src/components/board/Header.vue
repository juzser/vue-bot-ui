<template lang="pug">
  .qkb-board-header
    span.qkb-board-header__title Chat bot box
    button.qkb-board-header__btn-close(@click='closeBot') X
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'closeBot'
    ])
  }
}
</script>

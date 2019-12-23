<template lang="pug">
  .qkb-bot-bubble(@click='openBot')
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'openBot'
    ])
  }
}
</script>

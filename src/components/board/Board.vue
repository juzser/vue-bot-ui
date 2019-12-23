<template lang="pug">
  .qkb-board(v-if='botStatus')
    the-header
    the-content
    the-action
</template>
<script>
import TheAction from './Action'
import TheContent from './Content'
import TheHeader from './Header'
import { mapState } from 'vuex'

export default {
  components: {
    TheAction,
    TheHeader,
    TheContent
  },
  computed: {
    ...mapState([
      'botStatus'
    ])
  }
}
</script>

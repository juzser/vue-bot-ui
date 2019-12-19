<template>
  <div class="qkb-board">
    <the-header></the-header>
    <the-content></the-content>
    <the-action></the-action>
  </div>
</template>
<script>
import TheAction from './Action'
import TheContent from './Content'
import TheHeader from './Header'

export default {
  components: {
    TheAction,
    TheHeader,
    TheContent
  }
}
</script>

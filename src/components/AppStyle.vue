<template lang="pug">
.qkb-bot-style(v-html="style", style="display: none")
</template>
<script>
export default {
  props: ['options'],
  computed: {
    style () {
      if (!this.options) {
        return ''
      }

      const {
        colorScheme,
        textColor,
        boardContentBg,
        bubbleBtnSize,
        botAvatarImg,
        botAvatarSize,
        inputDisableBg,
        msgBubbleBgBot,
        msgBubbleColorBot,
        msgBubbleBgUser,
        msgBubbleColorUser
      } = this.options

      const styles = `
<style type="text/css" id="qkb-bot-style">
.qkb-bubble-btn {
  background-color: ${colorScheme};
  width: ${bubbleBtnSize}px;
  height: ${bubbleBtnSize}px;
}
.qkb-bubble-btn-icon {
  fill: ${textColor};
  color: ${textColor};
}
.qkb-board {
  bottom: ${bubbleBtnSize}px;
}
.qkb-board-header {
  background-color: ${colorScheme};
}
.qkb-board-header__title {
  color: ${textColor};
}
.qkb-board-content {
  background-color: ${boardContentBg};
}
${botAvatarImg
    ? `.qkb-msg-avatar {
      width: ${botAvatarSize}px;
      height: ${botAvatarSize}px;
    }
    .qkb-msg-avatar__img {
      background-image: url(${botAvatarImg});
    }`
    : ''
}
.qkb-msg-bubble--bot .qkb-msg-bubble-component__text {
  color: ${msgBubbleColorBot};
  background-color: ${msgBubbleBgBot};
}
.qkb-msg-bubble__typing-indicator span,
.qkb-msg-bubble__typing-indicator::before,
.qkb-msg-bubble__typing-indicator::after {
  background-color: ${msgBubbleColorBot};
}
.qkb-mb-button-options__btn::before {
  background-color: ${msgBubbleBgUser};
}
.qkb-msg-bubble--user .qkb-msg-bubble-component__text {
  color: ${msgBubbleColorUser};
  background-color: ${msgBubbleBgUser};
}
.qkb-mb-button-options__btn {
  color: ${msgBubbleBgUser};
  border-color: ${msgBubbleBgUser};
}
.qkb-mb-button-options__btn:hover {
  color: ${msgBubbleColorUser};
  background-color: ${msgBubbleBgUser};
}
.qkb-board-action--disabled::before {
  background-color: ${inputDisableBg};
}
</style>
      `
      return styles
    }
  }
}
</script>

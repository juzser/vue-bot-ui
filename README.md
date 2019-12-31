
# Vue Bot UI

#### For the one who finding a customizable chatbot UI.

I build for my private project, but I tried to bring as many options as I think someone need it, so feel free to use it.

Demo page is coming soon.

<p align="center">
<img width="300" alt="vue bot UI" src="https://user-images.githubusercontent.com/5735071/71614782-52cc2280-2be0-11ea-8c1b-7af063401d3d.png">
</p>


## Install

```bash
yarn add vue-bot-ui

// or
npm install vue-bot-ui
```

## Usage

Include plugin in your `main.js` file.

```javascript
import VueBotUI from 'vue-bot-ui'

Vue.use(VueBotUI)
```

Use it:

```vue
<VueBotUI :options="botOptions"/>
```

```javascript
data () {
  return {
    botOptions: {
      // Options here
    }
  }
}
```

## TODO
Many things...
- API services (I'm going to use `axios`)
- Loading / Typing indicators
- Disable message input on loading, vice versa...
- Validate option type


## Options

| Name                | Type     | Default       | Description |
| ---                 | ---      | ---           | ---         |
| inputPlaceholder    | String   | 'Message'     | The placeholder for message input |
| botTitle            | String   | 'Chatbot'     | Name of the bot that will be shown on header of the board |
| colorScheme         | String   | '#1b53d0'     | The background color of bubble button & board header |
| textColor           | String   | '#fff'        | The color of bubble button icon & board header title |
| bubbleBtnSize       | Number   | 56            | The size of bubble button |
| animation           | Boolean  | true          | Set to `false` to disable animation of bubble button icon & board showing |
| boardContentBg      | String   | '#fff'        | The background color of board messages box |
| botAvatarSize       | Number   | 32            | The size of bot avatar |
| botAvatarImg        | String   | 'http://placehold.it/200x200' | The size of bot avatar |
| msgBubbleBgBot      | String   | '#f0f0f0'     | The background color of BOT message |
| msgBubbleColorBot   | String   | '#000'        | The text color of BOT message |
| msgBubbleBgUser     | String   | '#4356e0'     | The background color of user message |
| msgBubbleColorUser  | String   | '#fff'        | The text color of user message |


## Slots

Usage
```vue
<template slot="header>
  ...
</template>
```

- **header** -- Board header, that contains Bot name. You can add icon or customize by this slot
- **actions** -- The slot beside Send button in the board footer. You can add some actions here (emoji, attach,...)
- **sendButton** -- The slot to customize Send button in the board footer.
- **bubbleButton** -- Customize the Bubble button

The more details for slots is coming soon.


##### Not found what your need? Customize yourself:
You can overwrite the CSS by class name. Each type and state has separated class for you to customize.


## Developers / Build
```bash
# Clone repo
git clone https://github.com/JuzSer/vue-bot-ui

# Install packages
yarn

# Development & Demo - http://localhost:1901
yarn serve

# Build main library for client & SSR
yarn build-bundle
```

---
- The icons and images from [FlatIcon](https://www.flaticon.com/)
- Placeholder image from [Placehold.it](http://placehold.it)


**Thank you!** :tada:

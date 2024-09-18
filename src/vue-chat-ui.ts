import type { App } from 'vue';
import * as components from './components';

import '@/scss/main.scss';

const VueChatUi = {
  install(Vue: App) {
    for (const component in components) {
      const componentElement = components[component as keyof typeof components];
      Vue.component(component, componentElement);
    }
  },
};

// Export all
export default VueChatUi;

// Export single component
export * from './components';

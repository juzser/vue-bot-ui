import type { App } from 'vue';
import * as components from './components';

const VueLibScaffold = {
  install(Vue: App) {
    for (const component in components) {
      const componentElement = components[component as keyof typeof components];
      Vue.component(component, componentElement);
    }
  },
};

// Export all
export default VueLibScaffold;

// Export single component
export * from './components';

import { render } from '@testing-library/vue';
import Container from '../Container.vue';

describe('Container', () => {
  it('should be defined', () => {
    const { container } = render(Container);
    expect(container).toBeDefined();
  });
  // it('should work', () => {
  //   const base = ref(45.95)
  //   const result = useFloor(base)
  //   expect(result.value).toBe(45)
  //   base.value = -45.05
  //   expect(result.value).toBe(-46)
  // });
});

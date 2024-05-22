import { createElementVNode } from 'vue';

export default {
  setup(props, { slots }) {
    console.log(slots);
    const defaultVnodes = slots.default();
    const slot1Vnodes = slots.slot1();
    const slot2Vnodes = slots.slot2({ msg: 'asdfasdfsaf' });
    return () => {
      return createElementVNode('div', null, [
        ...defaultVnodes,
        ...slot1Vnodes,
        ...slot2Vnodes,
      ]);
    };
  },
};

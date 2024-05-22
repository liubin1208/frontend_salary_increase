import { h } from 'vue';
export default {
  setup() {
    return () => {
      const lis = [];
      for (let i = 1; i <= 100; i++) {
        lis.push(
          h(
            'li',
            {
              class: 'list-item',
            },
            i.toString()
          )
        );
      }
      const ul = h(
        'ul',
        {
          class: 'list',
        },
        lis
      );
      return ul;
    };
  },
};

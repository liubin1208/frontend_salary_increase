import { createFormItem } from '../FormItem';

const item1 = createFormItem(
  'input',
  { label: 'test1', value: '' },
  (current) => (current.payload.value === 'test1' ? item2 : item3)
);

const item2 = createFormItem(
  'select',
  {
    label: 'test2',
    options: [
      { label: 'test2-1', value: 'test2-1' },
      { label: 'test2-2', value: 'test2-2' },
      { label: 'test2-3', value: 'test2-3' },
    ],
    value: 'test2-1',
  },
  (current) => {
    if (current.payload.value === 'test2-2') {
      return item3;
    } else if (current.payload.value === 'test2-3') {
      return item4;
    } else {
      return null;
    }
  }
);

const item3 = createFormItem(
  'checkbox',
  {
    label: 'test3',
    options: [
      { label: 'test3-1', value: 'test3-1' },
      { label: 'test3-2', value: 'test3-2' },
      { label: 'test3-3', value: 'test3-3' },
    ],
    value: ['test3-1', 'test3-2'],
  },
  (current) => (current.payload.value.includes('test3-1') ? item4 : null)
);

const item4 = createFormItem('radio', {
  label: 'test4',
  options: [
    { label: 'test4-1', value: 'test4-1' },
    { label: 'test4-2', value: 'test4-2' },
    { label: 'test4-3', value: 'test4-3' },
  ],
  value: 'test4-1',
});

export default item1;

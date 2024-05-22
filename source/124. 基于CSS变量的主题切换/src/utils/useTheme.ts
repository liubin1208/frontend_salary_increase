import { ref, watchEffect } from 'vue';
type Theme = 'light' | 'dark';
const theme = ref<Theme>(
  (localStorage.getItem('___theme___') as Theme) || 'light'
);
const STORE_KEY = '___theme___';

watchEffect(() => {
  document.documentElement.dataset.theme = theme.value;
  localStorage.setItem(STORE_KEY, theme.value);
});

export function useTheme() {
  return {
    theme,
  };
}

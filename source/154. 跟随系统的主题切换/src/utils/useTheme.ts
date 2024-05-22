import { ref, watchEffect } from 'vue';
type Theme = 'light' | 'dark' | 'OS';
const LOCAL_KEY = '__theme__';
const theme = ref<Theme>((localStorage.getItem(LOCAL_KEY) as Theme) || 'light');

const prefers = matchMedia('(prefers-color-scheme: dark)');

function followOS() {
  document.documentElement.dataset.theme = prefers.matches ? 'dark' : 'light';
}

watchEffect(() => {
  localStorage.setItem(LOCAL_KEY, theme.value);
  if (theme.value === 'OS') {
    // 根据系统的设置选择亮色或暗色
    followOS();
    prefers.addEventListener('change', followOS);
  } else {
    document.documentElement.dataset.theme = theme.value;
    prefers.removeEventListener('change', followOS);
  }
});

export default function useTheme() {
  return {
    theme,
  };
}

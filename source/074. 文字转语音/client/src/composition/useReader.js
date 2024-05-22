import { computed, reactive, ref, watchEffect } from 'vue';
import { getVoice } from '../api';
const maxLen = 200;
const punctuation = ',.:?，。：？';
/**
 *
 * @param {string} text
 */
function cutText(text) {
  const result = [];
  let temp = '';
  let waitStop = false;
  for (const c of text) {
    if (temp.length >= maxLen) {
      result.push(temp);
      temp = '';
      waitStop = false;
    }
    if (punctuation.includes(c)) {
      waitStop = true;
      temp += c;
    } else {
      if (waitStop) {
        result.push(temp);
        temp = '';
      }
      temp += c;
      waitStop = false;
    }
  }
  if (temp) {
    result.push(temp);
  }
  return result;
}

async function saveUrl(text) {
  let base64 = localStorage.getItem(text);
  if (!base64) {
    base64 = await getVoice(text);
    localStorage.setItem(text, base64);
  }
}

export function useReader(text) {
  const audio = new Audio();
  const parts = cutText(text);

  // 所有的播放url地址
  const loadedIndex = ref(-1);
  (async () => {
    for (const p of parts) {
      await saveUrl(p);
      loadedIndex.value++;
    }
  })();

  // 是否能播放
  const canPlay = computed(() => loadedIndex.value >= 0);
  // 当前播放的下标，控制下标即可控制播放
  const readingIndex = ref(-1);
  // 当前的播放地址
  const curUrl = computed(() => {
    if (readingIndex.value >= 0 && readingIndex.value <= loadedIndex.value) {
      return `data:audio/mp3;base64,${localStorage.getItem(
        parts[readingIndex.value]
      )}`;
    }
  });
  // 当前的播放方式，false：仅播放单条，true：播放全部
  const isPlayAll = ref(false);

  watchEffect(() => {
    if (curUrl.value) {
      audio.src = curUrl.value;
      audio.currentTime = 0;
      audio.play();
    }
  });

  function playOne(index) {
    readingIndex.value = index;
    isPlayAll.value = false;
  }

  function playAll() {
    readingIndex.value = 0;
    isPlayAll.value = true;
  }

  audio.addEventListener('ended', () => {
    if (readingIndex.value < parts.length - 1 && isPlayAll.value) {
      readingIndex.value++;
    } else {
      readingIndex.value = -1;
    }
  });
  return {
    parts,
    readingIndex,
    playOne,
    playAll,
    canPlay,
  };
}

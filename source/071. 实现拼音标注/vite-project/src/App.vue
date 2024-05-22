<template>
  <div class="container">
    <textarea v-model.lazy="content" class="txt"></textarea>
    <div class="result" v-html="html"></div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import pinyin from 'pinyin';
const result = pinyin('雪茄', {
  segment: true,
  heteronym: true,
});
console.log(result);
const content = ref('');
const reg = /[\u4e00-\u9fa5]/;
function isChinese(char) {
  return reg.test(char);
}

const html = computed(() => {
  let tags = '';
  for (const c of content.value) {
    if (isChinese(c)) {
      tags += `<ruby>${c}<rp>(</rp><rt>${pinyin(c)}</rt><rp>)</rp></ruby>`;
    } else if (c === '\n' || c === '\r') {
      tags += '<br>';
    } else {
      tags += c;
    }
  }
  return tags;
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: stretch;
  height: 100vh;
}
.result {
  overflow-y: auto;
}
.result,
.txt {
  flex: 1 1 100px;
  padding: 20px;
}
.txt {
  resize: none;
}
.result :deep(rt) {
  color: #e9695d;
}
.result :deep(ruby) {
  margin: 0 3px;
}
</style>

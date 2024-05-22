<template>
  <div class="content-container">
    <pre>
      <template v-if="handle">
        <code v-if="isHighlight" class="content" :class="hlClass" v-html="fileContent"></code>
        <code v-else class="content" :class="hlClass">{{ fileContent }}</code>
      </template>
      
    </pre>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import 'highlight.js/styles/github-dark.css';
import hljs from 'highlight.js';
const props = defineProps(['handle']);
const fileContent = ref('');
const hlClass = ref('nohighlight');
const isHighlight = ref(false);
const langMap = {
  'text/css': 'css',
  'text/html': 'html',
  'text/javascript': 'js',
  'application/json': 'json',
};
watchEffect(async () => {
  if (!props.handle) {
    fileContent.value = '';
    return;
  }
  const file = await props.handle.getFile();
  console.log(file.type);
  const reader = new FileReader();
  reader.onload = (e) => {
    const lang = langMap[file.type];

    if (lang) {
      hlClass.value = 'language-' + lang;
      fileContent.value = hljs.highlight(e.target.result, {
        language: lang,
      }).value;
      isHighlight.value = true;
    } else {
      hlClass.value = 'nohighlight';
      fileContent.value = e.target.result;
      isHighlight.value = false;
    }
  };
  reader.readAsText(file, 'utf-8');
});
</script>

<style scoped>
.content-container {
  width: 100%;
  height: 100%;
  padding: 10px 30px;
}
.content {
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  letter-spacing: 1px;
  font-family: 'Roboto Mono';
}
</style>

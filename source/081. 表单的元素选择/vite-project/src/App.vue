<template>
  <form @submit="onSearch" class="search-container">
    <div class="search-box">
      <input
        v-model="query"
        class="search-input"
        type="text"
        placeholder="输入关键字"
      />
      <button class="search-button">
        <i class="iconfont i-search search-icon"></i>
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
const query = ref('');
function onSearch(e) {
  e.preventDefault();
  console.log('搜索', query.value);
}
</script>

<style scoped>
@import url('//at.alicdn.com/t/c/font_3555577_ibkzrhmfg2.css');
.search-container {
  display: flex;
  justify-content: center;
  --c: #e9cf66;
  --c2: #bda853;
  --c3: #e9cf6680;
}
.search-box {
  position: relative;
  margin-top: 1em;
}

.search-input {
  width: 200px;
  height: 35px;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: var(--c);
  box-shadow: 0 0 5px var(--c3);
}

.search-button {
  position: absolute;
  top: 0;
  right: 0;
  width: 35px;
  height: 35px;
  background-color: var(--c);
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-button:hover {
  background-color: var(--c2);
}

.search-icon {
  color: white;
  font-size: 18px;
}
</style>

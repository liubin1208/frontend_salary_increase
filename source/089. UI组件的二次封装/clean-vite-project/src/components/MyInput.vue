<template>
  <div class="my-input">
    <el-input ref="inp" v-bind="$attrs">
      <template v-for="(value, name) in $slots" #[name]="scopeData">
        <slot :name="name" v-bind="scopeData || {}"></slot>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  mounted() {
    const inp = this.$refs.inp;
    for (const key in inp) {
      this[key] = inp[key];
    }
  },
};
</script>

<style scoped>
.my-input {
  transition: 0.3s;
}
.my-input:hover,
.my-input:focus-within {
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
}
</style>

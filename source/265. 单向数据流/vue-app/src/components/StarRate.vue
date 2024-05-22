<template>
  <div class="star-rate" @mouseleave="handleLeave">
    <i
      v-for="n in max"
      class="iconfont"
      :key="n"
      :class="n <= showValue ? 'i-star' : 'i-star-empty'"
      @mouseenter="handleEnter(n)"
      @click="handleClick(n)"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 10,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      showValue: 0, // 当前显示的星星值
    };
  },
  created() {
    this.showValue = this.value;
  },
  methods: {
    handleEnter(n) {
      this.showValue = n;
    },
    handleLeave() {
      this.showValue = this.value;
    },
    handleClick(n) {
      this.value = n;
    },
  },
};
</script>

<style scoped>
@import url('//at.alicdn.com/t/c/font_3555577_mmbyfinkri.css');
.star-rate {
  display: flex;
}
.i-star-empty {
  color: #c6d1de;
  cursor: pointer;
  animation: zoomIn 0.2s;
}
.i-star {
  color: #f7ba2a;
  transform: scale(0.85);
  animation: zoomOut 0.2s;
}

@keyframes zoomIn {
  from {
    transform: scale(0.85);
  }
  90% {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
}

@keyframes zoomOut {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.85);
  }
}
</style>

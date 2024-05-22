<template>
  <div class="star-rate">
    <i class="iconfont i-star"></i>
    <i class="iconfont i-star"></i>
    <i class="iconfont i-star"></i>
    <i class="iconfont i-star-empty"></i>
    <i class="iconfont i-star-empty"></i>
  </div>
</template>

<style>
@import url('//at.alicdn.com/t/c/font_3555577_mmbyfinkri.css');
.star-rate {
  display: flex;
}
.star-rate .i-star-empty {
  color: #c6d1de;
  cursor: pointer;
  animation: scale 0.3s;
}
.star-rate .i-star {
  color: #f7ba2a;
  transform: scale(0.85);
  animation: scale 0.3s reverse;
}
@keyframes scale {
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
</style>

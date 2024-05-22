particlesJS('particle-container', {
  particles: {
    number: {
      value: 80, // 颗粒数量
    },
    color: {
      value: '#fff', // 颗粒颜色
    },
    shape: {
      type: 'circle', // 颗粒形状：圆
    },
    opacity: {
      random: true, // 随机透明度
      anim: {
        enable: true, // 启用透明度变化
        speed: 1, // 变化速度
        opacity_min: 0.1, // 最小透明度
        sync: false, // 是否所有颗粒同步变化透明度
      },
    },
    size: {
      value: 3, // 颗粒大小
      random: true, // 随机大小
    },
    line_linked: {
      enable: false, // 禁用连线
    },
    move: {
      enable: true, // 启用颗粒移动
      speed: 0.3, // 移动速度
      direction: 'top-right', // 移动方向
      random: true, // 随机偏移
      straight: true, // 是否是直线移动
    },
  },
  interactivity: {
    events: {
      onhover: {
        // 鼠标悬停
        enable: false, // 禁用鼠标悬停
      },
      onclick: {
        // 鼠标点击
        enable: true, // 启用事件
        mode: 'push', // 模式：新增颗粒
      },
      resize: true, // 监听画布尺寸改变
    },
    modes: {
      // 模式配置
      push: {
        // 新增模式
        particles_nb: 2, // 新增数量
      },
    },
  },
  retina_detect: true, // 启用高分屏适配
});

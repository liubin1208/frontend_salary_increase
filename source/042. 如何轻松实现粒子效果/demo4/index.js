particlesJS('particle-container', {
  particles: {
    number: {
      value: 4, // 颗粒数量
    },
    color: {
      value: '#fff', // 颗粒颜色
    },
    shape: {
      type: 'polygon', // 颗粒形状：多边形
      polygon: {
        nb_sides: 6, // 多边形边数
      },
    },
    opacity: {
      random: true, // 随机透明度
      value: 0.3, // 透明度的最大值
    },
    size: {
      value: 160, // 颗粒大小
    },
    line_linked: {
      enable: false, // 禁用连线
    },
    move: {
      enable: true, // 启用颗粒移动
      speed: 4, // 移动速度
      direction: 'none', // 移动方向
      random: true, // 随机偏移
      straight: false, // 是否是直线移动
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false, // 禁用悬停事件
      },
      onclick: {
        enable: false, // 禁用点击事件
      },
      resize: true, // 监听画布尺寸改变
    },
  },
  retina_detect: true, // 启用高分屏适配
});

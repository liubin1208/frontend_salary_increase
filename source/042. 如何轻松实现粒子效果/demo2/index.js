particlesJS('particle-container', {
  particles: {
    number: {
      value: 120, // 颗粒数量
    },
    color: {
      value: '#fff', // 颗粒颜色
    },
    shape: {
      type: 'image', // 颗粒类型：图片
      image: {
        src: './snow.png', // 图片路径
        width: 10,
        height: 10,
      },
    },
    size: {
      value: 10, // 颗粒尺寸
      random: true, // 随机尺寸
    },
    line_linked: {
      enable: false, // 禁用连线
    },
    move: {
      enable: true, // 启用移动
      speed: 3, // 移动速度
      direction: 'bottom', // 移动方向：向下
      straight: false, // 是否是直线移动
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false, // 禁用鼠标悬停事件
      },
      onclick: {
        enable: true, // 启用点击事件
        mode: 'push', // 模式：新增颗粒
      },
      resize: true, // 监听画布尺寸变化
    },
    modes: {
      push: {
        // 新增模式
        particles_nb: 5, // 新增数量
      },
    },
  },
  retina_detect: true, // 启用高分屏适配
});

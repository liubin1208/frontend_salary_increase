particlesJS('particle-container', {
  particles: {
    number: {
      value: 80, // 颗粒数量
    },
    opacity: {
      random: true, // 随机透明度
    },
    size: {
      value: 3, // 颗粒大小
      random: true, // 随机大小
    },
    line_linked: {
      enable: true, // 启用颗粒连线
      distance: 150, // 多少距离会出现连线
      color: '#fff', // 线的颜色
      opacity: 0.4, // 线的透明度
      width: 1, // 线宽
    },
    move: {
      enable: true, // 启用颗粒移动
      speed: 6, // 移动速度
      direction: 'none', // 移动方向
      straight: false, // 是否是直线移动
    },
  },
  interactivity: {
    // 交互
    events: {
      onhover: {
        // 鼠标悬停
        enable: true, // 启用事件
        mode: 'grab', // 模式：抓取
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
      grab: {
        // 抓取模式
        distance: 300, // 抓取距离
        line_linked: {
          opacity: 0.8, // 抓取线的透明度
        },
      },
      push: {
        // 新增模式
        particles_nb: 2, // 新增数量
      },
    },
  },
  retina_detect: true, // 启用高分屏适配
});

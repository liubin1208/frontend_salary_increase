import * as echarts from 'echarts';
import { computed, reactive, watchEffect } from 'vue';

function useDatas(width) {
  const datas = reactive({
    category: [],
    lineData: [],
    barData: [],
  });
  watchEffect(() => {
    datas.category = [];
    datas.lineData = [];
    datas.barData = [];
    const n = Math.floor(width.value / 40);
    let dottedBase = +new Date();
    for (let i = 0; i < n; i++) {
      const date = new Date((dottedBase -= 3600 * 24 * 1000));
      datas.category.unshift(
        [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
      );
      const b = Math.random() * 200;
      const d = Math.random() * 200;
      datas.barData.unshift(b);
      datas.lineData.unshift(d + b);
    }
  });
  return datas;
}

function useOptions(datas) {
  const option = computed(() => ({
    backgroundColor: '#0f375f',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['line', 'bar'],
      textStyle: {
        color: '#ccc',
      },
    },
    xAxis: {
      data: datas.category,
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
    },
    series: [
      {
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: datas.lineData,
      },
      {
        name: 'bar',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          borderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#14c8d4' },
            { offset: 1, color: '#43eec6' },
          ]),
        },
        data: datas.barData,
      },
      {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(20,200,212,0.5)' },
            { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
            { offset: 1, color: 'rgba(20,200,212,0)' },
          ]),
        },
        z: -12,
        data: datas.lineData,
      },
      {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
          color: '#0f375f',
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: datas.lineData,
      },
    ],
  }));
  return option;
}

export function useCharts(width, domRef) {
  let myChart;
  const datas = useDatas(width);
  const option = useOptions(datas);
  let timerId = null;
  watchEffect(() => {
    if (domRef.value) {
      if (!myChart) {
        myChart = echarts.init(domRef.value);
        myChart.setOption(option.value);
      } else {
        option.value;
        myChart.resize();
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          myChart.setOption(option.value);
        }, 100);
      }
    }
  });
}

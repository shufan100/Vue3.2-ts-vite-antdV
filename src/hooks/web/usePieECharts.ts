/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-11-04 15:15:13
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-12-05 18:26:35
 * @FilePath: \Vue3.2-ts-vite-pinia-antdv\src\hooks\web\usePieECharts.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as echarts from 'echarts'
import 'echarts-gl'
import type { Ref } from 'vue';

/**
 * 绘制3d饼图
 * @param elRef 图形
 * @param pieData 饼图数据
 */
export function usePieECharts(elRef: Ref<HTMLDivElement | null>, pieData: any) {
  const el = unref(elRef);
  let myChart = echarts.init(el as HTMLDivElement)

  let option = getPie3D(pieData, 0.8)
  myChart.setOption(option)
}

/**
 * 3d饼图的配置项
 * @param pieData 饼图数据
 * @param internalDiameterRatio 环形比例 1：实心
 * @returns option配置
 */
function getPie3D(pieData: any, internalDiameterRatio: number) {
  let series = []  // option的 series数组配置
  let sumValue = 0 //饼图的总值
  let startValue = 0
  let endValue = 0
  let legendData = []
  let k = typeof internalDiameterRatio !== 'undefined' ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio) : 1 / 3

  // 饼图每一项的配置
  for (let i = 0; i < pieData.length; i++) {
    sumValue += pieData[i].value
    legendData.push(pieData[i].name)
    series.push({
      type: 'surface',
      name: pieData[i].name,
      parametric: true, //是否为参数曲面
      wireframe: {
        show: false //曲面网格线
      },
      pieData: pieData[i],
      // pieStatus: {
      //   selected: false,
      //   hovered: false,
      //   k: k
      // },
      itemStyle: {
        color: pieData[i].color,
        opacity: pieData[i].opacity,
      },
    })
  }
  // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
  // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
  for (let i = 0; i < series.length; i++) {
    endValue = startValue + series[i].pieData.value

    series[i].pieData.startRatio = startValue / sumValue
    series[i].pieData.endRatio = endValue / sumValue
    series[i].parametricEquation = getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio, false, false, k, series[i].pieData.value)
    startValue = endValue
  }
  console.log(startValue, endValue)
  // 补充一个透明圆环，用于支撑高亮功能近似实现
  // series.push({
  //   name: 'mouseoutSeries',
  //   type: 'surface',
  //   parametric: true,
  //   wireframe: {
  //     show: false
  //   },
  //   itemStyle: {
  //     opacity: 0,
  //   },
  //   parametricEquation: {
  //     u: {
  //       min: 0,
  //       max: Math.PI * 2,
  //       step: Math.PI / 20
  //     },
  //     v: {
  //       min: 0,
  //       max: Math.PI,
  //       step: Math.PI / 20
  //     },
  //     x: function (u: number, v: number) {
  //       return Math.sin(v) * Math.sin(u) + Math.sin(u)
  //     },
  //     y: function (u: number, v: number) {
  //       return Math.sin(v) * Math.cos(u) + Math.cos(u)
  //     },
  //     z: function (u: number, v: number) {
  //       return Math.cos(v) > 0 ? 0.1 : -0.1
  //     }
  //   }
  // })


  // option最终配置
  let option = {
    tooltip: {
      formatter: (params: any) => {
        if (params.seriesName !== 'mouseoutSeries') {
          return `${params.seriesName}<br/>
          <span style="
            display:inline-block;
            margin-right:5px;
            border-radius:10px;
            width:10px;
            height:10px;
            background-color:${params.color};"
          ></span>${option.series[params.seriesIndex].pieData.value}`
        }
      }
    },
    xAxis3D: {
      min: -1,
      max: 1
    },
    yAxis3D: {
      min: -1,
      max: 1
    },
    zAxis3D: {
      min: -1,
      max: 1
    },

    grid3D: {
      show: false,
      boxHeight: 2,
      // 用于鼠标的旋转，缩放等视角控制
      viewControl: {
        alpha: 30, // 视角绕 x 轴，即上下旋转的角度
        beta: 90, //视角绕 y 轴，即左右旋转的角度
        zoomSensitivity: 0, //控制缩放 、默认1
        panSensitivity: 0, //控制平移 、默认1
        rotateSensitivity: 0,//旋转灵敏度
        autoRotate: false //自动旋转
      },
      //后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。
      postEffect: {
        //配置这项会出现锯齿，请自己去查看官方配置有办法解决
        enable: true,
        bloom: {
          enable: true,
          bloomIntensity: 0.1
        },
        SSAO: {
          enable: true,
          quality: 'medium',
          radius: 2
        }
      }
    },
    series: series,

  }
  return option
}

function getParametricEquation(startRatio: number, endRatio: number, isSelected: boolean, isHovered: boolean, k: number, h: number) {
  // 计算
  let midRatio = (startRatio + endRatio) / 2

  let startRadian = startRatio * Math.PI * 2
  let endRadian = endRatio * Math.PI * 2
  let midRadian = midRatio * Math.PI * 2

  // 如果只有一个扇形，则不实现选中效果。
  if (startRatio === 0 && endRatio === 1) {
    isSelected = false
  }

  // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
  k = typeof k !== 'undefined' ? k : 1 / 3

  // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
  let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0
  let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0

  // 计算高亮效果的放大比例（未高亮，则比例为 1）
  let hoverRate = isHovered ? 1.05 : 1
  // 返回曲面参数方程
  return {
    u: {
      min: -Math.PI,
      max: Math.PI * 3,
      step: Math.PI / 32
    },
    v: {
      min: 0,
      max: Math.PI * 2,
      step: Math.PI / 20
    },

    x: function (u: number, v: number) {
      if (u < startRadian) {
        return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
      }
      if (u > endRadian) {
        return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
      }
      return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate
    },

    y: function (u: number, v: number) {
      if (u < startRadian) {
        return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
      }
      if (u > endRadian) {
        return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
      }
      return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate
    },

    z: function (u: number, v: number) {
      if (u < -Math.PI * 0.5) {
        return Math.sin(u)
      }
      if (u > Math.PI * 2.5) {
        return Math.sin(u) * h * 0.1
      }
      return Math.sin(v) > 0 ? 1 * h * 0.1 : -1
    }
  }
}
<template>
<div class="container">
  <div class="chart" id="main">
  </div>
  <hr class="divider" />
</div>
</template>

<script>
import {mapState} from 'vuex'
import echarts from 'echarts'
import 'echarts-wordcloud'

export default {
  mounted () {
    let wordsChart = echarts.init(document.getElementById('main'))
    wordsChart.setOption({
      title: {
        text: '标签',
        textStyle: {
          fontSize: 18,
          fontFamily: 'SentyMARUKO',
          fontWeight: 400,
          color: '#2c3e50'
        },
        left: 'center',
        top: 16
      },
      tooltip: {
        show: false
      },
      series: [{
        type: 'wordCloud',
        gridSize: 7,
        sizeRange: [11, 32],
        rotationRange: [0, 0],
        shape: 'pentagon',
        top: 66,
        textStyle: {
          normal: {
            fontFamily: 'Avenir',
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: [
          {
            name: 'server',
            value: 3252
          },
          {
            name: 'web',
            value: 4324
          },
          {
            name: 'Ruby',
            value: 7788
          },
          {
            name: 'XML',
            value: 3421
          },
          {
            name: 'PHP',
            value: 2431
          },
          {
            name: 'C++',
            value: 2345
          },
          {
            name: 'Java',
            value: 1234
          },
          {
            name: 'Python',
            value: 2244
          },
          {
            name: 'Perl',
            value: 1898
          },
          {
            name: 'ruby on rails',
            value: 7342
          },
          {
            name: 'ES6',
            value: 4525
          },
          {
            name: 'CSS3',
            value: 4796
          },
          {
            name: 'HTML5',
            value: 5352
          },
          {
            name: 'Vue.js',
            value: 6987
          },
          {
            name: 'React.js',
            value: 7965
          },
          {
            name: 'Javascript',
            value: 8963
          },
          {
            name: 'Postgresql',
            value: 2342
          },
          {
            name: 'Redis',
            value: 3432
          },
          {
            name: 'Elixir',
            value: 4734
          },
          {
            name: 'Phoenix',
            value: 5637
          },
          {
            name: 'http2',
            value: 3423
          },
          {
            name: 'CORS',
            value: 2341
          }
        ]
      }]
    })

    wordsChart.on('click', param => {
      let name = param.name
      alert(name)
    })
  },
  computed: {
    ...mapState([
      'tags'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.container
  margin 2rem 1rem 1rem 1rem
  height auto
  border 0
  box-shadow 0 0 2.5rem rgba(0, 0, 0, 1)
  border-radius 2rem

.chart
  height 20rem
  width: 18rem

.divider
  width 80%
  position relative
  top -17rem
  opacity 0.5
  border-top 1px solid #2c3e50
</style>

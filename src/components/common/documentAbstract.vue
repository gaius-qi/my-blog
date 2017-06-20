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
import smoothScroll from 'smoothscroll'

export default {
  data () {
    return  {
      downElm: null
    }
  },
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
            value: 6923
          },
          {
            name: 'web',
            value: 7932
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
            value: 3421
          },
          {
            name: 'CSS3',
            value: 6745
          },
          {
            name: 'HTML5',
            value: 5352
          },
          {
            name: 'Vue',
            value: 7965
          },
          {
            name: 'React.js',
            value: 2301
          },
          {
            name: 'Javascript',
            value: 2401
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

    this.downElm = document.querySelector('.second-paper')

    wordsChart.on('click', param => {
      smoothScroll(this.downElm, 600)
      this.$router.push(`/tag_pages/${param.name}`)
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
  box-shadow 0 0 0.7rem rgba(0, 0, 0, 1)
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

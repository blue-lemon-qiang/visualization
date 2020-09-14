var vm = new Vue({
    el: '#app',
    data: {
        value0:0,
        value: 0,
        option: {
            xAxis: {
                name: '职称',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                nameTextStyle: {
                    fill: '#09e0e9'
                },
                axisLine: {
                    style: {
                        stroke: '#fff'
                    }
                },
                axisTick: {
                    style: {
                        stroke: '#fff'
                    }
                },
                axisLabel: {
                    style: {
                        fill: '#09e0e9'
                    }
                }
            },
            yAxis: {
                name: '人数',
                data: 'value',
                min: 0,
                minInterval: 1,
                nameTextStyle: {
                    fill: '#09e0e9'
                },
                axisLine: {
                    style: {
                        stroke: '#fff'
                    }
                },
                axisTick: {
                    style: {
                        stroke: '#fff'
                    }
                },
                axisLabel: {
                    style: {
                        fill: '#09e0e9'
                    }
                }
            },
            series: [
                {
                    data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                    type: 'bar',
                    gradient: {
                        color: ['#37a2da', '#67e0e3']
                    },
                    label: {
                        show: true,
                        position: 'center',
                        offset: [0, 0],
                        style: {
                            fill: '#fff'
                        }
                    }
                }
            ]
        },
        mapOption : {
            title: {
              text: '公司分布情况',
              style:{
                  fill:'#fff'
              }
            },
            tooltip:{

            },
            series: [
              {
                type: 'pie',
                data: [
                  { name: '历下区', value: 93 },
                  { name: '济阳区', value: 32 },
                  { name: '莱芜区', value: 65 },
                  { name: '章丘区', value: 44 }
                ],
                insideLabel: {
                  show: true
                }
              }
            ]
          }
    }
})
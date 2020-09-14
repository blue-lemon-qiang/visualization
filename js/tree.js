var myChart = echarts.init(document.getElementById('tree'));
myChart.showLoading();
$.get('./json/tree.json', function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series:[
            {
                type: 'tree',
                data: [data],
                left: '2%',
                right: '2%',
                top: '8%',
                bottom: '20%',

                symbol: 'emptyCircle',

                orient: 'vertical',

                expandAndCollapse: true,
                //文本标签的样式
                label: {
                    // position: 'top',
                    // rotate: -90,
                    // verticalAlign: 'middle',
                    // align: 'right',
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 15,
                    color:'#fff'
                },

                leaves: {
                    label: {
                        position: 'bottom',
                        rotate: -90,
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                animationDurationUpdate: 750,
                //节点的样式
                itemStyle:{
                    borderColor: 'rgba(200,203,47,1)'
                },
                lineStyle:{
                    //树图  边的颜色
                    color:'rgba(24,170,126,1)'
                }
            },
        ]
    });
});

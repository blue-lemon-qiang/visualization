$(function () {
    var myChart = echarts.init(document.getElementById('main'));
    myChart.showLoading();
    $.get('./json/济南市.json', function (geoJson) {
        myChart.hideLoading();
        echarts.registerMap('济南市', geoJson);
        myChart.setOption( {
            // jiNanDatas:[
            //     {
            //         name: '历下区',
            //         value: 500
            //     }, {
            //         name: '莱芜区',
            //         value: 100
            //     }, {
            //         name: '济阳区',
            //         value: 300
            //     }, {
            //         name: '章丘区',
            //         value: 0
            //     }
            // ],
            geo: {
                map: '济南市',
                label: {
                    normal: {
                        show: true,
                        color: '#fff'
                    },
                    emphasis: {
                        show: true,
                        color: '#fff'
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#40458e',
                        borderColor: '#6367ad',
                        borderWidth: 1.5
                    },
                    emphasis: {
                        show:false,
                        areaColor: '#161f89'
                    }
                },
                //在地图中对特定的区域配置样式
                regions: [{
                    name: '济阳区',
                    itemStyle: {
                        areaColor: '#3ba7db',
                        color: '#3ba7db'
                    }
                },
                {
                    name: '章丘区',
                    itemStyle: {
                        areaColor: '#3ba7db',
                        color: '#3ba7db'
                    }
                },
                {
                    name: '莱芜区',
                    itemStyle: {
                        areaColor: '#3ba7db',
                        color: '#3ba7db'
                    }
                },
                {
                    name: '历下区',
                    itemStyle: {
                        areaColor: '#3ba7db',
                        color: '#3ba7db'
                    }
                },
                ],

                //组件离容器的距离
                "left": 0,
                "right": 0,
                "top": 0,
                "bottom": 0
            },
            series: [{
                name: '活跃人数分布',
                type: 'map',
                geoIndex:0,
                blurSize: 30,
                label:{
                    show:true
                },
                zoom:1.2,
                data:[
                    {
                        name: '历下区',
                        value: 500
                    }, {
                        name: '莱芜区',
                        value: 100
                    }, {
                        name: '济阳区',
                        value: 300
                    }, {
                        name: '章丘区',
                        value: 0
                    }
                ]
            }],
            tooltip: {
		        //trigger: 'item',  formatter: '{b}:{c}'
	        	// enterable:true,
	        	trigger:'item',
	        	formatter:'{b} {c}'
		    }
        });
    });
})
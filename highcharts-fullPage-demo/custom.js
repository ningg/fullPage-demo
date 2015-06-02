// multi-line

$(function () {
    $('#container-tooltips2').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Snow depth at Vikjafjellet, Norway'
        },
        subtitle: {
            text: 'Irregular time data in Highcharts JS'
        },
        xAxis: {
			categories: ['2015-02-03', '2015-02-04', '2015-02-05'],
        },
        yAxis: {
            title: {
                text: 'Snow depth (m)'
            },
            min: 0
        },
        tooltip: {
			shared: true,
			crosshairs: true,
			headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.name} : {point.y}°C<br/>'
        },
        
        series: [{
            name: 'Winter 2007-2008',
            data: [
				{name:'2013-02-03', y:0},
                {name:'2013-02-04', y:0.6},
				{name:'2013-02-05', y:0.3}
            ]
        }, {
            name: 'Winter 2008-2009',
            data: [
                {name:'2014-02-03', y:0},
                {name:'2014-02-04', y:1.6},
				{name:'2014-02-05', y:1.3}
            ]
        }, {
            name: 'Winter 2009-2010',
            data: [
                {name:'2016-02-03', y:0},
                {name:'2016-02-04', y:2.6},
				{name:'2016-02-05', y:2.3}
            ]
        }]
		
    });
});				






// line-tooltips
$(function () {
    $('#container-tooltips1').highcharts({
        chart: {
            type: 'spline',
            //inverted: true
        },
        title: {
            text: 'Atmosphere Temperature by Altitude'
        },
        subtitle: {
            text: 'According to the Standard Atmosphere Model'
        },
        xAxis: {
            //reversed: false,
            title: {
                enabled: true,
                text: 'Altitude'
            },
            labels: {
                formatter: function() {
                    return this.value +'km';
                }
            },
            maxPadding: 0.05,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Temperature'
            },
            labels: {
                formatter: function() {
                    return this.value + '°';
                }
            },
            lineWidth: 2
        },
        legend: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x} km: {point.y}°C'
        },
        plotOptions: {
            spline: {
                marker: {
                    enable: false
                }
            }
        },
        series: [{
            name: 'Temperature',
            data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
                [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
        }]
    });
});	


// line chart
$(function () {
    $('#user-line-container').highcharts({
        colors: ['#ED561B', '#058DC7', '#DDDF00', '#50B432', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
		title: {
            text: '用户数量',
            x: -20 //center
        },
        subtitle: {
            //text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            title: {
                text: '人数（千）'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '千'
        },
        legend: {
            //layout: '',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: '2013-01-01~2013-12-31',
            data: [2.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        },{
            name: '2014-01-01~2014-12-31',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }]
    });
});







// Histogram: machine bar
$(function () {
    $('#machine-bar-container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '各分行机器数量'
        },
        subtitle: {
            //text: 'Source: WorldClimate.com'
        },
        xAxis: {
			labels: {
                style: {
                    //color: '#444',
                    color: 'black',
                    //fontStyle : 'bold'//这个是控制斜放的
					font: '0.5em/2 Microsoft YaHei,"Arial", "Helvetica", sans-serif',
					fontSize: '5px'
                },
				rotation : -45,  //这个是控制竖放的
				x : 7
				
            },
            categories: [
                '北京',
                '长春',
                '长沙',
                '成都',
                '重庆',
                '大连',
                '福州',
                '广州',
                '贵阳',
                '哈尔滨',
                '杭州',
                '合肥',
				'呼和浩特',
				'海口',
				'济南',
				'昆明',
				'龙岩',
				'兰州',
				'南昌',
				'南京',
				'南宁',
				'南平',
				'宁波',
				'宁德',
				'莆田',
				'青岛',
				'泉州',
				'三明',
				'上海',
				'沈阳',
				'深圳',
				'石家庄',
				'苏州',
				'太原',
				'天津',
				'武汉',
				'乌鲁木齐',
				'西安',
				'厦门',
				'西宁',
				'香港',
				'漳州',
				'郑州'
            ]			
        },
        yAxis: {
            min: 0,
            title: {
                text: '数量（台）'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f} 台</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
		scrollbar: {
			enabled: true
		},
        series: [{
            name: '分行',
            data: [22,23,21,10,5,15,6,18,25,11,
				   32,15,17,41,33,22,15,52,45,13,
				   70,45,40,17,45,11,35,17,41,20,
				   21,45,8,10,45,45,7,31,40,44,
				   33,21,30]

        }
		]
    });
});	

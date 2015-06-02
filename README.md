# fullPage-demo
the demo of fullPage.js

##简介

利用[fullPage.js]，实现全屏滚动切换效果，同时，在每一屏中，利用[Highcharts][Highcharts]实现图表展示。


##问题

当采用下述方式，实现`fullPage` + `Highcharts`效果时，采用如下代码，会出现样式错乱：

	<html>
		<head>
			...
			<script src="./custom.js"></script>
		</head>
		<body>...</body>
	</html>


解决办法：在页面中，需要先加载完整个页面之后，再去实现[Highcharts][Highcharts]图表，即：在`页面末端`插入：

	<html>
		<head>...</head>
		<body>...</body>
		<script src="./custom.js"></script>
	</html>




##参考来源

* [fullPage.js][fullPage.js]
* [Highcharts][Highcharts]
* [Highcharts中文网][Highcharts中文网]




[fullPage.js]:					https://github.com/alvarotrigo/fullPage.js
[Highcharts]:					http://www.highcharts.com/
[Highcharts中文网]:				http://www.hcharts.cn/